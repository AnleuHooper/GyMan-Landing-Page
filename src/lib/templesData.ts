export interface Price {
  type: string;
  price: string;
  tag: string;
  note?: string;
  benefits?: string[];
  isHighlighted?: boolean;
  isWomenPromo?: boolean;
}

export interface Hours {
  week: string;
  weekend: string;
}

export interface TempleClass {
  id: string;
  name: string;
}

export interface Temple {
  name: string;
  dir: string;
  hours: Hours;
  benefitsNotice?: string;
  prices: Price[];
  services: string[];
  classes?: TempleClass[];
  phone?: string;
  latitude?: number;
  longitude?: number;
  maps_url?: string | null;
  gallery_images?: string[];
  video_url?: string;
  id?: string;
}

export const templesData: Record<string, Temple> = {
  "chimalli": {
    name: "CHIMALLI",
    latitude: 19.429549687312775,
    longitude: -98.93563965767127,
    dir: "Av. del Peñon, esq. Acuitlapilco, Chimalhuacán.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas", "Nutriólogo", "Acceso a todas las sucursales"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas", "Nutriólogo", "Acceso a todas las sucursales"] },
      { type: "Mensualidad", price: "$390", tag: "Basic", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas", "Nutriólogo"] },
      { type: "Pareja", price: "$750", tag: "Duo", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas", "Nutriólogo"] },
      { type: "Trimestre", price: "$1,090", tag: "3 Months", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas", "Nutriólogo"] },
      { type: "Estudiante", note: "Requiere presentar credencial de estudiante", price: "$330", tag: "Scholar", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas"] },
      { type: "Acceso Restringido", note: "Horario de 11:00 AM a 4:00 PM", price: "$290", tag: "Morning", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Acceso al área de cardio", "Instructor", "Regaderas", "Pesas"] }
    ],
    services: ["Regaderas con shampoo", "Coach certificado", "Zona cardio variada", "Amplia zona de pesas", "Café sin costo"],
    phone: "55 9498 5173"
  },
  "fortaleza": {
    name: "FORTALEZA",
    latitude: 19.407335267293977,
    longitude: -99.01822218465743,
    dir: "Av. Chimalhuacán Esq. con Caballo bayo, Nezahualcóyotl.",
    hours: { week: "05:00 - 00:00", weekend: "08:00 - 21:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Platinum", benefits: ["Acceso a todas las sucursales", "Sauna", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Sauna", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Trimestre", price: "$1,290", tag: "Quarter", benefits: ["Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Nutriólogo", "Regaderas", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas"] }
    ],
    services: ["Sauna", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"],
    classes: [
      { id: "8a54a180-1ea1-4431-b303-54b488650d07", name: "POLE DANCE" },
      { id: "9f3a015c-5e60-4ff2-83be-d0581530e135", name: "EXOTIC POLE" },
      { id: "8062ca3e-6e73-4551-aedd-10aede2320b5", name: "SPINNING" },
      { id: "85fd5061-cd38-4a7a-936d-2a91367e0d1c", name: "TWERK" }
    ],
    phone: "55 9202 3444"
  },
  "huehuetoca": {
    name: "HUEHUETOCA",
    latitude: 19.831869224236485,
    longitude: -99.24500429999998,
    dir: "Carretera Refinería Tula - Jorobas km 05, Huehuetoca.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Nutrióloga", "Sauna", "Regaderas", "Coach", "Acceso a todas las sucursales"] },
      { type: "Mensualidad", price: "$550", tag: "Full", benefits: ["Nutrióloga", "Sauna", "Regaderas", "Coach", "Acceso a todas las sucursales"] },
      { type: "Trimestre", price: "$1,290", tag: "Quarter", benefits: ["Nutrióloga", "Regaderas", "Coach"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Nutrióloga", "Regaderas", "Coach"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Gym", "Regaderas", "Coach"] },
      { type: "Restringido", note: "Horario 11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Gym", "Regaderas", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Gym", "Regaderas", "Coach"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Gym", "Regaderas", "Coach"] }
    ],
    services: ["Sauna", "Regaderas amplias", "Coach certificado", "Mega zona cardio", "Zona pesas", "Café gratis"],
    phone: "55 9664 2430"
  },
  "ixtapaluca": {
    name: "IXTAPALUCA",
    latitude: 19.293504020533835,
    longitude: -98.90372995767127,
    dir: "Av. del canal esq. calle caoba, Col. Alfredo del mazo.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Platinum", benefits: ["Acceso a todas las sucursales", "Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Trimestre", price: "$1,290", tag: "Quarter", benefits: ["Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Nutriólogo", "Regaderas", "Coach"] },
      { type: "Restringido", note: "11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Regaderas", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas"] }
    ],
    services: ["Sauna & Vapor", "Regaderas", "Lockers", "Vestidores", "Nutriólogo", "Café gratis", "Coach"],
    phone: "55 9386 2086"
  },
  "maxximus": {
    name: "MAXXIMUS",
    latitude: 19.261344842938698,
    longitude: -98.90013287116436,
    dir: "Plaza Tudanca, Matamoros 1, Chalco Centro.",
    hours: { week: "06:00 - 22:00", weekend: "08:00 - 18:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales", "Vapor", "Sauna", "Regaderas", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Vapor", "Sauna", "Regaderas", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Trimestre", price: "$1,290", tag: "Quarter", benefits: ["Vapor", "Sauna", "Regaderas", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Regaderas", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Nutriólogo", "Regaderas", "Coach"] },
      { type: "Restringido", note: "11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Regaderas", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas"] }
    ],
    services: ["Vapor & Sauna", "Nutriólogo", "Regaderas", "Coach Certificado", "Café gratuito"],
    classes: [
      { id: "5fd976a5-fd2c-4f38-8b47-302a013781fa", name: "Xtreme Box" },
      { id: "8d0c5aef-a151-4bc4-abd5-00e1393b1ad1", name: "Step" },
      { id: "e8ee32c2-557f-4a7b-a7dc-2c874db04275", name: "Danza Aérea" },
      { id: "c1000000-0000-0000-0000-000000000005", name: "Pole Dance" },
      { id: "ac6bf204-b6c3-4bc0-bb2c-8fe3436a0508", name: "ZUMBA" },
      { id: "c1000000-0000-0000-0000-000000000006", name: "Pilates" },
      { id: "c1000000-0000-0000-0000-000000000004", name: "Spinning" }
    ],
    phone: "55 9378 5241"
  },
  "nezavip": {
    name: "NEZA VIP",
    latitude: 19.398008738863883,
    longitude: -99.00333372292742,
    dir: "Esq. Calle Adelita y Cama de piedra, Col. Benito Juárez.",
    hours: { week: "06:00 - 23:00", weekend: "08:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Regaderas", "Pesas", "Cardio", "Coach", "Nutriólogo", "Acceso a todas las sucursales"] },
      { type: "Mes VIP", price: "$550", tag: "Full", benefits: ["Regaderas", "Pesas", "Cardio", "Coach", "Nutriólogo", "Acceso a todas las sucursales"] },
      { type: "Regular", price: "$390", tag: "Basic", benefits: ["Pesas", "Cardio", "Coach", "Nutriólogo"] },
      { type: "Trimestre", price: "$1,090", tag: "3 Months", benefits: ["Pesas", "Cardio", "Coach", "Nutriólogo"] },
      { type: "Pareja", price: "$750", tag: "Duo", benefits: ["Pesas", "Cardio", "Coach", "Nutriólogo"] },
      { type: "Estudiante", note: "Credencial vigente, no mayor a 22 años", price: "$330", tag: "Scholar", benefits: ["Pesas", "Cardio", "Coach"] },
      { type: "Mes Restringido", note: "Acceso solo de 11:00 AM a 4:00 PM", price: "$290", tag: "Morning", benefits: ["Pesas", "Cardio", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Regaderas", "Coach", "Lockers", "Cardio"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Regaderas", "Coach", "Lockers", "Cardio"] }
    ],
    services: ["Zona VIP exclusiva", "Coach personalizado", "Regaderas premium", "Lockers & Vestidores", "Nutriólogo"],
    phone: "55 9026 1498"
  },
  "pinkneza": {
    name: "PINK NEZA",
    latitude: 19.404962207854517,
    longitude: -99.00159767791088,
    dir: "La Mariquita #211, Colonia Benito Juárez, Nezahualcóyotl.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales", "Regaderas", "Lockers & Vestidores", "Nutrióloga", "Café gratis", "Coach", "Pesas & Cardio", "Área de niños", "Dcto. Pilates & Spa"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Regaderas", "Lockers & Vestidores", "Nutrióloga", "Café gratis", "Coach", "Pesas & Cardio", "Área de niños", "Dcto. Pilates & Spa"] },
      { type: "Trimestre", price: "$1,290", tag: "3 Months", benefits: ["Regaderas", "Lockers & Vestidores", "Nutrióloga", "Café gratis", "Coach", "Área de niños", "Pesas & Cardio", "Dcto. Pilates & Spa"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Regaderas", "Lockers & Vestidores", "Nutrióloga", "Café gratis", "Coach", "Área de niños", "Pesas & Cardio", "Dcto. Pilates & Spa"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Regaderas", "Coach", "Área de niños", "Pesas & Cardio", "Dcto. Pilates & Spa", "Café gratis", "Lockers & Vestidores"] },
      { type: "Restringido", note: "11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Regaderas", "Coach", "Área de niños", "Pesas & Cardio", "Dcto. Pilates & Spa", "Café gratis", "Lockers & Vestidores"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas", "Área de niños", "Pesas & Cardio", "Café gratis", "Lockers & Vestidores"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas", "Área de niños", "Pesas & Cardio", "Café gratis", "Lockers & Vestidores"] }
    ],
    services: ["Nutrióloga Certificada", "Área Infantil", "Pilates & Spa", "Regaderas & Lockers", "Café gratuito"],
    classes: [
      { id: "621a5703-445a-4340-9154-68489931f4c5", name: "PILATES" }
    ],
    phone: "55 9386 5657"
  },
  "pinkreyes": {
    name: "PINK REYES",
    latitude: 19.36315575601384,
    longitude: -98.98819992278388,
    dir: "Paseo del Tepozán esq. Álamos, Floresta, Los Reyes.",
    hours: { week: "06:00 - 22:30", weekend: "09:00 - 21:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales", "Nutriólogo", "Regaderas", "Coach", "Café gratis", "Estancia para niños"] },
      { type: "Socio VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Nutriólogo", "Regaderas", "Coach", "Café gratis", "Estancia para niños"] },
      { type: "Trimestre", price: "$1,290", tag: "3 Months", benefits: ["Nutriólogo", "Regaderas", "Coach", "Café gratis", "Estancia para niños"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Nutriólogo", "Regaderas", "Coach", "Estancia para niños"] },
      { type: "Estudiante", price: "$390", tag: "Scholar", benefits: ["Regaderas", "Coach", "Café gratis", "Estancia para niños"] },
      { type: "Restringido", note: "11:00 am - 5:00 pm", price: "$290", tag: "Morning", benefits: ["Regadera", "Coach", "Estancia para niños"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas", "Estancia para niños"] },
      { type: "Día", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas", "Estancia para niños"] }
    ],
    services: ["Estancia para Niños", "Nutriólogo", "Regaderas Amplias", "Coach Certificado", "Café Gratuito"],
    phone: "55 9757 8090"
  },
  "tezontle": {
    name: "TEZONTLE",
    latitude: 19.382483910086563,
    longitude: -99.08676111349308,
    dir: "Canal de Tezontle 55 Primer Piso, Iztapalapa, CDMX.",
    hours: { week: "06:00 - 22:30", weekend: "09:00 - 21:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite" },
      { type: "VIP", price: "$550", tag: "Full" },
      { type: "Semestre", price: "$2,490", tag: "6 Months" },
      { type: "Trimestre", price: "$1,290", tag: "3 Months" },
      { type: "Platinum", price: "$1,090", tag: "Premium" },
      { type: "Pareja", price: "$890", tag: "Duo" },
      { type: "Estudiante", price: "$390", tag: "Scholar" },
      { type: "Restringido", price: "$350", tag: "Morning" },
      { type: "Semana", price: "$250", tag: "Short" },
      { type: "Visita", price: "$50", tag: "One Day" }
    ],
    services: ["Sauna", "Regaderas", "Amplia zona pesas", "Café gratuito"],
    phone: "55 9056 1942"
  },
  "tlapala": {
    name: "TLAPALA",
    latitude: 19.24251908592187,
    longitude: -98.84475999439935,
    dir: "Calle Allende MZ 1 LT 1, La Candelaria Tlapala.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales", "Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Sauna & Vapor", "Regaderas", "Lockers & Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Regular", price: "$390", tag: "Basic", benefits: ["Nutrióloga", "Coach", "Regaderas", "Lockers", "Vestidores", "Café gratis"] },
      { type: "Trimestre", price: "$1,090", tag: "3 Months", benefits: ["Regaderas", "Lockers", "Vestidores", "Café gratis", "Coach"] },
      { type: "Pareja", price: "$750", tag: "Duo", benefits: ["Regaderas", "Lockers", "Vestidores", "Café gratis", "Coach"] },
      { type: "Estudiante", price: "$330", tag: "Scholar", benefits: ["Regaderas", "Coach"] },
      { type: "Restringido", note: "11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Regaderas", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas"] }
    ],
    services: ["Sauna & Vapor", "Nutrióloga", "Lockers & Vestidores", "Coach Certificado", "Regaderas", "Café gratuito"],
    phone: "55 9714 5994"
  },
  "vallechalco": {
    name: "VALLE DE CHALCO",
    latitude: 19.278573892503037,
    longitude: -98.94230183013418,
    dir: "Av. Alfredo del Mazo #132, col. Jardín, Valle de Chalco.",
    hours: { week: "06:00 - 00:00", weekend: "08:00 - 20:00" },
    prices: [
      { type: "Anualidad", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales Gyman", "Sauna y Vapor", "Nutriólogo", "Regaderas", "Asesoría de Coach"] },
      { type: "VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales Gyman", "Sauna y Vapor", "Nutriólogo", "Regaderas", "Asesoría de Coach"] },
      { type: "Regular", price: "$390", tag: "Basic", benefits: ["Coach", "Cardio", "Regaderas", "Nutriólogo", "Café"] },
      { type: "Trimestre", price: "$1,090", tag: "3 Months", benefits: ["Pesas", "Cardio", "Coach", "Regaderas", "Nutriólogo", "Café"] },
      { type: "Pareja", price: "$750", tag: "Duo", benefits: ["Pesas", "Coach", "Cardio", "Regaderas", "Nutriólogo", "Café"] },
      { type: "Estudiante", price: "$330", tag: "Scholar", benefits: ["Coach", "Cardio", "Regaderas"] },
      { type: "Restringido", note: "12:00 pm a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Coach", "Cardio", "Regaderas"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Regaderas"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Coach", "Regaderas"] }
    ],
    services: ["Sauna & Vapor", "Nutriólogo", "Coach Certificado", "Regaderas", "Zona Cardio & Pesas", "Café gratuito"],
    phone: "55 9355 0633"
  },
  "valle2": {
    name: "VALLE II",
    latitude: 19.264725344569136,
    longitude: -98.95442311657987,
    dir: "Av Cuautemoc, San Miguel Xico 3ra sección, Valle de Chalco.",
    hours: { week: "06:00 - 22:00", weekend: "09:00 - 15:00" },
    prices: [
      { type: "Mensualidad VIP", price: "$550", tag: "Elite", benefits: ["Nutriólogo", "Entrenador", "Acceso a todas las sucursales", "Regadera", "Vapor", "Sauna", "Pesas / Cardio"] },
      { type: "Mensualidad Pareja", price: "$600", tag: "Duo", benefits: ["Regadera", "Nutriólogo", "Entrenador", "Acceso libre", "Pesas / Cardio"] },
      { type: "Mensualidad Hombre", price: "$350", tag: "Standard", benefits: ["Nutriólogo", "Regadera", "Entrenador", "Pesas / Cardio", "Acceso Libre"] },
      { type: "Mensualidad Mujer", price: "$200", tag: "Standard", benefits: ["Nutriólogo", "Regadera", "Entrenador", "Pesas / Cardio", "Acceso Libre"] },
      { type: "Estudiante", price: "$250", tag: "Scholar", benefits: ["Entrenador", "Regaderas", "Acceso libre", "Pesas / Cardio"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Regadera", "Entrenador", "Horario Libre", "Pesas / Cardio"] },
      { type: "Visita", price: "$50", tag: "One Day", benefits: ["Regadera", "Entrenador", "Pesas / Cardio"] }
    ],
    services: ["Sauna & Vapor", "Nutriólogo", "Entrenador Personal", "Regaderas", "Zona de Pesas & Cardio"],
    phone: "55 9716 7028"
  },
  "zapata": {
    name: "ZAPATA",
    latitude: 19.277266359117384,
    longitude: -98.88590887668781,
    dir: "Av Tierra y Libertad 120, Emiliano Zapata, Chalco.",
    hours: { week: "06:00 - 00:00", weekend: "08:00 - 21:00" },
    prices: [
      { type: "Anualidad VIP", price: "$4,200", tag: "Elite", benefits: ["Acceso a todas las sucursales", "Sauna", "Regaderas", "Lockers", "Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad VIP", price: "$550", tag: "Full", benefits: ["Acceso a todas las sucursales", "Sauna", "Regaderas", "Lockers", "Vestidores", "Nutriólogo", "Café gratis", "Coach"] },
      { type: "Mensualidad", price: "$490", tag: "Basic", benefits: ["Vestidores", "Lockers", "Regaderas", "Coach", "Café gratis"] },
      { type: "Trimestre", price: "$1,290", tag: "Quarter", benefits: ["Sauna", "Regaderas", "Lockers", "Vestidores", "Café gratis", "Coach"] },
      { type: "Pareja", price: "$890", tag: "Duo", benefits: ["Sauna", "Regaderas", "Lockers", "Vestidores", "Nutriólogo", "Café"] },
      { type: "Estudiante", note: "No mayor a 23 años con credencial vigente", price: "$390", tag: "Scholar", benefits: ["Regaderas", "Coach", "Vestidores", "Café gratis"] },
      { type: "Restringido", note: "Horario 11:00 am a 4:00 pm", price: "$290", tag: "Morning", benefits: ["Lockers", "Vestidores", "Café gratis", "Coach"] },
      { type: "Semana", price: "$150", tag: "Short", benefits: ["Coach", "Vestidores", "Café gratis", "Regaderas"] },
      { type: "Visita", note: "Presentar identificación oficial", price: "$50", tag: "One Day", benefits: ["Coach", "Vestidores"] }
    ],
    services: ["Sauna", "Coach Certificado", "Nutriólogo", "Lockers & Vestidores", "Regaderas", "Café gratuito"],
    phone: "55 8984 3169"
  },
  "gold": {
    name: "GOLD",
    latitude: 19.338939922594435,
    longitude: -99.13688498359929,
    dir: "Canal de Miramontes 1976, Col. Educación, Coyoacán. (Arriba de 3B)",
    hours: { week: "05:00 - 00:00", weekend: "08:00 - 21:00" },
    prices: [
      { type: "Inscripción", price: "$499", tag: "Pago Único", isHighlighted: true, benefits: ["Pase directo de ingreso", "Activación del sistema"] },
      { type: "Mensualidad", price: "$780", tag: "Elite", benefits: ["GyM", "Regaderas", "Coach", "Sauna", "Nutricionista", "Acceso a todas las sucursales"] },
      { type: "Anualidad", price: "$6,900", tag: "Platinum", benefits: ["GyM", "Regaderas", "Coach", "Sauna", "Nutricionista", "Acceso a todas las sucursales"] },
      { type: "Trimestre", price: "$1,990", tag: "Quarter", benefits: ["GyM", "Regaderas", "Coach"] },
      { type: "Pareja", price: "$1,350", tag: "Duo", benefits: ["GyM", "Regaderas", "Coach"] },
      { type: "Semana", note: "(no pagan inscripción)", price: "$290", tag: "Short", benefits: ["GyM", "Regaderas", "Coach", "(no pagan inscripción)"] },
      { type: "Visita", note: "(no pagan inscripción)", price: "$100", tag: "Single", benefits: ["GyM", "Regaderas", "Coach", "(no pagan inscripción)"] }
    ],
    services: ["GyM Tech-Zone", "Nutricionista Certificada", "Sauna & Vapor", "Regaderas Climatizadas", "Coach Master", "Acceso Total a Sucursales"]
  },
  "ecatepec": {
    name: "ECATEPEC",
    dir: "Citlaltépetl Manzana 632 Lote 18, Ciudad Azteca, 55120 Ecatepec de Morelos, Méx.",
    hours: { week: "05:00 - 00:00", weekend: "09:00 - 21:00" },
    benefitsNotice: "Al ser una sucursal de nueva apertura, próximamente añadiremos el desglose de los beneficios específicos de cada membresía.",
    prices: [
      { type: "Mensualidad VIP", price: "$550", tag: "Full" },
      { type: "Anualidad", price: "$2,490", tag: "Elite" },
      { type: "Trimestre", price: "$650", tag: "3 Months" },
      { type: "Pareja", price: "$450", tag: "Duo" }
    ],
    services: ["Regaderas & Lockers", "Coach Certificado", "Zona de Cardio", "Área de Pesas", "Café Gratuito"],
    phone: "55 9688 5412",
    latitude: 19.533625,
    longitude: -99.026718,
    maps_url: "https://maps.app.goo.gl/upJUZ3zWtxuBt9ZY6?g_st=ic"
  }
};
