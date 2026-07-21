"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

export function useAttribution() {
  const searchParams = useSearchParams();
  const fbclidRef = useRef<string | null>(null);

  useEffect(() => {
    // Al montar el componente, obtener el fbclid
    const param = searchParams.get("fbclid");
    if (param) {
      fbclidRef.current = param;
    }
  }, [searchParams]);

  const getAttribution = () => {
    // Si no estamos en el navegador, retornar un fallback seguro
    if (typeof window === "undefined") {
      return {
        fbclid: null,
        landing_url: "",
        captured_at: new Date().toISOString(),
      };
    }
    
    return {
      fbclid: fbclidRef.current,
      landing_url: window.location.href,
      captured_at: new Date().toISOString(),
    };
  };

  return { getAttribution };
}
