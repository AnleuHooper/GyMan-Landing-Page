"use client";

import { useEffect, useState, FormEvent, useRef } from "react";
import { useAttribution } from "@/hooks/useAttribution";

interface MembershipInterest {
  branch: string;
  type: string;
  price: string;
}

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [interest, setInterest] = useState<MembershipInterest | null>(null);
  const { getAttribution } = useAttribution();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { branchName, membershipType, membershipPrice } = customEvent.detail;
      setInterest({
        branch: branchName,
        type: membershipType,
        price: membershipPrice,
      });
      // Reset form states
      setName("");
      setWhatsapp("");
      setPrivacyConsent(false);
      setStatus("idle");
      setErrorMsg("");
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    };

    window.addEventListener("gyman:open-lead-modal", handleOpenModal);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("gyman:open-lead-modal", handleOpenModal);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    
    // Auto-prefix with +52 if no plus sign exists and it looks like a mexican number
    let formattedWhatsapp = whatsapp.trim();
    if (!formattedWhatsapp.startsWith("+")) {
      // Si el usuario ingresa solo los 10 dígitos
      formattedWhatsapp = `+52${formattedWhatsapp.replace(/\D/g, '')}`;
    } else {
       // Remove all non-digit chars except the leading +
       const firstPlus = formattedWhatsapp.indexOf('+');
       const digits = formattedWhatsapp.replace(/\D/g, '');
       formattedWhatsapp = (firstPlus === 0) ? `+${digits}` : `+${digits}`;
    }

    const e164Regex = /^\+[1-9]\d{6,14}$/;
    if (!e164Regex.test(formattedWhatsapp)) {
      setErrorMsg("Formato de WhatsApp inválido.");
      return;
    }

    if (!privacyConsent) {
      setErrorMsg("Debes aceptar el Aviso de Privacidad.");
      return;
    }

    if (name.trim().length < 2) {
      setErrorMsg("Por favor, ingresa tu nombre.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // Una sola lectura: dos llamadas separadas podían devolver valores distintos.
    const attribution = getAttribution();

    // Identificador compartido entre el evento del navegador y el del servidor.
    // Sin él Meta cuenta el mismo lead dos veces: una por el Pixel y otra por CAPI.
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

    const payload = {
      name: name.trim(),
      whatsapp: formattedWhatsapp,
      privacy_consent: privacyConsent,
      membership_branch: interest?.branch || "Por definir",
      membership_type: interest?.type || "Desconocida",
      membership_price: interest?.price || "0",
      fbclid: attribution.fbclid,
      fbc: attribution.fbc,
      fbp: attribution.fbp,
      landing_url: attribution.landing_url || "Directo",
      event_id: eventId
    };

    try {
      const endpoint = process.env.NEXT_PUBLIC_LEAD_API_URL || "https://lulrfbudxkswrlmmkyqq.supabase.co/functions/v1/lead-capture";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      setStatus("success");

      // Meta Pixel: Habilidad 4 — Coincidencia Avanzada (Advanced Matching)
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("init", "977610231927047", {
          ph: formattedWhatsapp.replace(/\D/g, ""),
          fn: name.trim().split(" ")[0].toLowerCase(),
        });
        // Meta Pixel: Habilidad 3 — Evento de Conversión Real 'Lead'
        // El cuarto argumento (eventID) debe coincidir con el event_id que el
        // servidor manda a CAPI, o Meta contará este lead dos veces.
        (window as any).fbq("track", "Lead", {
          content_name: interest?.type,
          content_category: interest?.branch,
          value: parseFloat(interest?.price.replace(/[^0-9.]/g, "") || "0"),
          currency: "MXN",
        }, { eventID: eventId });
      }

      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);

    } catch (err) {
      setStatus("error");
      setErrorMsg("Ocurrió un error. Por favor intenta de nuevo.");
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-sm lead-modal-overlay p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        className="w-full max-w-md bg-surface border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 relative lead-modal-panel flex flex-col"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="mb-6">
          <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tighter leading-snug">
            {interest?.branch ? (
              <>¡Conoce GyMan <span className="text-primary">{interest.branch}</span> y asegura tu tarifa!</>
            ) : (
              <>¡Tu pase de visita gratis a <span className="text-primary">cualquier GyMan</span>!</>
            )}
          </h3>
          <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
            {interest?.branch ? (
              <>Déjanos tu WhatsApp para enviarte tu pase de visita gratis a <span className="font-bold text-white uppercase">{interest.branch}</span>, conocer las instalaciones sin compromiso y congelar tu precio especial de <span className="font-bold text-primary">{interest.type}</span> para pagar directamente en recepción.</>
            ) : (
              <>Déjanos tu WhatsApp para enviarte tu pase de visita gratis. Conoce nuestras instalaciones sin compromiso y asegura tu tarifa especial para pagar directamente en recepción.</>
            )}
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 animate-fadeIn">
             <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
             </div>
             <p className="font-headline font-bold text-white text-lg text-center uppercase tracking-wide">
               ✓ ¡Listo! Te enviamos tu visita gratis por WhatsApp.
             </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="lead-name" className="block text-[10px] font-black uppercase text-zinc-500 mb-1.5 tracking-widest">
                Nombre Completo
              </label>
              <input 
                id="lead-name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div>
              <label htmlFor="lead-whatsapp" className="block text-[10px] font-black uppercase text-zinc-500 mb-1.5 tracking-widest">
                WhatsApp
              </label>
              <input 
                id="lead-whatsapp"
                type="tel" 
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                placeholder="+52 55 1234 5678"
              />
            </div>

            <div className="flex items-start gap-3 mt-2">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  required
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-background"
                />
              </div>
              <label htmlFor="privacy-consent" className="text-xs text-zinc-400 leading-tight">
                Acepto el <a href="/aviso-de-privacidad" target="_blank" className="text-primary hover:underline">Aviso de Privacidad</a> y consiento el tratamiento de mis datos para ser contactado.
              </label>
            </div>

            {errorMsg && (
              <p className="text-pink-400 text-xs font-medium bg-pink-500/10 border border-pink-500/20 p-2 rounded">
                {errorMsg}
              </p>
            )}

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-on-primary font-black uppercase tracking-widest py-3.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
            >
              {status === "loading" ? (
                <>
                  <div className="spinner"></div>
                  <span>Generando tu visita gratis...</span>
                </>
              ) : (
                "Obtener mi visita gratis por WhatsApp →"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
