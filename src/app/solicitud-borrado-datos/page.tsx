import Footer from "@/components/Footer";

export default function SolicitudBorradoDatos() {
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
              Solicitud de <span className="text-primary">Borrado de Datos</span>
            </h1>
            
            <div className="space-y-6 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              <p>
                En GYMAN valoramos la privacidad y la transparencia en el manejo de la información. Con el objetivo de cumplir plenamente con las políticas de plataformas asociadas (como Meta for Developers) y la legislación mexicana aplicable, ponemos a su disposición los detalles sobre la retención de datos en nuestro sitio web.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">1. Inexistencia de Perfiles Digitales en la Web</h2>
              <p>
                Le informamos de forma clara y explícita que <strong className="text-white">este sitio web no cuenta con registros de usuarios, creación de cuentas ni bases de datos para perfiles digitales</strong>. Al no existir un sistema de login o inicio de sesión en esta landing page, GYMAN no almacena credenciales ni información de identificación personal en ningún servidor web asociado a este sitio informativo.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">2. Ejercicio de Derechos ARCO</h2>
              <p>
                Usted tiene en todo momento el derecho de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (Derechos ARCO). 
              </p>
              <p>
                Si desea ejercer estos derechos para eliminar o modificar cualquier información que pudiese haberse vinculado a usted a través de campañas publicitarias digitales (Meta Ads) o en los sistemas de registro físicos de nuestras sucursales, puede realizar el siguiente procedimiento:
              </p>
              <div className="bg-surface/50 border border-white/5 rounded-xl p-6 space-y-4 my-4">
                <p className="font-bold text-white uppercase tracking-wider text-xs">Procedimiento de Solicitud:</p>
                <ol className="list-decimal pl-6 space-y-2 text-zinc-400">
                  <li>Envíe un correo electrónico formal a la dirección: <a href="mailto:anleu3@gmail.com" className="text-primary hover:underline">anleu3@gmail.com</a>.</li>
                  <li>En el asunto indique: <strong className="text-white">&quot;Solicitud de Derechos ARCO - Eliminación de Datos&quot;</strong>.</li>
                  <li>En el cuerpo del mensaje, describa claramente los datos que desea que sean eliminados o modificados (por ejemplo, correos asociados a públicos personalizados de publicidad o datos de membresía en sucursales físicas).</li>
                </ol>
              </div>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">3. Plazos de Respuesta</h2>
              <p>
                Una vez recibida su solicitud por correo electrónico con todos los detalles necesarios, GYMAN procesará su requerimiento e implementará la eliminación o modificación correspondiente de forma oportuna. Le confirmaremos la resolución de su solicitud en un plazo <strong className="text-white">no mayor a 20 días hábiles</strong> contados a partir de la fecha de recepción de su correo.
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
