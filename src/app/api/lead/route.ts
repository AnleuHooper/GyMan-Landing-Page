import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const { name, whatsapp, privacy_consent, attribution, membership_interest } = payload;

    // Validación básica
    if (!name || !whatsapp || privacy_consent !== true) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios o no se aceptó la privacidad" },
        { status: 400 }
      );
    }

    // Validación formato E.164
    const e164Regex = /^\+[1-9]\d{6,14}$/;
    if (!e164Regex.test(whatsapp)) {
      return NextResponse.json(
        { error: "Formato de WhatsApp inválido. Debe ser E.164" },
        { status: 400 }
      );
    }

    // Mapear el payload al formato esperado por la Edge Function en Supabase
    const mappedPayload = {
      name,
      whatsapp,
      privacy_consent,
      membership_branch: membership_interest?.branch || "Desconocida",
      membership_type: membership_interest?.type || "Desconocida",
      membership_price: membership_interest?.price || "0",
      fbclid: attribution?.fbclid || null,
      landing_url: attribution?.landing_url || "Directo"
    };

    // Forward the request to Supabase lead-capture Edge Function
    const supabaseEdgeFunctionUrl = "https://lulrfbudxkswrlmmkyqq.supabase.co/functions/v1/lead-capture";
    
    // Obtener headers de red para enviarlos (útil para que la Edge function sepa la IP)
    const forwardedFor = request.headers.get("x-forwarded-for") || "";
    const userAgent = request.headers.get("user-agent") || "";

    const response = await fetch(supabaseEdgeFunctionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": forwardedFor,
        "user-agent": userAgent
      },
      body: JSON.stringify(mappedPayload)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error from Supabase Edge Function:", errorData);
      return NextResponse.json(
        { error: "Error interno al guardar los datos." },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, message: "Lead registrado exitosamente", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Critical error in /api/lead:", error);
    return NextResponse.json(
      { error: "Error procesando el payload" },
      { status: 500 }
    );
  }
}
