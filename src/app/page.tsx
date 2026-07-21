import Hero from "@/components/Hero";
import BranchGrid from "@/components/BranchGrid";
import Footer from "@/components/Footer";
import Script from "next/script";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      {/* TopNavBar — hidden per user request */}
      <nav
        className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl transition-all duration-300 hidden"
        id="mainNav"
      >
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto font-['Space_Grotesk'] tracking-tighter">
          <div className="hidden md:flex gap-10 items-center"></div>
          <div className="flex items-center gap-6">
            {/* Login buttons removed per user request */}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <BranchGrid />
        <Suspense fallback={null}>
          <LeadCaptureModal />
        </Suspense>

        {/* Section 4: Network Stats */}
        <section id="network" className="py-32 bg-background relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="bg-surface/50 p-12 rounded-3xl border border-white/5 reveal">
                <p className="text-primary font-headline text-8xl font-black mb-4" data-target="14">+</p>
                <h4 className="text-white font-headline text-2xl uppercase tracking-tighter mb-4">Red de Sucursales</h4>
                <p className="text-zinc-500 font-light">Una sola membresía te da acceso a toda nuestra infraestructura tecnológica.</p>
              </div>
              <div className="bg-surface/50 p-12 rounded-3xl border border-white/5 reveal">
                <p className="text-white font-headline text-8xl font-black mb-4" data-target="20" data-suffix="k">0</p>
                <h4 className="text-white font-headline text-2xl uppercase tracking-tighter mb-4">Atletas Elite</h4>
                <p className="text-zinc-500 font-light">Miles de personas han procesado su rediseño biológico en nuestros nodos.</p>
              </div>
              <div className="bg-surface/50 p-12 rounded-3xl border border-white/5 reveal">
                <p className="text-primary font-headline text-8xl font-black mb-4" data-target="100" data-suffix="%">0</p>
                <h4 className="text-white font-headline text-2xl uppercase tracking-tighter mb-4">Alto Rendimiento</h4>
                <p className="text-zinc-500 font-light">Equipamiento de vanguardia y soporte técnico certificado 24/7.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* SideDrawer */}
      <div id="sideDrawer" className="fixed inset-0 z-[100] invisible">
        <div id="drawerOverlay" className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
        <div id="drawerPanel" className="absolute h-full w-80 right-0 bg-[#0e0e0e] flex flex-col shadow-2xl translate-x-full duration-300 border-l border-white/5">
          <div className="p-10 border-b border-white/5 bg-surface/30">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">account_circle</span>
            </div>
            <h6 className="text-white font-headline font-black text-xl uppercase tracking-tighter">Acceso Miembro</h6>
            <p className="text-[10px] text-zinc-500 tracking-widest uppercase mt-1">Estatus: Conectando...</p>
          </div>
          <div className="flex-grow py-8 bg-black/20">
            <a className="flex items-center gap-4 text-zinc-500 px-10 py-6 hover:text-primary transition-all font-headline font-bold uppercase text-sm tracking-widest" href="#templos">
              <span className="material-symbols-outlined">location_on</span> Sucursales
            </a>
          </div>
          <div className="p-10"></div>
        </div>
      </div>

      {/* Temple Info Modal */}
      <div
        id="templeModal"
        className="fixed inset-0 z-[200] flex items-center justify-center invisible opacity-0 transition-all duration-300"
        style={{ padding: "env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px)" }}
      >
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl"></div>
        <div className="modal-panel relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 p-1 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)] rounded-2xl mx-3 sm:mx-4">
          <div className="bg-surface p-5 sm:p-8 md:p-16 overflow-y-auto" style={{ maxHeight: "calc(100dvh - 3rem)" }}>
            <button id="closeModal" className="absolute top-4 right-4 sm:top-8 sm:right-8 text-zinc-500 hover:text-white transition-colors z-10">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div id="modalDetails">{/* Dynamic content injected by main.js */}</div>
          </div>
        </div>
      </div>

      {/* Legacy main.js — runs all interactivity */}
      <Script id="legacy-main-js" src={`/legacy/main.js?v=${Date.now()}`} strategy="afterInteractive" type="module" />
    </>
  );
}
