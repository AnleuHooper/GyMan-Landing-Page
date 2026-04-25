import { fetchActiveBranches } from './src/services/branchService.js';

// ════════════════════════════════════════════════════════════
//  GYMAN | KINETIC SANCTUARY — main.js
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
    const profileBtn= document.getElementById('profileBtn');
    const sideDrawer= document.getElementById('sideDrawer');
    const overlay   = document.getElementById('drawerOverlay');
    const panel     = document.getElementById('drawerPanel');

    function onScroll() {
      if(nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (profileBtn && sideDrawer) {
      profileBtn.addEventListener('click', () => toggleDrawer(true));
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

    // ── 2. TEMPLE DATA (CLEANED 24h) ───────────────────────────
    const templesData = {
      "chimalli": {
        name: "CHIMALLI",
        dir: "Av. del Peñon, esq. Acuitlapilco, Chimalhuacán.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Regular", price: "$390", tag: "Basic" },
          { type: "Pareja", price: "$750", tag: "Duo" },
          { type: "Trimestre", price: "$1,090", tag: "3 Months" },
          { type: "Estudiante", price: "$330", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Regaderas con shampoo", "Coach certificado", "Zona cardio variada", "Amplia zona de pesas", "Café sin costo"]
      },
      "fortaleza": {
        name: "FORTALEZA",
        dir: "Av. Chimalhuacán Esq. con Caballo bayo, Nezahualcóyotl.",
        hours: { week: "05:00 - 00:00", weekend: "08:00 - 21:00" },
        prices: [
          { type: "Anualidad", price: "$4,200" },
          { type: "VIP", price: "$550" },
          { type: "Pareja", price: "$890" },
          { type: "Trimestre", price: "$1,290" },
          { type: "Estudiante", price: "$390" },
          { type: "Semana", price: "$150" },
          { type: "Visita", price: "$50" }
        ],
        services: ["Sauna", "Área de funcional", "Área de comida", "Tienda suplementos", "Tienda Ropa", "Café gratis"]
      },
      "huehuetoca": {
        name: "HUEHUETOCA",
        dir: "Carretera Refinería Tula - Jorobas km 05, Huehuetoca.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200" },
          { type: "VIP", price: "$550" },
          { type: "Trimestre", price: "$1,290" },
          { type: "Estudiante", price: "$390" },
          { type: "Visita", price: "$50" }
        ],
        services: ["Sauna", "Regaderas amplias", "Coach certificado", "Mega zona cardio", "Zona pesas", "Café gratis"]
      },
      "ixtapaluca": {
        name: "IXTAPALUCA",
        dir: "Av. del canal esq. calle caoba, Col. Alfredo del mazo.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200" },
          { type: "VIP", price: "$550" },
          { type: "Pareja", price: "$890" },
          { type: "Semana", price: "$150" },
          { type: "Visita", price: "$50" }
        ],
        services: ["Sauna", "Vapor", "Área infantil", "Zona lounge", "Regaderas", "Café gratis"]
      },
      "maxximus": {
        name: "MAXXIMUS",
        dir: "Plaza Tudanca, Matamoros 1, Chalco Centro.",
        hours: { week: "06:00 - 22:00", weekend: "08:00 - 18:00" },
        prices: [
          { type: "Anualidad", price: "$4,200" },
          { type: "VIP", price: "$550" },
          { type: "Regular", price: "$490" },
          { type: "Trimestre", price: "$1,290" },
          { type: "Visita", price: "$50" }
        ],
        services: ["Sauna", "Vapor", "Área Infantil", "Café sin costo"]
      },
      "nezavip": {
        name: "NEZA VIP",
        dir: "Esq. Calle Adelita y Cama de piedra, Col. Benito Juárez.",
        hours: { week: "06:00 - 23:00", weekend: "08:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Regular", price: "$390", tag: "Basic" },
          { type: "Trimestre", price: "$1,090", tag: "3 Months" },
          { type: "Pareja", price: "$750", tag: "Duo" },
          { type: "Estudiante", price: "$330", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Zona VIP exclusiva", "Coach personalizado", "Regaderas premium", "Café gratuito"]
      },
      "pinkneza": {
        name: "PINK NEZA",
        dir: "La Mariquita #211, Colonia Benito Juárez, Nezahualcóyotl.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Pareja", price: "$890", tag: "Duo" },
          { type: "Trimestre", price: "$1,290", tag: "3 Months" },
          { type: "Estudiante", price: "$390", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Área infantil", "Regaderas", "Café gratis"]
      },
      "pinkreyes": {
        name: "PINK REYES",
        dir: "Paseo del Tepozán esq. Álamos, Floresta, Los Reyes.",
        hours: { week: "06:00 - 22:30", weekend: "09:00 - 21:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Trimestre", price: "$1,290", tag: "3 Months" },
          { type: "Pareja", price: "$890", tag: "Duo" },
          { type: "Estudiante", price: "$390", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Área infantil", "Regaderas amplias", "Café gratuito"]
      },
      "tezontle": {
        name: "TEZONTLE",
        dir: "Canal de Tezontle 55 Primer Piso, Iztapalapa, CDMX.",
        hours: { week: "06:00 - 22:30", weekend: "09:00 - 21:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Trimestre", price: "$1,290", tag: "3 Months" },
          { type: "Platinum", price: "$1,090", tag: "Premium" },
          { type: "Pareja", price: "$890", tag: "Duo" },
          { type: "Estudiante", price: "$390", tag: "Scholar" },
          { type: "Restringido", price: "$350", tag: "Morning" },
          { type: "Semana", price: "$250", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Sauna", "Regaderas", "Amplia zona pesas", "Café gratuito"]
      },
      "tlapala": {
        name: "TLAPALA",
        dir: "Calle Allende MZ 1 LT 1, La Candelaria Tlapala.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Trimestre", price: "$1,090", tag: "3 Months" },
          { type: "Regular", price: "$390", tag: "Basic" },
          { type: "Pareja", price: "$750", tag: "Duo" },
          { type: "Estudiante", price: "$330", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Regaderas", "Coach certificado", "Zona cardio", "Pesas", "Café gratuito"]
      },
      "vallechalco": {
        name: "VALLE DE CHALCO",
        dir: "Av. Alfredo del Mazo #132, col. Jardín, Valle de Chalco.",
        hours: { week: "06:00 - 00:00", weekend: "08:00 - 20:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Regular", price: "$390", tag: "Basic" },
          { type: "Trimestre", price: "$1,090", tag: "3 Months" },
          { type: "Pareja", price: "$750", tag: "Duo" },
          { type: "Estudiante", price: "$330", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Sauna", "Regaderas", "Coach", "Zona cardio", "Zona pesas", "Café gratuito"]
      },
      "valle2": {
        name: "VALLE II",
        dir: "Av Cuautemoc, San Miguel Xico 3ra sección, Valle de Chalco.",
        hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Trimestre", price: "$899", tag: "3 Months" },
          { type: "Pareja", price: "$599", tag: "Duo" },
          { type: "Estudiante", price: "$249", tag: "Scholar" },
          { type: "Restringido", price: "$249", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Sauna", "Vapor", "Regaderas Amplias", "Coach Certificado", "Café sin costo"]
      },
      "zapata": {
        name: "ZAPATA",
        dir: "Av Tierra y Libertad 120, Emiliano Zapata, Chalco.",
        hours: { week: "06:00 - 00:00", weekend: "08:00 - 21:00" },
        prices: [
          { type: "Anualidad", price: "$4,200", tag: "Elite" },
          { type: "VIP", price: "$550", tag: "Full" },
          { type: "Regular", price: "$490", tag: "Basic" },
          { type: "Pareja", price: "$890", tag: "Duo" },
          { type: "Estudiante", price: "$390", tag: "Scholar" },
          { type: "Restringido", price: "$290", tag: "Morning" },
          { type: "Semana", price: "$150", tag: "Short" },
          { type: "Visita", price: "$50", tag: "One Day" }
        ],
        services: ["Zona Launge", "Sauna", "Regaderas amplias", "Coach", "Zona pesas", "Café gratis"]
      },
      "gold": {
        name: "GOLD",
        dir: "Canal de Miramontes 1976, Col. Educación, Coyoacán. (Arriba de 3B)",
        hours: { week: "05:00 - 00:00", weekend: "08:00 - 21:00" },
        prices: [
          { type: "Inscripción", price: "$499", tag: "Pago Único", isHighlighted: true, benefits: ["Pase directo de ingreso", "Activación del sistema"] },
          { type: "Mensualidad", price: "$780", tag: "Elite", benefits: ["GyM", "Nutrióloga", "Sauna", "Regaderas", "Coach", "Acceso a todas las sucursales"] },
          { type: "Anualidad", price: "$6,900", tag: "Platinum", benefits: ["GyM", "Nutrióloga", "Sauna", "Regaderas", "Coach", "Acceso a todas las sucursales"] },
          { type: "Trimestre", price: "$1,990", tag: "Quarter", benefits: ["GyM", "Regaderas", "Coach"] },
          { type: "Pareja", price: "$1,350", tag: "Duo", benefits: ["GyM", "Regaderas", "Coach"] },
          { type: "Semana", price: "$290", tag: "Short", benefits: ["GyM", "Regaderas", "Coach"] },
          { type: "Visita", price: "$100", tag: "Single", benefits: ["GyM", "Regaderas", "Coach"] }
        ],
        services: ["GyM Tech-Zone", "Nutrióloga Certificada", "Sauna & Vapor", "Regaderas Climatizadas", "Coach Master", "Acceso Total a Sucursales"]
      }
    };

    const modal = document.getElementById('templeModal');
    const modalContent = document.getElementById('modalDetails');
    const closeBtn = document.getElementById('closeModal');

    function attachModalListeners() {
      document.querySelectorAll('[data-temple]').forEach(card => {
        card.addEventListener('click', () => {
          const key = card.getAttribute('data-temple');
          const data = templesData[key];
          if (!data) return;

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
              <p class="text-zinc-500 font-body text-xs sm:text-sm tracking-widest uppercase">${data.dir}</p>
            </div>

            <!-- Galería Interior (solo si hay fotos) -->
            ${galleryHTML}
            
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
              
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
                <div class="grid grid-cols-2 gap-3">
                  ${data.prices.map(p => `
                    <div class="price-card relative bg-zinc-900 border ${p.isHighlighted ? 'border-primary shadow-[0_0_15px_rgba(233,196,0,0.2)] col-span-2' : 'border-white/10'} rounded-xl p-3 sm:p-5 hover:border-primary hover:shadow-[0_0_20px_rgba(233,196,0,0.1)] transition-all ${p.benefits ? 'cursor-pointer' : ''} group overflow-hidden">
                      ${p.benefits ? `
                      <div class="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-all">
                         <span class="material-symbols-outlined text-primary toggle-icon" style="font-size:18px">expand_more</span>
                      </div>` : ''}
                      <p class="text-[9px] font-black ${p.isHighlighted ? 'text-primary' : 'text-zinc-600'} uppercase mb-1">${p.tag || 'Standard'}</p>
                      <h5 class="text-sm sm:text-lg font-headline font-black text-white uppercase group-hover:text-primary transition-colors leading-tight">${p.type}</h5>
                      <div class="mt-2 sm:mt-4 flex items-baseline gap-1">
                        <span class="text-lg sm:text-2xl font-headline font-black ${p.isHighlighted ? 'text-primary' : 'text-white'}">${p.price}</span>
                        <span class="text-zinc-500 text-[9px] font-bold">MXN</span>
                      </div>
                      ${p.benefits && p.benefits.length > 0 ? `
                      <p class="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-2 group-hover:text-primary transition-colors toggle-legend">Ver beneficios</p>
                      <div class="benefits-container hidden mt-2 border-t border-white/10 pt-3">
                        <p class="text-[9px] font-black text-white uppercase tracking-widest mb-2">Beneficios Incluidos:</p>
                        <ul class="grid grid-cols-1 gap-1.5">
                          ${p.benefits.map(b => `
                            <li class="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                              <div class="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
                              ${b}
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                      ` : ''}
                    </div>
                  `).join('')}
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
              if(container && icon) {
                const isHidden = container.classList.toggle('hidden');
                icon.textContent = isHidden ? 'expand_more' : 'expand_less';
                if(legend) legend.textContent = isHidden ? 'Ver beneficios' : 'Ocultar beneficios';
              }
            });
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
      modal.classList.add('opacity-0');
      modal.querySelector('.modal-panel').style.transform = 'scale(0.95)';
      setTimeout(() => modal.classList.add('invisible'), 300);
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
              img.className = "absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700";
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
      findMyTempleBtn.innerText = 'BUSCAR MI TEMPLO';
      findMyTempleBtn.classList.remove('opacity-50', 'pointer-events-none');
    }

    async function calculateDistances(userLoc) {
      if (!window.google || !window.google.maps) {
        alert('La librería de mapas no se cargó correctamente.');
        resetFindBtn();
        return;
      }

      const service = new google.maps.DistanceMatrixService();
      
      const origins = [new google.maps.LatLng(userLoc.lat, userLoc.lng)];
      const destinations = branchesWithCoords.map(b => new google.maps.LatLng(b.latitude, b.longitude));

      if (destinations.length === 0) {
        alert('No hay sucursales con coordenadas configuradas.');
        resetFindBtn();
        return;
      }

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

    // No skeletons needed as we use static DOM
    // renderSkeletons();
    initCounters();
    initReveals();

    fetchActiveBranches().then(branches => {
      if (branches && branches.length > 0) {
        branchesWithCoords = branches.filter(b => b.latitude && b.longitude);
        renderBranchCards(branches);
      }
      attachModalListeners();
    }).catch(err => {
      console.error('[GyMan] Fallback to static data due to error:', err);
      attachModalListeners();
    });

  });
})();
