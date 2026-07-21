export default function BranchGrid() {
  return (
    <section id="templos" className="py-32 px-8 bg-background">
      <div className="max-w-[1400px] mx-auto mb-20">
        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase">
          Nuestras Sucursales
        </h2>
        <div className="w-20 h-2 bg-primary mb-8"></div>
        <p className="text-zinc-500 max-w-2xl font-light text-lg italic">
          Selecciona una sucursal para acceder a sus protocolos, membresías y cianotipos de entrenamiento.
        </p>
      </div>

      <div id="cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {/* 1: Chimalli */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="chimalli">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/131696e9-73a7-44c9-8aad-3f1b00f5cca2/1777023930640_4ya31h.jpg" alt="CHIMALLI" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-white mb-2 uppercase">CHIMALLI</h3>
            <p className="text-zinc-400 text-xs font-body leading-relaxed line-clamp-2">Av. del Peñon, esquina av. Acuitlapilco Chimalhuacán.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9498 5173
            </p>
          </div>
        </div>

        {/* 2: Fortaleza */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="fortaleza">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/cee9fe5d-d7af-4ecf-94b7-b926492bb1d2/1777021471903_xk3g3a.jpg" alt="FORTALEZA" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:-translate-y-4 transition-transform text-white">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">FORTALEZA</h3>
            <p className="text-zinc-400 text-xs line-clamp-2">Av. Chimalhuacán Esquina con Caballo bayo, Nezahualcóyotl.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9202 3444
            </p>
          </div>
        </div>

        {/* 3: Huehuetoca */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="huehuetoca">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/a7bc0942-e87a-46ce-9405-77ea568e7583/1777025542109_1953m9.jpg" alt="HUEHUETOCA" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-white mb-2 uppercase">HUEHUETOCA</h3>
            <p className="text-zinc-400 text-xs">Carretera Refinería Tula - Jorobas km 05, Huehuetoca.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9664 2430
            </p>
          </div>
        </div>

        {/* 4: Ixtapaluca */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="ixtapaluca">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/cfce29a2-0266-4cc2-bb12-4c1895f1611f/1777026311240_2mgng3.jpg" alt="IXTAPALUCA" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-white mb-2 uppercase">IXTAPALUCA</h3>
            <p className="text-zinc-400 text-xs">Avenida del canal esquina calle caoba Colonia Alfredo del mazo.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9386 2086
            </p>
          </div>
        </div>

        {/* 5: Maxximus */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="maxximus">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/b1000000-0000-0000-0000-000000000002/1777026566286_7vsq68.jpg" alt="MAXXIMUS" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-white mb-2 uppercase">MAXXIMUS</h3>
            <p className="text-zinc-400 text-xs">Plaza Tudanca, Matamoros 1, Chalco Centro.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9378 5241
            </p>
          </div>
        </div>

        {/* 6: Neza VIP */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="nezavip">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDMW4da8RlTybKY_PURfl2wiy_hnG7ltCD7hdT7wfGABZDxjGFDQBmtS0DwxuRI_rCycKYM50FHia9W2KAXOHiO58utDPMJfu6nn_XKsZMOkWHMp0KDb_91oWXTFm-WsMfS9672lBnKnwWi1KeRPG_btr_La7AhQe3H7d0wrwb0x_BqvK-TmjQA4fEY1ee16ETHGhEUmbFYu0nmZWOjMYIRI0k_ugLHjednauZOorK0WQeSSps27ZAgFVwmKMtpnvzMkQ4QMVjfBQ" alt="NEZA VIP" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-primary mb-2 uppercase">NEZA VIP</h3>
            <p className="text-zinc-400 text-xs">Esquina Calle Adelita y Cama de piedra Col. Benito Juárez.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-white/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9026 1498
            </p>
          </div>
        </div>

        {/* 7: Pink Neza */}
        <div className="group temple-card relative aspect-[9/16] border border-pink-500/20 bg-surface rounded-2xl overflow-hidden reveal" data-temple="pinkneza">
          <div className="absolute inset-0 bg-pink-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4 text-white">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-pink-400 mb-2 uppercase">PINK NEZA</h3>
            <p className="text-zinc-400 text-xs">La Mariquita #211, Colonia Benito Juárez, Nezahualcóyotl.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-pink-400/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9386 5657
            </p>
          </div>
        </div>

        {/* 8: Pink Reyes */}
        <div className="group temple-card relative aspect-[9/16] border border-pink-500/20 bg-surface rounded-2xl overflow-hidden reveal" data-temple="pinkreyes">
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-pink-400 mb-2 uppercase">PINK REYES</h3>
            <p className="text-zinc-400 text-xs">Paseo del Tepozán esquina Álamos, Floresta, Los Reyes.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-pink-400/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9757 8090
            </p>
          </div>
        </div>

        {/* 9: Tezontle */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="tezontle">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter text-primary mb-2 uppercase">TEZONTLE</h3>
            <p className="text-zinc-400 text-xs">Canal de Tezontle 55 Primer Piso, Iztapalapa, CDMX.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9056 1942
            </p>
          </div>
        </div>

        {/* 10: Tlapala */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="tlapala">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">TLAPALA</h3>
            <p className="text-zinc-400 text-xs">Calle Allende MZ 1 LT 1, esquina 21 de dic, La Candelaria.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9714 5994
            </p>
          </div>
        </div>

        {/* 11: Valle Chalco */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="vallechalco">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">VALLE DE CHALCO</h3>
            <p className="text-zinc-400 text-xs">Av. Alfredo del Mazo #132, colonia Jardín.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9355 0633
            </p>
          </div>
        </div>

        {/* 12: Valle II */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="valle2">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white transition-transform group-hover:-translate-y-4">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">VALLE II</h3>
            <p className="text-zinc-400 text-xs">Av Cuautemoc, San Miguel Xico 3ra sección.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9716 7028
            </p>
          </div>
        </div>

        {/* 13: Zapata */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="zapata">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">ZAPATA</h3>
            <p className="text-zinc-400 text-xs">Av Tierra y Libertad 120, Emiliano Zapata, Chalco.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 8984 3169
            </p>
          </div>
        </div>

        {/* 13.5: Ecatepec */}
        <div className="group temple-card relative aspect-[9/16] bg-surface rounded-2xl overflow-hidden reveal" data-temple="ecatepec">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="/assets/ecatepec_card.png" alt="ECATEPEC" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 transition-transform group-hover:-translate-y-4 text-white">
            <h3 className="font-headline text-3xl font-black tracking-tighter mb-2 uppercase">ECATEPEC</h3>
            <p className="text-zinc-400 text-xs line-clamp-2">Citlaltépetl Manzana 632 Lote 18, Ciudad Azteca, 55120 Ecatepec de Morelos, Méx.</p>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 flex items-center gap-1.5 group-hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              55 9688 5412
            </p>
          </div>
        </div>

        {/* 14: GOLD (Premium) */}
        <div className="group temple-card relative aspect-[9/16] bg-gradient-to-br from-yellow-600/20 to-black rounded-2xl overflow-hidden reveal border border-primary/40 shadow-xl shadow-primary/5" data-temple="gold">
          <img className="absolute inset-0 w-full h-full object-cover transition-all duration-700" src="https://wnhnpnlbembafqafukqy.supabase.co/storage/v1/object/public/landing_images/landing/cards/f019c411-13f9-4325-adcb-48176d8c7b4c/1777027685708_3iusmi.jpg" alt="GOLD" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-10 text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <h3 className="font-headline text-4xl font-black tracking-tighter text-white uppercase mb-2">GOLD</h3>
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-black mb-1 opacity-60">Canal de Miramontes 1976</p>
            <p className="text-zinc-600 text-[8px] tracking-[0.3em] uppercase mb-8">Col. Educación, Coyoacán</p>
          </div>
        </div>
      </div>
    </section>
  );
}
