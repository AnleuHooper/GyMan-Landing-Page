export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9c400]/5 via-background to-background"></div>
        <img
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIbUme7H8Br-p2-DX5MvaxuYrUHygQruBcQYWaWPk_alk44hFo3rBWPtSUAzVVAjz9uyXRZaEb0Q10jMer6Zxu-eLm7NEGq0ayWBI7_7Ba5DGu0ZzTY10G0-u2vRvbXzayPI8pd5rErgLZxCyB0O0Ft1vHhGY-lupdKDWe2Ya6cS5taPbjVfnocjbsGkqrCgn6SqzEQnfxErZehgVt_zaw6I_DuZrYWDmxNQG0aGLIzAMvm-C0irYR_XFI0ZzmHspaDvqhEJqC54Y"
          alt=""
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto hero-glow promo-active">
        <img
          src="/assets/Gyman Logo rosa.png"
          alt="GyMan Logo"
          className="mx-auto h-32 md:h-60 lg:h-72 w-auto object-contain mb-4 md:mb-8 filter drop-shadow-[0_0_40px_rgba(255,46,147,0.4)] select-none pointer-events-none"
        />

        {/* Contenido por defecto (Lema principal) */}
        <div className="default-hero-content">
          <h1 className="tracking-tighter leading-none mb-6">
            <span className="font-tiffin text-2xl md:text-5xl font-light text-white block tracking-tight">
              Si no vienes a darlo todo mejor no vengas
            </span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-zinc-500 font-light mb-8 max-w-2xl mx-auto tracking-wide">
            Encuentra el GyMan más cercano y empieza tu evolution hoy.
          </p>
        </div>

        {/* Contenido de Promoción de Julio */}
        <div className="promo-hero-content mb-10">
          <div className="mx-auto max-w-md md:max-w-2xl p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 shadow-[0_0_40px_rgba(255,46,147,0.35)] border border-pink-500/20 hover:scale-[1.01] transition-transform duration-500">
            <div className="bg-background/95 backdrop-blur-xl px-8 py-8 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-44 h-44 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-16 -bottom-16 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.3em] text-pink-400 uppercase mb-3.5 border border-pink-500/30 px-3 py-1 rounded bg-pink-500/10 animate-pulse">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                  </span>
                  Promoción de Julio
                </span>
                <h1 className="font-headline text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-3 pink-neon-glow">
                  Mujeres por $249
                </h1>
                <p className="font-body text-base md:text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
                  Todas las mujeres pueden adquirir la <strong className="text-pink-400 font-bold">Mensualidad Básica</strong> en cualquier sucursal por solo <strong className="text-white font-black text-2xl md:text-3xl pink-neon-glow">$249 MXN</strong>.
                </p>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-4">
                  *Beneficios y amenidades equivalentes a la membresía más básica de cada sucursal. Válido solo en Julio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <a
            id="findMyTempleBtn"
            href="#templos"
            className="bg-primary text-on-primary px-10 py-5 font-headline font-black tracking-widest rounded-sm shadow-[0_0_30px_rgba(233,196,0,0.3)] hover:scale-105 transition-transform text-center"
          >
            Busca el gimnasio más cercano
          </a>
        </div>
      </div>
    </section>
  );
}
