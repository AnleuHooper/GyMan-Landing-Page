import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const { name, whatsapp, privacy_consent } = payload;

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

    // Simular retraso de procesamiento
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simular respuesta exitosa
    return NextResponse.json(
      { success: true, message: "Lead registrado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error procesando el payload" },
      { status: 500 }
    );
  }
}
