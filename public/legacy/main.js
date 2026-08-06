import { fetchActiveBranches } from './src/services/branchService.js';
 
// GyMan Landing Page - Sync Update v1.0.2
// ════════════════════════════════════════════════════════════
//  GYMAN — main.js
//  Landing Page Interactivity & Animations
// ════════════════════════════════════════════════════════════
 
(function () {
  'use strict';
 
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }
 
  // Maps Supabase branch name → templesData key
  function normalizeKey(name) {
    let key = name.toLowerCase()
      .replace(/gyman\s*/g, '') // Eliminar "gyman "
      .replace(/\s+/g, '')    // remove spaces
      .replace(/[^a-z0-9]/g, ''); // remove special chars
      
    if (key === 'valleii') return 'valle2';
    if (key === 'valledechalco') return 'vallechalco';
    return key;
  }
 
  ready(function () {
 
    // ── 1. NAVIGATION & DRAWER ──────────────────────────────────
    const nav       = document.getElementById('mainNav');
    const sideDrawer= document.getElementById('sideDrawer');
    const overlay   = document.getElementById('drawerOverlay');
    const panel     = document.getElementById('drawerPanel');
 
    function onScroll() {
      if(nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
 
    if (sideDrawer && overlay && panel) {
      overlay.addEventListener('click', () => toggleDrawer(false));
      function toggleDrawer(open) {
        if (open) {
          sideDrawer.classList.remove('invisible');
          setTimeout(() => {
            sideDrawer.classList.add('open');
            overlay.style.opacity = '1';
            panel.style.transform = 'translateX(0)';
          }, 10);
        } else {
          sideDrawer.classList.remove('open');
          overlay.style.opacity = '0';
          panel.style.transform = 'translateX(100%)';
          setTimeout(() => sideDrawer.classList.add('invisible'), 300);
        }
      }
    }
 
    // ── 1.5 SCROLL TO CARDS ─────────────────────────────────────
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const cardsGrid = document.getElementById('cards-grid');
    if (scrollDownBtn && cardsGrid) {
      scrollDownBtn.addEventListener('click', () => {
        // Offset for the fixed navigation bar
        const navHeight = nav ? nav.offsetHeight : 80;
        const rect = cardsGrid.getBoundingClientRect();
        const offset = window.scrollY + rect.top - navHeight - 20; // 20px extra breathing room
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    }
 
    // ── 2. TEMPLE DATA (CENTRALIZED FROM TS) ───────────────────
 
    const modal = document.getElementById('templeModal');
    const modalContent = document.getElementById('modalDetails');
    const closeBtn = document.getElementById('closeModal');
 
    function attachModalListeners() {
      document.querySelectorAll('[data-temple]').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target && (e.target.closest('button') || e.target.closest('a'))) return;
          const key = card.getAttribute('data-temple');
          const data = templesData[key];
          if (!data) return;
 
          // Meta Pixel: Habilidad 2 — ViewContent al explorar una sucursal
          if (typeof window !== 'undefined' && typeof fbq !== 'undefined') {
            fbq('track', 'ViewContent', { content_name: data.name });
          }
 
          // ── GALLERY SYSTEM: trigger button + panel grid + lightbox ──
          const galleryImages = data.gallery_images ?? [];
          const galleryId = 'gal-' + key;
          const galleryHTML = galleryImages.length > 0 ? `
            <div class="mb-12">
 
               <!-- GALLERY TRIGGER BUTTON -->
               <button
                 class="gallery-trigger w-full flex items-center gap-4 p-4 rounded-2xl
                        bg-zinc-900/80 border border-white/[0.08]
                        hover:border-primary/60 hover:bg-zinc-800/80
                        transition-all duration-500 group/trig text-left
                        relative overflow-hidden shadow-xl"
                 data-gallery-id="${galleryId}"
                 data-gallery-images='${JSON.stringify(galleryImages)}'
               >
                 <!-- Shimmer sweep -->
                 <span class="pointer-events-none absolute inset-0 opacity-0 group-hover/trig:opacity-100 transition-opacity duration-700"
                   style="background:linear-gradient(105deg,transparent 35%,rgba(233,196,0,.06) 50%,transparent 65%);transform:skewX(-10deg);"></span>
 
                 <!-- Miniatura con efecto igual que tarjetas de sucursal -->
                 <div class="relative flex-none w-[90px] h-[58px] rounded-xl overflow-hidden border border-white/10 group-hover/trig:border-primary/50 transition-all duration-500 shadow-lg">
                   <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 opacity-0 group-hover/trig:opacity-100 transition-all duration-500"></div>
                   <img src="${galleryImages[0]}" alt="Vista del gimnasio"
                        class="w-full h-full object-cover scale-100 group-hover/trig:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                        onerror="this.parentElement.style.display='none'"/>
                   <div class="absolute inset-0 z-20 flex items-center justify-center bg-black/35 group-hover/trig:bg-black/10 transition-all duration-300">
                     <div class="w-7 h-7 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_14px_rgba(233,196,0,.65)] group-hover/trig:scale-110 transition-transform duration-300">
                       <span class="material-symbols-outlined text-black" style="font-size:15px;line-height:1">play_arrow</span>
                     </div>
                   </div>
                 </div>
 
                 <!-- Texto -->
                 <div class="flex-1 min-w-0">
                   <p class="text-[9px] font-black text-primary tracking-[.3em] uppercase mb-1 flex items-center gap-1.5">
                     <span class="material-symbols-outlined" style="font-size:12px">photo_library</span>
                     ${galleryImages.length} foto${galleryImages.length !== 1 ? 's' : ''}
                   </p>
                   <p class="text-[15px] font-headline font-black text-white group-hover/trig:text-primary transition-colors duration-300 uppercase tracking-wide leading-tight truncate">Conoce nuestra sucursal</p>
                   <p class="text-[10px] text-zinc-500 font-medium mt-0.5 group-hover/trig:text-zinc-400 transition-colors">Ver galería de instalaciones &rarr;</p>
                 </div>
 
                 <!-- Arrow -->
                 <span class="material-symbols-outlined text-primary mr-1 opacity-40 group-hover/trig:opacity-100 group-hover/trig:translate-x-1 transition-all duration-300">chevron_right</span>
               </button>
 
               <!-- GALLERY PANEL (hidden until triggered) -->
               <div id="${galleryId}" class="gallery-panel hidden mt-5" data-images='${JSON.stringify(galleryImages)}'>
                 <div class="flex items-center justify-between mb-4">
                   <h4 class="text-[10px] font-black text-primary tracking-[.3em] uppercase flex items-center gap-2">
                     <span class="material-symbols-outlined text-sm">grid_view</span>
                     Instalaciones — ${galleryImages.length} fotos
                   </h4>
                   <button class="gallery-panel-close text-[10px] font-bold text-zinc-500 hover:text-white flex items-center gap-1 transition-colors duration-200" data-gallery-id="${galleryId}">
                     <span class="material-symbols-outlined" style="font-size:16px">close</span>Cerrar
                   </button>
                 </div>
                 <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                   ${galleryImages.map((url, i) => `
                     <button
                       class="gallery-thumb relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-primary/60 transition-all duration-500 group/thumb shadow-lg hover:shadow-primary/10 hover:shadow-xl"
                       data-gallery-id="${galleryId}"
                       data-index="${i}"
                     >
                       <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300"></div>
                       <img src="${url}" alt="Foto ${i+1}"
                            class="w-full h-full object-cover scale-100 group-hover/thumb:scale-110 transition-transform duration-500 ease-out"
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                            onerror="this.parentElement.style.display='none'"/>
                       <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-all duration-300">
                         <span class="material-symbols-outlined text-white text-2xl drop-shadow-lg">zoom_in</span>
                       </div>
                       <span class="absolute bottom-2 right-2 z-20 text-[9px] font-black text-primary/80 tracking-widest opacity-0 group-hover/thumb:opacity-100 transition-all duration-300">${i+1}/${galleryImages.length}</span>
                     </button>
                   `).join('')}
                 </div>
               </div>
 
             </div>
           ` : '';
 
           modalContent.innerHTML = `
             <!-- Header Táctico -->
             <div class="mb-8 border-b border-primary/20 pb-6">
               <div class="flex flex-wrap items-start justify-between gap-3 mb-2">
                 <h2 class="text-3xl sm:text-5xl md:text-6xl font-headline font-black text-white tracking-tighter uppercase leading-none">GYMAN <span class="text-primary">${data.name}</span></h2>
                 <div class="flex flex-wrap gap-2 items-center">
                   ${data.video_url ? `
                     <button class="branch-video-trigger group/vid flex items-center gap-2 bg-zinc-900 border border-primary/40 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-primary hover:bg-primary/10 transition-all duration-500 shadow-xl shadow-primary/10 active:scale-95 flex-none" data-video-url="${data.video_url}">
                       <span class="material-symbols-outlined text-[16px] transition-transform group-hover/vid:scale-110" style="font-variation-settings: 'FILL' 1;">play_circle</span>
                       <span class="hidden sm:inline">Ver Video</span>
                       <span class="sm:hidden">Video</span>
                     </button>
                   ` : ''}
                   ${data.maps_url ? `
                     <a href="${data.maps_url}" target="_blank" 
                        class="group/maps flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full 
                               text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400
                               hover:border-primary/50 hover:text-primary transition-all duration-500 
                               shadow-xl hover:shadow-primary/5 active:scale-95 flex-none">
                       <span class="material-symbols-outlined text-[16px] transition-transform group-hover/maps:scale-110">location_on</span>
                       <span class="hidden sm:inline">ver en google maps</span>
                       <span class="sm:hidden">Maps</span>
                     </a>
                   ` : ''}
                 </div>
               </div>
               <p class="text-zinc-500 font-body text-xs sm:text-sm tracking-widest uppercase">${data.dir}</p>
               ${data.phone ? `
                 <div class="flex items-center gap-2 mt-4 text-primary group/phone">
                   <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/phone:bg-primary/20 transition-all">
                     <span class="material-symbols-outlined text-[18px]">call</span>
                   </div>
                   <a href="tel:${data.phone.replace(/\s/g, '')}" class="text-sm font-black tracking-[0.2em] hover:underline">${data.phone}</a>
                 </div>
               ` : ''}
             </div>
 
             <!-- Galería Interior (solo si hay fotos) -->
             ${galleryHTML}
             
             <div class="hidden sm:grid lg:grid-cols-12 gap-8 lg:gap-12">
               
               <!-- Izquierda: Horarios & Servicios -->
               <div class="lg:col-span-5 space-y-12">
                 
                 <!-- Vanguard Hours -->
                 <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                   <h4 class="text-[10px] font-black text-primary tracking-[.3em] uppercase mb-6 flex items-center gap-2">
                      <span class="material-symbols-outlined text-sm">schedule</span> Sistema Horario 24H
                   </h4>
                   <div class="flex justify-between items-end mb-4">
                     <span class="text-zinc-500 text-[10px] font-bold uppercase">Lunes - Viernes</span>
                     <span class="text-xl sm:text-3xl font-headline font-black text-white leading-none">${data.hours.week}</span>
                   </div>
                   <div class="flex justify-between items-end border-t border-white/5 pt-4">
                     <span class="text-zinc-500 text-[10px] font-bold uppercase">Fin de Semana</span>
                     <span class="text-xl sm:text-3xl font-headline font-black text-zinc-400 leading-none">${data.hours.weekend}</span>
                   </div>
                 </div>
 
                 <!-- Vanguard Services -->
                 <div>
                   <h4 class="text-[10px] font-black text-zinc-500 tracking-[.3em] uppercase mb-6">Amenidades & Activos Técnicos</h4>
                   <div class="grid grid-cols-1 gap-3">
                     ${data.services.map(s => `
                       <div class="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 group hover:border-primary/30 transition-all">
                         <div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(233,196,0,0.8)]"></div>
                         <span class="text-sm font-bold text-zinc-300 uppercase tracking-wide group-hover:text-white">${s}</span>
                       </div>
                     `).join('')}
                   </div>
                 </div>
               </div>
 
               <!-- Derecha: Dossier de Membresías -->
               <div class="lg:col-span-7">
                 <h4 class="text-[10px] font-black text-zinc-500 tracking-[.3em] uppercase mb-6">Dossier de Membresías</h4>
                 ${data.benefitsNotice ? `
                   <div class="mb-5 p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl flex items-start gap-3 text-zinc-300 text-xs shadow-lg">
                     <span class="material-symbols-outlined text-pink-400 text-lg flex-shrink-0 mt-0.5" style="font-variation-settings: 'FILL' 1;">info</span>
                     <span class="font-medium leading-relaxed">${data.benefitsNotice}</span>
                   </div>
                 ` : ''}
                 <div class="grid grid-cols-2 gap-3 items-stretch">
                    ${data.prices.map(p => {
                      let borderClass = p.isHighlighted ? 'border-primary shadow-[0_0_15px_rgba(233,196,0,0.2)] col-span-2' : 'border-white/10';
                      let hoverClass = 'hover:border-primary hover:shadow-[0_0_20px_rgba(233,196,0,0.1)]';
                      let iconColor = 'text-primary';
                      let tagColor = p.isHighlighted ? 'text-primary' : 'text-zinc-600';
                      let hoverTextClass = 'group-hover:text-primary';
                      let priceColor = p.isHighlighted ? 'text-primary' : 'text-white';
                      let bulletColor = 'bg-primary';
                      
                      if (p.isWomenPromo) {
                        borderClass = 'pink-neon-border col-span-2';
                        hoverClass = 'hover:border-pink-400 hover:shadow-[0_0_20px_rgba(255,46,147,0.3)]';
                        iconColor = 'text-pink-400';
                        tagColor = 'text-pink-400';
                        hoverTextClass = 'group-hover:text-pink-400';
                        priceColor = 'text-pink-400 font-black pink-neon-glow';
                        bulletColor = 'bg-pink-500 shadow-[0_0_6px_rgba(255,46,147,0.8)]';
                      }

                      return `
                        <div class="price-card relative flex flex-col justify-center bg-zinc-900 border ${borderClass} rounded-xl p-3 sm:p-5 ${hoverClass} transition-all ${p.benefits ? 'cursor-pointer' : ''} group overflow-hidden" data-promo="${p.isWomenPromo ? 'true' : 'false'}">
                          ${p.benefits ? `
                          <div class="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-all">
                             <span class="material-symbols-outlined ${iconColor} toggle-icon" style="font-size:18px">expand_more</span>
                          </div>` : ''}
                          <p class="text-[9px] font-black ${tagColor} uppercase mb-1">${p.tag || 'Standard'}</p>
                          <h5 class="text-sm sm:text-lg font-headline font-black text-white uppercase ${hoverTextClass} transition-colors leading-tight">${p.type}</h5>
                          ${p.note ? `<p class="text-zinc-400 font-medium normal-case mt-1 font-body text-[10px] sm:text-xs tracking-wide leading-tight">${p.note}</p>` : ''}
                          <div class="mt-2 flex items-baseline gap-1">
                            <span class="text-lg sm:text-2xl font-headline font-black ${priceColor}">${p.price}</span>
                            <span class="text-zinc-500 text-[9px] font-bold">MXN</span>
                          </div>
                          ${p.benefits && p.benefits.length > 0 ? `
                          <p class="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-2 ${hoverTextClass} transition-colors toggle-legend">Ver beneficios</p>
                          <div class="benefits-container hidden mt-2 border-t border-white/10 pt-3">
                            <p class="text-[9px] font-black text-white uppercase tracking-widest mb-2">Beneficios Incluidos:</p>
                            <ul class="grid grid-cols-1 gap-1.5">
                              ${p.benefits.map(b => `
                                <li class="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                                  <div class="w-1.5 h-1.5 rounded-full ${bulletColor} flex-shrink-0"></div>
                                  ${b}
                                </li>
                              `).join('')}
                            </ul>
                            <button class="lead-cta-btn w-full mt-4 py-2.5 bg-primary/10 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-primary/20 hover:border-primary transition-all duration-300"
                              data-branch="${data.name}" 
                              data-type="${p.type}" 
                              data-price="${p.price}">
                              Me interesa &rarr;
                            </button>
                          </div>
                          ` : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
               </div>

                 ${data.classes && data.classes.length > 0 ? `
                   <!-- Vanguard Classes -->
                   <div class="mt-8 pt-6 border-t border-white/10 col-span-full">
                     <h4 class="text-[10px] font-black text-primary tracking-[.3em] uppercase mb-6 flex items-center gap-2">
                       <span class="material-symbols-outlined text-sm">calendar_month</span> Clases Disponibles & Reservas
                     </h4>
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       ${data.classes.map(c => `
                         <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/90 p-4 rounded-xl border border-white/10 group hover:border-primary/50 transition-all shadow-lg">
                           <div class="flex items-center gap-3">
                             <div class="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(233,196,0,0.9)]"></div>
                             <span class="text-sm font-black text-white uppercase tracking-wide group-hover:text-primary transition-colors">${c.name}</span>
                           </div>
                           <a href="https://gymanclub.com/#/class/${c.id}/${encodeURIComponent(c.name)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black bg-primary rounded-lg hover:bg-yellow-400 active:scale-95 transition-all shadow-md shadow-primary/20">
                             <span>Agenda una clase ahora</span>
                             <span class="material-symbols-outlined text-sm">open_in_new</span>
                           </a>
                         </div>
                       `).join('')}
                     </div>
                   </div>
                 ` : ''}
 
             </div>

             <div class="sm:hidden flex flex-col gap-3 mt-2">
                <button class="mobile-vip-cta w-full flex items-center gap-3 p-4 rounded-xl text-left relative overflow-hidden"
                  style="background:linear-gradient(135deg,#E9C400 0%,#C9A600 55%,#A07800 100%);box-shadow:0 0 28px rgba(233,196,0,0.4),0 4px 16px rgba(0,0,0,0.45)"
                  data-branch="${data.name}"
                  data-type="${data.prices[0] ? data.prices[0].type : 'Membresía'}"
                  data-price="${data.prices[0] ? data.prices[0].price : '$299'}">
                  <span class="pointer-events-none absolute inset-0" style="background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.25) 50%,transparent 65%)"></span>
                  <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.18);border:1px solid rgba(0,0,0,0.12)">
                    <span class="material-symbols-outlined text-black" style="font-size:24px;font-variation-settings:'FILL' 1">workspace_premium</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[9px] font-black uppercase tracking-[0.2em] mb-0.5" style="color:rgba(0,0,0,0.55)">Acceso Exclusivo &bull; Sin Compromiso</p>
                    <p class="text-[15px] font-black text-black uppercase tracking-tight leading-tight">Reclama tu visita GRATIS</p>
                    <p class="text-[11px] font-semibold mt-0.5" style="color:rgba(0,0,0,0.65)">Congela tu precio especial hoy</p>
                  </div>
                  <span class="material-symbols-outlined text-black flex-shrink-0" style="font-size:20px;opacity:0.6">arrow_forward</span>
                </button>
                <div class="mobile-accordion-item rounded-xl overflow-hidden border border-white/[0.07]" style="background:#1a1a1a">
                  <button class="mobile-accordion-trigger w-full flex items-center gap-3 p-4 text-left">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(233,196,0,0.1);border:1px solid rgba(233,196,0,0.2)">
                      <span class="material-symbols-outlined text-primary" style="font-size:18px;font-variation-settings:'FILL' 1">schedule</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-[13px] font-black text-white uppercase tracking-wide leading-tight">Horarios</p>
                      <p class="text-[11px] text-zinc-500 font-medium mt-0.5">Consulta los horarios de apertura y cierre</p>
                    </div>
                    <span class="material-symbols-outlined text-zinc-600 accordion-chevron flex-shrink-0" style="font-size:20px">chevron_right</span>
                  </button>
                  <div class="mobile-accordion-body hidden px-4 pb-4">
                    <div class="border-l-4 border-primary p-4 rounded-r-xl" style="background:rgba(233,196,0,0.05)">
                      <div class="flex justify-between items-center mb-3">
                        <span class="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Lunes - Viernes</span>
                        <span class="text-xl font-headline font-black text-white">${data.hours.week}</span>
                      </div>
                      <div class="flex justify-between items-center border-t border-white/5 pt-3">
                        <span class="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Fin de Semana</span>
                        <span class="text-xl font-headline font-black text-zinc-400">${data.hours.weekend}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mobile-accordion-item rounded-xl overflow-hidden border border-white/[0.07]" style="background:#1a1a1a">
                  <button class="mobile-accordion-trigger w-full flex items-center gap-3 p-4 text-left">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(233,196,0,0.1);border:1px solid rgba(233,196,0,0.2)">
                      <span class="material-symbols-outlined text-primary" style="font-size:18px;font-variation-settings:'FILL' 1">fitness_center</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-[13px] font-black text-white uppercase tracking-wide leading-tight">Amenidades</p>
                      <p class="text-[11px] text-zinc-500 font-medium mt-0.5">Conoce el equipamiento de ${data.name}</p>
                    </div>
                    <span class="material-symbols-outlined text-zinc-600 accordion-chevron flex-shrink-0" style="font-size:20px">chevron_right</span>
                  </button>
                  <div class="mobile-accordion-body hidden px-4 pb-4">
                    <div class="flex flex-col gap-2">
                      ${data.services.map(s => '<div class="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5" style="background:rgba(255,255,255,0.04)"><div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(233,196,0,0.8)] flex-shrink-0"></div><span class="text-[12px] font-bold text-zinc-300 uppercase tracking-wide">' + s + '</span></div>').join('')}
                    </div>
                  </div>
                </div>
                ${data.classes && data.classes.length > 0 ? `
                <div class="mobile-accordion-item rounded-xl overflow-hidden border border-white/[0.07]" style="background:#1a1a1a">
                  <button class="mobile-accordion-trigger w-full flex items-center gap-3 p-4 text-left">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(233,196,0,0.1);border:1px solid rgba(233,196,0,0.2)">
                      <span class="material-symbols-outlined text-primary" style="font-size:18px;font-variation-settings:'FILL' 1">calendar_month</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-[13px] font-black text-white uppercase tracking-wide leading-tight">Clases Disponibles</p>
                      <p class="text-[11px] text-zinc-500 font-medium mt-0.5">Reserva tu lugar en nuestras disciplinas</p>
                    </div>
                    <span class="material-symbols-outlined text-zinc-600 accordion-chevron flex-shrink-0" style="font-size:20px">chevron_right</span>
                  </button>
                  <div class="mobile-accordion-body hidden px-4 pb-4">
                    <div class="flex flex-col gap-3">
                      ${data.classes.map(c => `
                        <div class="flex flex-col gap-2 p-3 rounded-lg border border-white/5" style="background:rgba(255,255,255,0.04)">
                          <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(233,196,0,0.8)] flex-shrink-0"></div>
                            <span class="text-[12px] font-bold text-zinc-300 uppercase tracking-wide">${c.name}</span>
                          </div>
                          <a href="https://gymanclub.com/#/class/${c.id}/${encodeURIComponent(c.name)}" target="_blank" rel="noopener noreferrer" class="w-full text-center py-2 text-[10px] font-black uppercase tracking-wider text-black bg-primary rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-1">
                            <span>Agenda una clase ahora</span>
                            <span class="material-symbols-outlined" style="font-size:12px">open_in_new</span>
                          </a>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
                ` : ''}
                <div class="mobile-accordion-item rounded-xl overflow-hidden border border-white/[0.07]" style="background:#1a1a1a">
                  <button class="mobile-accordion-trigger w-full flex items-center gap-3 p-4 text-left">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(233,196,0,0.1);border:1px solid rgba(233,196,0,0.2)">
                      <span class="material-symbols-outlined text-primary" style="font-size:18px;font-variation-settings:'FILL' 1">credit_card</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-[13px] font-black text-white uppercase tracking-wide leading-tight">Membresías</p>
                      <p class="text-[11px] text-zinc-500 font-medium mt-0.5">Planes, precios y beneficios incluidos</p>
                    </div>
                    <span class="material-symbols-outlined text-zinc-600 accordion-chevron flex-shrink-0" style="font-size:20px">chevron_right</span>
                  </button>
                  <div class="mobile-accordion-body hidden px-4 pb-4">
                    <div class="flex flex-col gap-3">
                      ${data.prices.map(p => { const isWP=p.isWomenPromo; const isHL=p.isHighlighted&&!isWP; const bs=isWP?'1px solid rgba(236,72,153,0.5)':(isHL?'1px solid rgba(233,196,0,0.5)':'1px solid rgba(255,255,255,0.08)'); const tc=isWP?'text-pink-400':(isHL?'text-primary':'text-zinc-600'); const pc=isWP?'text-pink-400 pink-neon-glow':(isHL?'text-primary':'text-white'); const bc=isWP?'bg-pink-500 shadow-[0_0_6px_rgba(255,46,147,0.8)]':'bg-primary'; const bg=isWP?'rgba(236,72,153,0.1)':'rgba(233,196,0,0.1)'; const cb=isWP?'rgba(236,72,153,0.4)':'rgba(233,196,0,0.4)'; const ctc=isWP?'text-pink-400':'text-primary'; return '<div class="rounded-xl p-4" style="background:#232323;border:'+bs+'"><div class="flex items-start justify-between gap-2 mb-1"><div class="flex-1 min-w-0"><p class="text-[9px] font-black '+tc+' uppercase tracking-wider mb-0.5">'+(p.tag||'Standard')+'</p><h5 class="text-sm font-headline font-black text-white uppercase leading-tight">'+p.type+'</h5></div><div class="text-right flex-shrink-0"><span class="text-xl font-headline font-black '+pc+'">'+p.price+'</span><span class="text-zinc-500 text-[9px] font-bold block">MXN</span></div></div>'+(p.note?'<p class="text-zinc-400 text-[10px] font-medium leading-tight mt-1 mb-2">'+p.note+'</p>':'')+(p.benefits&&p.benefits.length>0?'<ul class="flex flex-col gap-1.5 mt-2 mb-3">'+p.benefits.slice(0,4).map(b=>'<li class="flex items-center gap-2 text-[11px] text-zinc-400 font-medium"><div class="w-1.5 h-1.5 rounded-full '+bc+' flex-shrink-0"></div>'+b+'</li>').join('')+(p.benefits.length>4?'<li class="text-[10px] text-zinc-600 font-medium pl-3.5">+'+(p.benefits.length-4)+' beneficios más...</li>':'')+'</ul>':'')+'<button class="lead-cta-btn w-full py-2.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-lg transition-all duration-300 '+ctc+'" style="background:'+bg+';border:1px solid '+cb+'" data-branch="'+data.name+'" data-type="'+p.type+'" data-price="'+p.price+'">Me interesa &rarr;</button></div>'; }).join('')}
                    </div>
                  </div>
                </div>
                
              </div>
            `;
          
          // ── Benefits toggle ──────────────────────────────────
          modalContent.querySelectorAll('.price-card').forEach(card => {
            card.addEventListener('click', () => {
              
              const container = card.querySelector('.benefits-container');
              const icon = card.querySelector('.toggle-icon');
              const legend = card.querySelector('.toggle-legend');
              if (container && icon) {
                // Find sibling card in the same grid row
                const grid = card.closest('.grid');
                const allCards = grid ? Array.from(grid.querySelectorAll('.price-card:not(.col-span-2)')) : [];
                const idx = allCards.indexOf(card);
                const rowStart = Math.floor(idx / 2) * 2;
                const sibling = allCards[rowStart === idx ? rowStart + 1 : rowStart];
 
                const isNowOpen = !container.classList.contains('hidden');
 
                if (isNowOpen) {
                  // Currently open: CLOSING
                  container.classList.add('hidden');
                  card.classList.add('justify-center');
                  // Remove align-self overrides so grid stretch re-equalizes the row
                  card.style.alignSelf = '';
                  if (sibling) sibling.style.alignSelf = '';
                  icon.textContent = 'expand_more';
                  if (legend) legend.textContent = 'Ver beneficios';
                } else {
                  // Currently closed: OPENING
                  container.classList.remove('hidden');
                  card.classList.remove('justify-center');
                  // Break both cards free from grid stretch so only this one grows
                  card.style.alignSelf = 'start';
                  if (sibling) sibling.style.alignSelf = 'start';
                  icon.textContent = 'expand_less';
                  if (legend) legend.textContent = 'Ocultar beneficios';
                }
              }
            });
          });
 
          // ── Mobile accordion toggles ─────────────────────────
          modalContent.querySelectorAll('.mobile-accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
              const item = trigger.closest('.mobile-accordion-item');
              const body = item ? item.querySelector('.mobile-accordion-body') : null;
              const chevron = trigger.querySelector('.accordion-chevron');
              if (!body) return;
              const isOpen = !body.classList.contains('hidden');
              // Close all other accordions
              modalContent.querySelectorAll('.mobile-accordion-item').forEach(other => {
                const ob = other.querySelector('.mobile-accordion-body');
                const oc = other.querySelector('.accordion-chevron');
                if (ob && other !== item) {
                  ob.classList.add('hidden');
                  if (oc) oc.textContent = 'chevron_right';
                  other.style.borderColor = '';
                }
              });
              if (isOpen) {
                body.classList.add('hidden');
                if (chevron) chevron.textContent = 'chevron_right';
                item.style.borderColor = '';
              } else {
                body.classList.remove('hidden');
                if (chevron) chevron.textContent = 'expand_more';
                item.style.borderColor = 'rgba(233,196,0,0.45)';
                setTimeout(() => {
                  const scrollable = modal.querySelector('.overflow-y-auto');
                  if (scrollable) {
                    const rect = item.getBoundingClientRect();
                    const sr = scrollable.getBoundingClientRect();
                    if (rect.bottom > sr.bottom - 20) scrollable.scrollBy({ top: rect.bottom - sr.bottom + 40, behavior: 'smooth' });
                  }
                }, 60);
              }
            });
          });

          // ── Mobile VIP CTA ───────────────────────────────────
          const mobileVipBtn = modalContent.querySelector('.mobile-vip-cta');
          if (mobileVipBtn) {
            mobileVipBtn.addEventListener('click', () => {
              const cm = document.getElementById('templeModal');
              if (cm) {
                cm.classList.remove('opacity-100');
                cm.classList.add('opacity-0', 'invisible');
                const sc = cm.querySelector('.overflow-y-auto');
                if (sc) sc.scrollTop = 0;
                document.body.style.overflow = 'auto';
              }
              window.dispatchEvent(new CustomEvent('gyman:open-lead-modal', {
                detail: { branchName: mobileVipBtn.dataset.branch, membershipType: mobileVipBtn.dataset.type, membershipPrice: mobileVipBtn.dataset.price }
              }));
            });
          }

          // ── Lead CTA trigger button ───────────────────────────
          modalContent.addEventListener('click', (e) => {
            const ctaBtn = e.target.closest('.lead-cta-btn');
            if (!ctaBtn) return;
            e.stopPropagation(); // Evitar propagación para no colapsar la tarjeta
            
            // Cerrar modal actual de sucursal
            const currentModal = document.getElementById('templeModal');
            if(currentModal) {
              currentModal.classList.remove('opacity-100');
              currentModal.classList.add('opacity-0', 'invisible');
              const scrollableContainer = currentModal.querySelector('.overflow-y-auto');
              if (scrollableContainer) scrollableContainer.scrollTop = 0;
              document.body.style.overflow = 'auto'; // Permitir scroll momentáneamente
            }

            // Disparar evento para abrir modal de leads
            window.dispatchEvent(new CustomEvent('gyman:open-lead-modal', {
              detail: {
                branchName: ctaBtn.dataset.branch,
                membershipType: ctaBtn.dataset.type,
                membershipPrice: ctaBtn.dataset.price,
              }
            }));
          });

          // ── Gallery trigger button ────────────────────────────
          modalContent.querySelectorAll('.gallery-trigger').forEach(btn => {
            // Pre-carga en hover para ganar tiempo de respuesta
            btn.addEventListener('mouseenter', () => {
              if (btn.dataset.preloaded) return;
              btn.dataset.preloaded = 'true';
              const images = JSON.parse(btn.dataset.galleryImages || '[]');
              // Pre-cargamos las primeras 4 fotos silenciosamente
              images.slice(0, 4).forEach(src => {
                const img = new Image();
                img.src = src;
              });
            }, { once: true });
 
            btn.addEventListener('click', () => {
              const gid = btn.dataset.galleryId;
              const panel = modalContent.querySelector('#' + gid);
              if (!panel) return;
              const isHidden = panel.classList.toggle('hidden');
              if (!isHidden) {
                panel.style.animation = 'none';
                panel.offsetHeight; // reflow
                panel.style.animation = 'gyGalleryIn .35s cubic-bezier(.22,1,.36,1)';
              }
            });
          });
 
          // ── Gallery panel close ───────────────────────────────
          modalContent.querySelectorAll('.gallery-panel-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const gid = btn.dataset.galleryId;
              const panel = modalContent.querySelector('#' + gid);
              if (panel) panel.classList.add('hidden');
            });
          });
 
          // ── Gallery thumbnails → lightbox ─────────────────────
          modalContent.querySelectorAll('.gallery-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
              const gid = thumb.dataset.galleryId;
              const idx = parseInt(thumb.dataset.index, 10);
              const panel = modalContent.querySelector('#' + gid);
              const images = panel ? JSON.parse(panel.dataset.images) : [];
              openLightbox(images, idx);
            });
          });
 
          // ── Video lightbox trigger ─────────────────────
          modalContent.querySelectorAll('.branch-video-trigger').forEach(btn => {
            btn.addEventListener('click', () => {
              if (window.openVideoLightbox) {
                window.openVideoLightbox(btn.dataset.videoUrl);
              }
            });
          });
 
          const scrollableContainer = modal.querySelector('.overflow-y-auto');
          if (scrollableContainer) scrollableContainer.scrollTop = 0;
          document.body.style.overflow = 'hidden';
          modal.classList.remove('invisible', 'opacity-0');
          modal.querySelector('.modal-panel').style.transform = 'scale(1)';
        });
      });
    }
 
    if(closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
    }
 
    function closeModal() {
      document.body.style.overflow = '';
      modal.classList.add('opacity-0');
      modal.querySelector('.modal-panel').style.transform = 'scale(0.95)';
      setTimeout(() => {
        modal.classList.add('invisible');
        const scrollableContainer = modal.querySelector('.overflow-y-auto');
        if (scrollableContainer) scrollableContainer.scrollTop = 0;
      }, 300);
    }
 
    // ── LIGHTBOX (Photoshop-style) ──────────────────────────────
    (function buildLightbox() {
      // Inject keyframe once
      if (!document.getElementById('gy-lbx-styles')) {
        const st = document.createElement('style');
        st.id = 'gy-lbx-styles';
        st.textContent = `
          @keyframes gyGalleryIn {
            from { opacity:0; transform:translateY(12px); }
            to   { opacity:1; transform:translateY(0); }
          }
          @keyframes gyLbxIn {
            from { opacity:0; transform:scale(.97); }
            to   { opacity:1; transform:scale(1); }
          }
          @keyframes gyLbxImgSwap {
            from { opacity:0; transform:scale(.97) translateX(20px); }
            to   { opacity:1; transform:scale(1) translateX(0); }
          }
          #gy-lightbox { display:none; position:fixed; inset:0; z-index:99999;
            background:rgba(0,0,0,.95); backdrop-filter:blur(24px) saturate(.6);
            flex-direction:column; align-items:center; justify-content:center; }
          #gy-lightbox.active { display:flex; animation:gyLbxIn .3s ease; }
          #gy-lightbox img { max-width:92vw; max-height:80vh; object-fit:contain;
            border-radius:12px; box-shadow:0 30px 80px rgba(0,0,0,.8);
            user-select:none; pointer-events:none; }
          .gy-lbx-nav {
            position:absolute; top:50%; transform:translateY(-50%);
            width:52px; height:52px; border-radius:50%;
            background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12);
            display:flex; align-items:center; justify-content:center;
            cursor:pointer; transition:all .25s; backdrop-filter:blur(8px);
            color:#fff;
          }
          .gy-lbx-nav:hover { background:rgba(233,196,0,.18); border-color:rgba(233,196,0,.6);
            color:rgb(233,196,0); transform:translateY(-50%) scale(1.1); }
          #gy-lbx-prev { left:24px; }
          #gy-lbx-next { right:24px; }
          #gy-lbx-filmstrip { display:flex; gap:10px; padding:12px 16px;
            overflow-x:auto; max-width:92vw; scrollbar-width:thin;
            scrollbar-color:rgba(233,196,0,.4) transparent; }
          .gy-lbx-film-item { flex:none; width:72px; height:48px;
            border-radius:8px; overflow:hidden; cursor:pointer;
            border:2px solid transparent; opacity:.5;
            transition:all .25s; }
          .gy-lbx-film-item:hover { opacity:.85; }
          .gy-lbx-film-item.active { border-color:rgb(233,196,0);
            opacity:1; box-shadow:0 0 12px rgba(233,196,0,.5); }
          .gy-lbx-film-item img { width:100%; height:100%; object-fit:cover; }
        `;
        document.head.appendChild(st);
      }
 
      // Build DOM once
      let lbx = document.getElementById('gy-lightbox');
      if (!lbx) {
        lbx = document.createElement('div');
        lbx.id = 'gy-lightbox';
        lbx.innerHTML = `
          <!-- Top bar -->
          <div style="position:absolute;top:0;left:0;right:0;height:56px;
            background:linear-gradient(to bottom,rgba(0,0,0,.8),transparent);
            display:flex;align-items:center;justify-content:space-between;padding:0 24px;z-index:2">
            <span style="font-size:9px;font-weight:900;letter-spacing:.3em;text-transform:uppercase;color:rgb(233,196,0);font-family:inherit">
              <span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:4px">photo_library</span>
              Galería de Instalaciones
            </span>
            <div style="display:flex;align-items:center;gap:16px">
              <span id="gy-lbx-counter" style="font-size:11px;font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.1em"></span>
              <button id="gy-lbx-close"
                style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
                  display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;
                  transition:all .2s;" 
                onmouseover="this.style.background='rgba(233,196,0,.15)';this.style.borderColor='rgba(233,196,0,.5)';this.style.color='rgb(233,196,0)'"
                onmouseout="this.style.background='rgba(255,255,255,.06)';this.style.borderColor='rgba(255,255,255,.12)';this.style.color='#fff'">
                <span class="material-symbols-outlined" style="font-size:18px">close</span>
              </button>
            </div>
          </div>
 
          <!-- Main image -->
          <div id="gy-lbx-img-wrap" style="flex:1;display:flex;align-items:center;justify-content:center;width:100%;padding:0 80px;position:relative;">
            <img id="gy-lbx-img" src="" alt="" style="animation:gyLbxImgSwap .3s ease;" decoding="async" fetchpriority="high"/>
          </div>
 
          <!-- Prev / Next -->
          <button class="gy-lbx-nav" id="gy-lbx-prev">
            <span class="material-symbols-outlined" style="font-size:22px">chevron_left</span>
          </button>
          <button class="gy-lbx-nav" id="gy-lbx-next">
            <span class="material-symbols-outlined" style="font-size:22px">chevron_right</span>
          </button>
 
          <!-- Bottom: filmstrip -->
          <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;
            background:linear-gradient(to top,rgba(0,0,0,.85),transparent);padding:16px 0 20px">
            <div id="gy-lbx-filmstrip"></div>
          </div>
        `;
        document.body.appendChild(lbx);
 
        // Wire close
        document.getElementById('gy-lbx-close').addEventListener('click', closeLightbox);
        lbx.addEventListener('click', (e) => { if(e.target === lbx || e.target === document.getElementById('gy-lbx-img-wrap')) closeLightbox(); });
 
        // Keyboard
        document.addEventListener('keydown', (e) => {
          if (!lbx.classList.contains('active')) return;
          if (e.key === 'ArrowRight') lbxNav(1);
          if (e.key === 'ArrowLeft')  lbxNav(-1);
          if (e.key === 'Escape')     closeLightbox();
        });
 
        // Nav buttons
        document.getElementById('gy-lbx-prev').addEventListener('click', () => lbxNav(-1));
        document.getElementById('gy-lbx-next').addEventListener('click', () => lbxNav(1));
      }
 
      // State
      let lbxImages = [], lbxIndex = 0;
 
      function lbxNav(dir) {
        lbxIndex = (lbxIndex + dir + lbxImages.length) % lbxImages.length;
        updateLightbox();
      }
 
      function updateLightbox() {
        const img = document.getElementById('gy-lbx-img');
        const counter = document.getElementById('gy-lbx-counter');
        const strip = document.getElementById('gy-lbx-filmstrip');
 
        img.style.animation = 'none';
        img.offsetHeight;
        img.style.animation = 'gyLbxImgSwap .3s ease';
        img.src = lbxImages[lbxIndex];
 
        counter.textContent = (lbxIndex + 1) + ' / ' + lbxImages.length;
 
        // Filmstrip
        strip.querySelectorAll('.gy-lbx-film-item').forEach((item, i) => {
          item.classList.toggle('active', i === lbxIndex);
        });
        // Scroll active into view
        const activeItem = strip.querySelectorAll('.gy-lbx-film-item')[lbxIndex];
        if (activeItem) activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
 
        // Show/hide nav arrows
        document.getElementById('gy-lbx-prev').style.display = lbxImages.length > 1 ? 'flex' : 'none';
        document.getElementById('gy-lbx-next').style.display = lbxImages.length > 1 ? 'flex' : 'none';
      }
 
      function closeLightbox() {
        const lbxEl = document.getElementById('gy-lightbox');
        if (lbxEl) lbxEl.classList.remove('active');
      }
 
      // Public open function
      window.openLightbox = function(images, startIndex) {
        lbxImages = images;
        lbxIndex  = startIndex || 0;
 
        // Build filmstrip
        const strip = document.getElementById('gy-lbx-filmstrip');
        strip.innerHTML = images.map((url, i) => `
          <div class="gy-lbx-film-item${i === lbxIndex ? ' active' : ''}" data-lbx-index="${i}">
            <img src="${url}" alt="Foto ${i+1}" loading="lazy" decoding="async" fetchpriority="low" onerror="this.parentElement.style.display='none'"/>
          </div>
        `).join('');
 
        strip.querySelectorAll('.gy-lbx-film-item').forEach((item) => {
          item.addEventListener('click', () => {
            lbxIndex = parseInt(item.dataset.lbxIndex, 10);
            updateLightbox();
          });
        });
 
        updateLightbox();
        document.getElementById('gy-lightbox').classList.add('active');
      };
    })();
 
    // ── VIDEO LIGHTBOX ──────────────────────────────
    (function buildVideoLightbox() {
      let vlbx = document.getElementById('gy-video-lightbox');
      if (!vlbx) {
        vlbx = document.createElement('div');
        vlbx.id = 'gy-video-lightbox';
        vlbx.innerHTML = `
          <div id="vlbx-overlay" class="fixed inset-0 z-[100000] hidden flex-col items-center justify-center opacity-0 transition-opacity duration-500 ease-out bg-black/95 backdrop-blur-3xl">
            <!-- Elite Close Button -->
            <button id="vlbx-close" class="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center cursor-pointer z-[100] transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:scale-105 active:scale-95 group shadow-2xl backdrop-blur-md">
              <span class="material-symbols-outlined text-[24px] sm:text-[28px] font-light transition-transform duration-500 group-hover:rotate-90">close</span>
            </button>
            
            <!-- Video Container: Edge-to-edge mobile, floating modal desktop -->
            <div id="vlbx-container" class="relative w-full h-full sm:w-[90vw] sm:max-w-6xl sm:h-[85vh] flex items-center justify-center sm:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] sm:shadow-primary/10 bg-black/50 scale-95 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <!-- Subtle glassmorphism border ring (desktop only) -->
              <div class="hidden sm:block absolute inset-0 pointer-events-none border border-white/10 rounded-[40px] z-10"></div>
              <video id="vlbx-video" class="w-full h-full object-contain sm:object-cover" controls playsinline preload="auto"></video>
            </div>
          </div>
        `;
        document.body.appendChild(vlbx);
        
        const overlay = document.getElementById('vlbx-overlay');
        const container = document.getElementById('vlbx-container');
        const video = document.getElementById('vlbx-video');
        const closeBtn = document.getElementById('vlbx-close');
        
        function close() {
          overlay.style.opacity = '0';
          container.style.transform = 'scale(0.95)';
          video.pause();
          setTimeout(() => { 
            overlay.classList.remove('flex'); 
            overlay.classList.add('hidden'); 
            video.src = ''; 
          }, 500);
        }
        
        closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', (e) => { if(e.target === overlay) close(); });
        document.addEventListener('keydown', (e) => { if(!overlay.classList.contains('hidden') && e.key === 'Escape') close(); });
        
        window.openVideoLightbox = function(url) {
          video.src = url;
          overlay.classList.remove('hidden');
          overlay.classList.add('flex');
          // force reflow
          overlay.offsetHeight;
          overlay.style.opacity = '1';
          container.style.transform = 'scale(1)';
          video.play().catch(console.error);
        };
      }
    })();
 
    // ── 3. SCROLL REVEALS ──────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -100px 0px' });
    
    function initReveals() {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
 
    // ── 4. COUNTERS ───────────────────────────────────────────
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);
        animateCounter(entry.target);
      });
    }, { threshold: 0.1 });
 
    function initCounters() {
      document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
    }
 
    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target)) || 10;
      const timer = setInterval(() => {
        current += Math.ceil(target/100) || 1;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = current + suffix;
        }
      }, stepTime);
    }
 
    function renderBranchCards(branches) {
      branches.forEach(branch => {
        const key = normalizeKey(branch.name);
        const card = document.querySelector(`[data-temple="${key}"]`);
 
        if (card) {
          // Priority: use landing_branch_cards image, fallback to branches.image_url
          const imageToUse = branch.card_image || branch.image_url;
          if (imageToUse) {
            let img = card.querySelector('img');
            if (img) {
              img.src = imageToUse;
            } else {
              img = document.createElement('img');
              img.className = "absolute inset-0 w-full h-full object-cover transition-all duration-700";
              img.src = imageToUse;
              card.insertBefore(img, card.firstChild);
            }
          }
 
          // Merge gallery images and maps_url into templesData so the modal can use them
          if (templesData[key]) {
            templesData[key].gallery_images = branch.gallery_images ?? [];
            templesData[key].maps_url = branch.maps_url ?? null;
            templesData[key].latitude = branch.latitude;
            templesData[key].longitude = branch.longitude;
            templesData[key].id = branch.id;
            
            if (branch.card_video) {
              templesData[key].video_url = branch.card_video;
              
              let video = card.querySelector('video.hover-video');
              if (!video) {
                video = document.createElement('video');
                video.className = "hover-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 pointer-events-none";
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.preload = "none";
                
                let gradient = card.querySelector('.bg-gradient-to-t') || card.querySelector('.bg-gradient-to-br') || card.querySelector('[class*="bg-gradient"]');
                let textContent = card.querySelector('.absolute.bottom-0');
                
                if (gradient) {
                  card.insertBefore(video, gradient);
                } else if (textContent) {
                  card.insertBefore(video, textContent);
                } else {
                  card.appendChild(video);
                }
                
                // Asegurar que el texto esté por encima de todo
                if (textContent) textContent.style.zIndex = "10";
                if (gradient) gradient.style.zIndex = "5";
                
                const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
                
                if (isTouchDevice) {
                  // Botón de volumen para móvil
                  const volBtn = document.createElement('button');
                  volBtn.className = "absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 transition-all duration-500 scale-90 pointer-events-auto hover:bg-primary/20 hover:border-primary/50 hover:text-primary video-sound-btn";
                  volBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">volume_off</span>';
                  
                  // Detener propagación para que no abra el modal
                  volBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (video.muted) {
                      video.muted = false;
                      volBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">volume_up</span>';
                      volBtn.classList.add('text-primary', 'border-primary/50');
                    } else {
                      video.muted = true;
                      volBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">volume_off</span>';
                      volBtn.classList.remove('text-primary', 'border-primary/50');
                    }
                  });
                  card.appendChild(volBtn);
                  
                  const io = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        if (!video.src) video.src = branch.card_video;
                        video.play().catch(e => console.log("Autoplay evitado por navegador", e));
                        video.classList.remove('opacity-0');
                        video.classList.add('opacity-100');
                        volBtn.classList.remove('opacity-0', 'scale-90');
                        volBtn.classList.add('opacity-100', 'scale-100');
                        card.classList.add('video-playing');
                      } else {
                        video.pause();
                        video.classList.remove('opacity-100');
                        video.classList.add('opacity-0');
                        volBtn.classList.remove('opacity-100', 'scale-100');
                        volBtn.classList.add('opacity-0', 'scale-90');
                        card.classList.remove('video-playing');
                        // Resetear mute si sale de pantalla
                        video.muted = true;
                        volBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">volume_off</span>';
                        volBtn.classList.remove('text-primary', 'border-primary/50');
                      }
                    });
                  }, { threshold: 0.6 });
                  
                  io.observe(card);
                } else {
                  // Comportamiento desktop normal
                  card.addEventListener('mouseenter', () => {
                    if (!video.src) video.src = branch.card_video;
                    video.play().catch(e => console.log("Autoplay evitado por navegador", e));
                    video.classList.remove('opacity-0');
                    video.classList.add('opacity-100');
                  });
                  
                  card.addEventListener('mouseleave', () => {
                    video.pause();
                    video.classList.remove('opacity-100');
                    video.classList.add('opacity-0');
                  });
                }
              }
            }
          }
        }
      });
    }
 
    // ── 5. BUSCAR MI TEMPLO (GEOLOCATION + DISTANCE MATRIX) ──────
    const findMyTempleBtn = document.getElementById('findMyTempleBtn');
    let branchesWithCoords = [];

    if (findMyTempleBtn) {
      findMyTempleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!navigator.geolocation) {
          alert('Tu navegador no soporta geolocalización.');
          return;
        }

        findMyTempleBtn.innerText = 'LOCALIZANDO...';
        findMyTempleBtn.classList.add('opacity-50', 'pointer-events-none');

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const userLoc = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            try {
              await calculateDistances(userLoc);
            } catch (err) {
              console.error('Error calculating distances:', err);
              alert('Error al calcular las distancias.');
              resetFindBtn();
            }
          },
          (err) => {
            console.error('Geolocation error:', err);
            alert('No pudimos obtener tu ubicación. Por favor, activa los permisos.');
            resetFindBtn();
          }
        );
      });
    }

    function resetFindBtn() {
      if (!findMyTempleBtn) return;
      findMyTempleBtn.innerText = 'Busca el gimnasio más cercano';
      findMyTempleBtn.classList.remove('opacity-50', 'pointer-events-none');
    }
 
    function haversineDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c;
    }

    function calculateHaversineFallback(userLoc) {
      if (!branchesWithCoords || branchesWithCoords.length === 0) {
        alert('No hay sucursales con coordenadas configuradas.');
        resetFindBtn();
        return;
      }
      const recos = branchesWithCoords.map(branch => {
        const distKm = haversineDistance(userLoc.lat, userLoc.lng, branch.latitude, branch.longitude);
        const durationMin = Math.max(1, Math.round(distKm * 2.5));
        return {
          ...branch,
          distanceText: distKm < 1 ? `${Math.round(distKm * 1000)} m` : `${distKm.toFixed(1)} km`,
          distanceValue: distKm * 1000,
          durationText: `${durationMin} min`
        };
      })
      .sort((a, b) => a.distanceValue - b.distanceValue)
      .slice(0, 3);

      renderRecommendations(recos);
      resetFindBtn();
    }

    async function calculateDistances(userLoc) {
      if (!window.google || !window.google.maps) {
        console.warn('Google Maps API no disponible, usando cálculo alternativo');
        calculateHaversineFallback(userLoc);
        return;
      }

      if (branchesWithCoords.length === 0) {
        alert('No hay sucursales con coordenadas configuradas.');
        resetFindBtn();
        return;
      }

      const service = new google.maps.DistanceMatrixService();
      
      const origins = [new google.maps.LatLng(userLoc.lat, userLoc.lng)];
      const destinations = branchesWithCoords.map(b => new google.maps.LatLng(b.latitude, b.longitude));
 
      service.getDistanceMatrix({
        origins: origins,
        destinations: destinations,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      }, (response, status) => {
        if (status !== 'OK') {
          console.error('Distance Matrix Error:', status);
          alert('Error al calcular las distancias: ' + status);
          resetFindBtn();
          return;
        }
 
        const results = response.rows[0].elements;
        const recommendations = branchesWithCoords.map((branch, i) => ({
          ...branch,
          distanceText: results[i].distance?.text || 'N/A',
          distanceValue: results[i].distance?.value ?? 999999,
          durationText: results[i].duration?.text || 'N/A'
        }))
        .filter(b => b.distanceValue < 999999)
        .sort((a, b) => a.distanceValue - b.distanceValue)
        .slice(0, 3);
 
        renderRecommendations(recommendations);
        resetFindBtn();
      });
    }
 
    function renderRecommendations(recos) {
      // Remove existing if any
      const existing = document.getElementById('recommendations-panel');
      if (existing) existing.remove();
 
      const panel = document.createElement('div');
      panel.id = 'recommendations-panel';
      // Use left-0/right-0 + mx-auto instead of left-1/2 + -translate-x-1/2
      // to avoid iOS Safari sub-pixel rendering issues with transforms
      panel.className = 'fixed bottom-4 left-0 right-0 mx-auto z-[150] w-[calc(100%-2rem)] max-w-lg bg-zinc-900/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal active';
      
      panel.innerHTML = `
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-[10px] font-black text-primary tracking-[.3em] uppercase flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">explore</span>
            Templos Recomendados
          </h4>
          <button onclick="this.parentElement.parentElement.remove()" class="text-zinc-500 hover:text-white transition-colors">
            <span class="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
        <div class="space-y-3">
          ${recos.map(r => `
            <button class="reco-item w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group" data-branch-id="${r.id}" data-key="${normalizeKey(r.name)}">
              <div class="text-left min-w-0 flex-1 mr-3">
                <p class="text-sm font-black text-white uppercase group-hover:text-primary transition-colors truncate">${r.name}</p>
                <p class="text-[10px] text-zinc-500 font-bold uppercase mt-0.5">${r.durationText} de conducción</p>
              </div>
              <div class="text-right flex-none">
                <p class="text-xs font-black text-primary">${r.distanceText}</p>
                <span class="text-[9px] text-zinc-600 font-black uppercase tracking-tighter">Ver Templo</span>
              </div>
            </button>
          `).join('')}
        </div>
      `;
 
      document.body.appendChild(panel);
 
      panel.querySelectorAll('.reco-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.key;
          const card = document.querySelector(`[data-temple="${key}"]`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Highlight effect
            card.classList.add('highlighted-branch-card');
            setTimeout(() => {
              card.classList.remove('highlighted-branch-card');
            }, 3000);
            
            panel.remove();
          }
        });
      });
    }
 
    function initCountdown() {
      const countdownContainer = document.getElementById('countdown-ecatepec');
      if (!countdownContainer) return;

      const targetDate = new Date('2026-07-13T18:00:00');

      function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          const cdHours = document.getElementById('cd-hours');
          const cdMins = document.getElementById('cd-mins');
          const cdSecs = document.getElementById('cd-secs');
          if (cdHours) cdHours.textContent = '00';
          if (cdMins) cdMins.textContent = '00';
          if (cdSecs) cdSecs.textContent = '00';
          
          const label = countdownContainer.previousElementSibling;
          if (label) {
            label.textContent = "¡YA INAUGURADO!";
            label.classList.remove('text-zinc-500');
            label.classList.add('text-primary');
          }
          return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        const cdHours = document.getElementById('cd-hours');
        const cdMins = document.getElementById('cd-mins');
        const cdSecs = document.getElementById('cd-secs');

        if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
        if (cdMins) cdMins.textContent = String(mins).padStart(2, '0');
        if (cdSecs) cdSecs.textContent = String(secs).padStart(2, '0');
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }

    // No skeletons needed as we use static DOM
    // renderSkeletons();
    initCountdown();
    initCounters();
    initReveals();
 
    function ensureEcatepecCoords() {
      const ecatepecInCoords = branchesWithCoords.some(b => normalizeKey(b.name) === 'ecatepec');
      if (!ecatepecInCoords && templesData['ecatepec']) {
        branchesWithCoords.push({
          id: 'ecatepec-static',
          name: templesData['ecatepec'].name,
          latitude: templesData['ecatepec'].latitude,
          longitude: templesData['ecatepec'].longitude,
          maps_url: templesData['ecatepec'].maps_url
        });
      }
    }

    fetchActiveBranches().then(branches => {
      if (branches && branches.length > 0) {
        branchesWithCoords = branches.filter(b => b.latitude && b.longitude);
        renderBranchCards(branches);
      }
      ensureEcatepecCoords();
      attachModalListeners();
    }).catch(err => {
      console.error('[GyMan] Fallback to static data due to error:', err);
      ensureEcatepecCoords();
      attachModalListeners();
    });
 
  });
})();