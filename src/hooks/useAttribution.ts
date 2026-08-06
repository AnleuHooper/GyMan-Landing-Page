"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const FBCLID_STORAGE_KEY = "omni_fbclid";

interface StoredClick {
  fbclid: string;
  clickedAt: number; // epoch ms — momento real del clic, no del envío
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function readStoredClick(): StoredClick | null {
  try {
    const raw = window.localStorage.getItem(FBCLID_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredClick) : null;
  } catch {
    return null;
  }
}

export function useAttribution() {
  const searchParams = useSearchParams();

  // Persistir el fbclid apenas aparece en la URL, junto con la hora del clic.
  // Sin esto la atribución se pierde en cuanto el visitante navega a otra página.
  useEffect(() => {
    const param = searchParams.get("fbclid");
    if (!param) return;

    try {
      const record: StoredClick = { fbclid: param, clickedAt: Date.now() };
      window.localStorage.setItem(FBCLID_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // localStorage bloqueado (navegación privada): seguimos sin persistencia.
    }
  }, [searchParams]);

  const getAttribution = () => {
    if (typeof window === "undefined") {
      return {
        fbclid: null,
        fbc: null,
        fbp: null,
        landing_url: "",
        captured_at: new Date().toISOString(),
      };
    }

    // El Pixel escribe _fbc y _fbp por su cuenta. _fbc ya trae el timestamp
    // correcto del clic, así que es la fuente más fiable disponible.
    const cookieFbc = readCookie("_fbc");
    const fbp = readCookie("_fbp");

    const stored = readStoredClick();
    const urlFbclid = searchParams.get("fbclid");
    const fbclid = urlFbclid ?? stored?.fbclid ?? null;

    // Prioridad: cookie del Pixel > reconstrucción con la hora real del clic.
    let fbc = cookieFbc;
    if (!fbc && fbclid) {
      const clickedAt = urlFbclid ? Date.now() : stored?.clickedAt ?? Date.now();
      fbc = `fb.1.${clickedAt}.${fbclid}`;
    }

    return {
      fbclid,
      fbc,
      fbp,
      landing_url: window.location.href,
      captured_at: new Date().toISOString(),
    };
  };

  return { getAttribution };
}
