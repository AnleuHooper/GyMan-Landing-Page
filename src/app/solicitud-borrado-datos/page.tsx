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
                En GYMAN valoramos la privacidad y la transparencia en el manejo de la información. Con el objetivo de cumplir plenamente con las políticas de plataformas asociadas (como Meta for Developers) y la legislación mexicana aplicable (LFPDPPP), ponemos a su disposición el procedimiento para solicitar el borrado de sus datos personales.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">1. Tratamiento y Retención de Datos</h2>
              <p>
                GYMAN informa a sus usuarios que los datos de contacto (Nombre y WhatsApp) recolectados a través de nuestro formulario de Pase VIP son almacenados de forma segura con el único fin de coordinar visitas a sucursales y brindar atención comercial vía WhatsApp.
              </p>

              <h2 className="font-headline text-xl font-bold text-white uppercase tracking-wider pt-4 border-t border-white/5">2. Procedimiento de Solicitud de Eliminación (Derechos ARCO)</h2>
              <p>
                Si usted desea que su número de WhatsApp, nombre o registros de atribución publicitaria sean eliminados permanentemente de nuestros sistemas de prospectos y bases de datos, puede solicitar la baja total mediante el siguiente procedimiento:
              </p>
              
              <div className="bg-surface/50 border border-white/5 rounded-xl p-6 space-y-4 my-4">
                <p className="font-bold text-white uppercase tracking-wider text-xs">Procedimiento de Solicitud:</p>
                <ol className="list-decimal pl-6 space-y-2 text-zinc-400">
                  <li>Envíe un correo electrónico formal a: <a href="mailto:anleu3@gmail.com" className="text-primary hover:underline font-bold">anleu3@gmail.com</a></li>
                  <li>Asunto: <strong className="text-white">&quot;Solicitud de Derechos ARCO - Eliminación de Datos&quot;</strong></li>
                  <li>En el cuerpo del mensaje, proporcione el número de WhatsApp con el que solicitó su Pase VIP para proceder con la purga inmediata de su registro.</li>
                </ol>
              </div>

              <p>
                Una vez recibida la solicitud, GYMAN eliminará sus datos en un plazo no mayor a <strong className="text-white">20 días hábiles</strong> y le enviará la confirmación por correo.
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
