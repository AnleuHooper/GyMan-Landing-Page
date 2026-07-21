import Footer from "@/components/Footer";

export default function AvisoDePrivacidad() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/10" id="mainNav">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1920px] mx-auto font-['Space_Grotesk'] tracking-tighter">
          <div className="flex items-center gap-4">
            <a href="/" className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver al inicio
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-primary font-headline text-xl font-black tracking-tighter">GYMAN</a>
          </div>
        </div>
      </nav>

      <main className="relative min-h-screen pt-32 pb-20 w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Glow Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e9c400]/5 via-background to-background"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="glass-panel border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 border-b border-white/5 pb-4">
              Aviso de <span className="text-primary">Privacidad</span>
            </h1>
            
            <div className="space-y-6 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              <p>
                En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México, <strong className="text-white">GYMAN</strong>, con domicilio para oír y recibir notificaciones en territorio mexicano, pone a su disposición el presente Aviso de Privacidad.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">1. Datos Personales Recabados</h2>
              <p>
                GYMAN le informa de manera transparente que esta landing page es de carácter strictly informativo. <strong className="text-white">Este sitio web no recopila, almacena ni procesa ningún tipo de dato personal de forma directa</strong>, debido a que no cuenta con formularios de contacto, registros de membresía en línea, boletines de noticias ni bases de datos activas en el servidor web.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">2. Cookies, Tecnologías de Seguimiento y Píxel de Meta</h2>
              <p>
                A pesar de no recabar datos a través de formularios, este sitio web utiliza cookies y herramientas de seguimiento de terceros, específicamente el <strong className="text-white">Píxel de Meta (Meta Ads)</strong> y herramientas de análisis web.
              </p>
              <p>
                Estas herramientas recopilan datos de carácter no sensible y de forma agregada, tales como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dirección IP (anonimizada o procesada por el proveedor).</li>
                <li>Tipo de navegador y sistema operativo utilizado.</li>
                <li>Páginas visitadas dentro del sitio y la duración de la visita.</li>
                <li>Interacciones y clics realizados en la landing page.</li>
              </ul>
              <p>
                La finalidad de este procesamiento es exclusivamente medir el rendimiento de nuestras campañas de publicidad digital (Meta Ads) y optimizar la experiencia de usuario dentro de la web.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">3. Finalidades del Tratamiento de Datos</h2>
              <p>
                Los datos no sensibles recopilados por las cookies y herramientas de analítica se utilizarán para las siguientes finalidades primarias:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Optimizar y personalizar la publicidad de GYMAN mostrada en las plataformas de Meta (Facebook, Instagram).</li>
                <li>Estadísticas de navegación y medición del rendimiento publicitario.</li>
                <li>Monitoreo de seguridad y prevención de abusos en el sitio web.</li>
              </ul>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">4. Consentimiento y Desactivación de Tecnologías</h2>
              <p>
                Al navegar en este sitio web, usted acepta el uso de cookies y el Píxel de Meta. Si desea restringir o bloquear este seguimiento, puede configurarlo a través de los ajustes de privacidad de su navegador de internet, o bien gestionar sus preferencias de anuncios directamente en su perfil de Meta (Facebook/Instagram).
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">5. Cambios al Aviso de Privacidad</h2>
              <p>
                GYMAN se reserva el derecho de modificar o actualizar este Aviso de Privacidad en cualquier momento para adaptarlo a novedades legislativas o políticas internas de cumplimiento corporativo. Cualquier modificación será publicada directamente en este sitio web.
              </p>
              
              <p className="text-xs text-zinc-500 pt-6">
                Última actualización: Julio 2026.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
