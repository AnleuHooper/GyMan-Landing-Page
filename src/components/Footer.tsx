export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h5 className="text-primary font-headline text-2xl font-black tracking-tighter mb-6">GYMAN</h5>
            <p className="text-zinc-600 text-sm font-light leading-relaxed">
              Red de Sucursales de Evolución. 14 nodos de alto rendimiento diseñados para tu transformación biológica.
            </p>
          </div>
          <div>
            <h6 className="text-zinc-500 font-headline font-bold text-xs tracking-[0.3em] uppercase mb-6">
              Red de Sucursales
            </h6>
            <div className="grid grid-cols-2 gap-2">
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Chimalli</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Fortaleza</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Huehuetoca</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Ixtapaluca</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Maxximus</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Neza VIP</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Pink Neza</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Pink Reyes</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Tezontle</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Tlapala</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Valle de Chalco</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Valle II</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors">Zapata</a>
              <a href="#templos" className="text-zinc-600 text-xs hover:text-primary transition-colors font-bold text-primary/60">Gold ★</a>
            </div>
          </div>
          <div>
            <h6 className="text-zinc-500 font-headline font-bold text-xs tracking-[0.3em] uppercase mb-6">
              Protocolos
            </h6>
            <a href="#templos" className="block text-zinc-600 text-xs hover:text-primary transition-colors mb-2">
              Localizar Sucursal
            </a>
            <a href="#network" className="block text-zinc-600 text-xs hover:text-primary transition-colors mb-2">
              Red GyMan
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            © 2026 GYMAN — Red de Sucursales de Evolución
          </p>
          <div className="flex gap-6 my-2 md:my-0">
            <a href="/aviso-de-privacidad" className="text-zinc-600 text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
              Aviso de Privacidad
            </a>
            <a href="/solicitud-borrado-datos" className="text-zinc-600 text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
              Eliminación de Datos
            </a>
          </div>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">Diseñado con Precisión Cinética</p>
        </div>
      </div>
    </footer>
  );
}
