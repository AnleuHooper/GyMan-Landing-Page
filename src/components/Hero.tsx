"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-12 w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9c400]/10 via-background to-background"></div>
        <img
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIbUme7H8Br-p2-DX5MvaxuYrUHygQruBcQYWaWPk_alk44hFo3rBWPtSUAzVVAjz9uyXRZaEb0Q10jMer6Zxu-eLm7NEGq0ayWBI7_7Ba5DGu0ZzTY10G0-u2vRvbXzayPI8pd5rErgLZxCyB0O0Ft1vHhGY-lupdKDWe2Ya6cS5taPbjVfnocjbsGkqrCgn6SqzEQnfxErZehgVt_zaw6I_DuZrYWDmxNQG0aGLIzAMvm-C0irYR_XFI0ZzmHspaDvqhEJqC54Y"
          alt=""
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. VISTA EXCLUSIVA PARA CELULARES (Móvil: < 768px)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 w-full max-w-md mx-auto block md:hidden">
        {/* Logo Móvil */}
        <img
          src="/assets/Gyman Logo.png"
          alt="GyMan Logo"
          className="mx-auto h-20 w-auto object-contain mb-3 select-none pointer-events-none filter drop-shadow-[0_0_20px_rgba(233,196,0,0.3)]"
        />

        {/* Lema Móvil */}
        <h1 className="tracking-tighter leading-none mb-4">
          <span className="font-tiffin text-lg sm:text-xl font-light text-white/90 block tracking-tight">
            Si no vienes a darlo todo mejor no vengas
          </span>
        </h1>

        {/* Badge Animado de Agosto */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.2em] text-primary uppercase border border-primary/40 px-4 py-1.5 rounded-full bg-primary/10 shadow-[0_0_20px_rgba(233,196,0,0.25)] backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            PROMO AGOSTO — REFERIDO
          </span>
        </div>

        {/* Título Móvil Impactante */}
        <h2 className="font-headline text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase leading-tight mb-4 drop-shadow-[0_0_25px_rgba(233,196,0,0.35)]">
          ¡TRAE A UN AMIGO Y TU MES VIP ES <span className="text-primary">GRATIS</span>!
        </h2>

        {/* Imagen del Referido SIN CONTORNO NI BORDE (PNG Transparente Directo) */}
        <img
          src="/assets/Referido.png"
          alt="Promoción Referido GyMan Agosto"
          className="w-full max-w-[280px] sm:max-w-xs mx-auto h-auto object-contain my-5 select-none pointer-events-none"
        />

        {/* Explicación Móvil */}
        <p className="font-body text-xs text-zinc-300 font-normal leading-relaxed mb-5 px-2">
          Durante <strong className="text-white">Agosto</strong>, si eres socio GyMan y traes a un amigo <strong className="text-primary font-bold">100% nuevo</strong> a comprar su <strong className="text-white font-bold">Membresía VIP</strong>, ¡tu VIP del mes es <span className="text-primary font-black uppercase">GRATIS</span>!
        </p>

        {/* Tarjetas Apiladas Móvil Exclusivas */}
        <div className="flex flex-col gap-2.5 w-full mb-6 text-left">
          <div className="bg-[#141414]/90 p-3.5 rounded-xl border border-emerald-500/30 flex items-center gap-3 backdrop-blur-md shadow-lg">
            <span className="material-symbols-outlined text-emerald-400 text-xl shrink-0">check_circle</span>
            <div>
              <h3 className="text-[11px] font-headline font-bold text-white uppercase tracking-wider">Socio + Cliente Nuevo VIP</h3>
              <p className="text-[10px] text-zinc-400 leading-tight">Amigo nuevo compra VIP → Tu VIP del mes es GRATIS.</p>
            </div>
          </div>

          <div className="bg-[#141414]/90 p-3.5 rounded-xl border border-emerald-500/30 flex items-center gap-3 backdrop-blur-md shadow-lg">
            <span className="material-symbols-outlined text-emerald-400 text-xl shrink-0">check_circle</span>
            <div>
              <h3 className="text-[11px] font-headline font-bold text-white uppercase tracking-wider">Dos Clientes Nuevos VIP</h3>
              <p className="text-[10px] text-zinc-400 leading-tight">2 amigos nuevos se inscriben juntos en VIP.</p>
            </div>
          </div>

          <div className="bg-[#141414]/90 p-3 rounded-xl border border-rose-500/25 flex items-center gap-2.5 backdrop-blur-md">
            <span className="material-symbols-outlined text-rose-400 text-lg shrink-0">cancel</span>
            <p className="text-[10px] text-zinc-400 leading-tight">
              <strong className="text-zinc-300 uppercase font-semibold">Exclusiones:</strong> No aplica entre 2 socios activos ni con ex-socios antiguos.
            </p>
          </div>
        </div>

        {/* Botón CTA Táctil Móvil de Alto Impacto */}
        <a
          href="#templos"
          className="w-full block bg-primary text-on-primary py-4 font-headline font-black text-sm tracking-widest rounded-xl shadow-[0_0_30px_rgba(233,196,0,0.4)] active:scale-95 transition-all duration-200 uppercase text-center hover:bg-primary/90"
        >
          ¡Quiero mi VIP Gratis!
        </a>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. VISTA PARA ESCRITORIO / ESCRITORIO (Desktop: >= 768px)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto hero-glow promo-active hidden md:block">
        {/* Logo GyMan Estándar */}
        <img
          src="/assets/Gyman Logo.png"
          alt="GyMan Logo"
          className="mx-auto h-36 lg:h-48 w-auto object-contain mb-4 filter drop-shadow-[0_0_35px_rgba(233,196,0,0.35)] select-none pointer-events-none"
        />

        {/* Lema Principal */}
        <div className="default-hero-content mb-6">
          <h1 className="tracking-tighter leading-none mb-3">
            <span className="font-tiffin text-3xl lg:text-5xl font-light text-white block tracking-tight">
              Si no vienes a darlo todo mejor no vengas
            </span>
          </h1>
          <p className="font-body text-lg text-zinc-400 font-light max-w-2xl mx-auto tracking-wide">
            Encuentra el GyMan más cercano y empieza tu evolución hoy.
          </p>
        </div>

        {/* Tarjeta de Promoción de Agosto: REFERIDO */}
        <div className="promo-hero-content mb-10">
          <div className="mx-auto max-w-3xl p-[1px] rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 shadow-[0_0_50px_rgba(233,196,0,0.25)] border border-amber-500/30 hover:scale-[1.005] transition-transform duration-500">
            <div className="bg-[#0e0e0e]/95 backdrop-blur-2xl p-8 md:p-10 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Badge Animado de Agosto */}
                <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] text-primary uppercase mb-4 border border-primary/40 px-4 py-1.5 rounded-full bg-primary/10 shadow-[0_0_15px_rgba(233,196,0,0.2)]">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  PROMO AGOSTO — REFERIDO
                </span>

                {/* Título de la Promoción */}
                <h2 className="font-headline text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-tight mb-4 drop-shadow-[0_0_20px_rgba(233,196,0,0.3)]">
                  ¡TRAE A UN AMIGO Y TU MES VIP ES <span className="text-primary">GRATIS</span>!
                </h2>

                {/* Imagen Banner de Referido SIN CONTORNO NI BORDE (PNG Transparente Directo) */}
                <img
                  src="/assets/Referido.png"
                  alt="Promoción Referido GyMan Agosto"
                  className="w-full max-w-lg mx-auto h-auto object-contain mb-6 select-none pointer-events-none hover:scale-105 transition-transform duration-500"
                />

                {/* Explicación Detallada y Clara */}
                <p className="font-body text-base text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed mb-6">
                  Durante el mes de <strong className="text-white font-bold">Agosto</strong>, si eres socio GyMan y traes a un amigo que sea <strong className="text-primary font-bold">cliente 100% nuevo</strong> (sin inscripciones previas) a adquirir su <strong className="text-white font-bold">Membresía VIP</strong>, ¡tu membresía VIP del mes es <span className="text-primary font-black uppercase underline decoration-primary/50 underline-offset-4">totalmente GRATIS</span>!
                </p>

                {/* Grid de Reglas de Aplicación */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mb-6 text-left">
                  <div className="bg-surface/80 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-400 text-xl shrink-0 mt-0.5">check_circle</span>
                    <div>
                      <h3 className="text-xs font-headline font-bold text-white uppercase tracking-wider">Socio + Cliente Nuevo</h3>
                      <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Socio activo trae a un amigo sin registros previos en GyMan que compra VIP.</p>
                    </div>
                  </div>

                  <div className="bg-surface/80 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-400 text-xl shrink-0 mt-0.5">check_circle</span>
                    <div>
                      <h3 className="text-xs font-headline font-bold text-white uppercase tracking-wider">Dos Clientes Nuevos</h3>
                      <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Dos personas 100% nuevas se inscriben juntas al mismo tiempo en VIP.</p>
                    </div>
                  </div>

                  <div className="bg-surface/80 p-4 rounded-xl border border-rose-500/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-rose-400 text-xl shrink-0 mt-0.5">cancel</span>
                    <div>
                      <h3 className="text-xs font-headline font-bold text-zinc-300 uppercase tracking-wider">No aplica entre socios</h3>
                      <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">No es válido si el referido ya es o fue socio activo reciente de GyMan.</p>
                    </div>
                  </div>

                  <div className="bg-surface/80 p-4 rounded-xl border border-rose-500/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-rose-400 text-xl shrink-0 mt-0.5">cancel</span>
                    <div>
                      <h3 className="text-xs font-headline font-bold text-zinc-300 uppercase tracking-wider">No aplica con ex-socios</h3>
                      <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">No aplica para ex-socios que abandonaron su membresía en el pasado.</p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  *Promoción válida exclusivamente con la Membresía VIP durante el mes de Agosto 2026.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Acción Principal Desktop */}
        <div className="flex flex-col items-center justify-center gap-8">
          <a
            id="findMyTempleBtn"
            href="#templos"
            className="bg-primary text-on-primary px-10 py-5 font-headline font-black tracking-widest rounded-sm shadow-[0_0_35px_rgba(233,196,0,0.4)] hover:scale-105 transition-transform text-center uppercase"
          >
            ¡Quiero mi VIP Gratis! Busca tu gimnasio
          </a>
        </div>
      </div>
    </section>
  );
}


