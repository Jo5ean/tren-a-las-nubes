// Contenido mock centralizado para la Home. Material referencial (ver nota legal).

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'La experiencia', href: '#experiencia' },
  { label: 'Recorrido', href: '#recorrido' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Recomendaciones', href: '#recomendaciones' },
  { label: 'Contacto', href: '#contacto' },
];

export const languages = ['ES', 'EN', 'PT'] as const;

export type Highlight = { value: string; label: string };

export const highlights: Highlight[] = [
  { value: '4.220', label: 'metros sobre el nivel del mar' },
  { value: '3º', label: 'tren más alto del mundo' },
  { value: '217 m', label: 'de largo en el Viaducto La Polvorilla' },
];

export type Stop = { time: string; place: string; description: string };

export const itinerary: Stop[] = [
  { time: '06:15', place: 'Estación de Trenes Salta', description: 'Check-in en Plazoleta Antofagasta.' },
  { time: '07:35', place: 'Campo Quijano', description: 'Parada fotográfica al pie de la quebrada.' },
  { time: '08:55', place: 'Formación Yacoraite', description: 'Paisaje geológico de la Puna.' },
  { time: '09:25', place: 'El Alfarcito', description: 'Desayuno campestre y recorrido.' },
  { time: '11:40', place: 'San Antonio de los Cobres', description: 'Transbordo al tren turístico.' },
  { time: '13:00', place: 'Viaducto La Polvorilla', description: 'Llegada y descenso de visita.' },
  { time: '17:20', place: 'Santa Rosa de Tastil', description: 'Parada técnica y merienda.' },
];

export type Fare = {
  category: string;
  busTrenBus: string;
  soloTren: string;
};

export const fares: Fare[] = [
  { category: 'Extranjero', busTrenBus: '$ 215.000', soloTren: '$ 165.000' },
  { category: 'Extranjero menor', busTrenBus: '$ 150.000', soloTren: '$ 115.000' },
  { category: 'Residente argentino', busTrenBus: '$ 165.000', soloTren: '$ 125.000' },
  { category: 'Residente menor', busTrenBus: '$ 115.000', soloTren: '$ 90.000' },
  { category: 'Jubilado', busTrenBus: '$ 140.000', soloTren: '$ 105.000' },
];

export type Recommendation = { title: string; description: string };

export const recommendations: Recommendation[] = [
  { title: 'Abrigo en capas', description: 'La temperatura varía con la altura; conviene vestirse por capas.' },
  { title: 'Hidratación', description: 'Beber agua con frecuencia ayuda a sobrellevar la altura.' },
  { title: 'Protección solar', description: 'La radiación es intensa en la Puna durante todo el año.' },
  { title: 'Puntualidad', description: 'El check-in cierra a horario; conviene llegar con tiempo.' },
  { title: 'Consulta médica', description: 'Si tenés condiciones preexistentes, consultá antes del viaje.' },
  { title: 'Clima cambiante', description: 'La excursión puede ajustarse por condiciones de alta montaña.' },
];

// URLs de imágenes públicas usadas como material referencial.
export const media = {
  hero: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/04/DSC8065-fijas.png',
  experience: 'https://trenalasnubes.com.ar/wp-content/uploads/2019/11/CMV_4574_Snapseed.jpg',
  gallery1: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/04/21.png',
  gallery2: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/04/15.png',
  sanAntonio: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/05/tan_atracciones_SAC.jpg',
  mercado: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/05/tan_atracciones_mercado.jpg',
  manosDeBarro: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/05/tan_atracciones_manosdebarro.jpg',
  iglesia: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/05/tan_atracciones_iglesia.jpg',
  museo: 'https://trenalasnubes.com.ar/wp-content/uploads/2021/05/tan_atracciones_museo.jpg',
};

// Enlace oficial de WhatsApp detectado en el sitio (material referencial).
export const whatsapp = {
  href: 'https://api.whatsapp.com/send?phone=543875104892&text=Quiero+comprar+pasajes+para+el+tren+m%C3%A1s+asombroso+del+mundo%21',
  hours: 'Lun a Vie de 8 a 20 h · Sáb de 9 a 15 h',
};

export type InstagramPost = {
  id: string;
  type: 'reel' | 'post';
  title: string;
  url: string;
  image: string;
};

export const instagramProfile = 'https://www.instagram.com/trenalasnubesoficial/';

export const instagramPosts: InstagramPost[] = [
  { id: 'ig-01', type: 'reel', title: 'Experiencia Tren a las Nubes', url: 'https://www.instagram.com/reel/DZzq1f0Emc3/', image: media.hero },
  { id: 'ig-02', type: 'reel', title: 'Paisajes de altura', url: 'https://www.instagram.com/reel/DZv1MjuAWxH/', image: media.gallery1 },
  { id: 'ig-03', type: 'reel', title: 'Momentos del recorrido', url: 'https://www.instagram.com/reel/DZqgowgDQF2/', image: media.experience },
  { id: 'ig-04', type: 'reel', title: 'Viví la experiencia', url: 'https://www.instagram.com/reel/DZXbcNyD9OI/', image: media.gallery2 },
  { id: 'ig-05', type: 'post', title: 'Postal del viaje', url: 'https://www.instagram.com/p/DYUqgXdlj8X/', image: media.sanAntonio },
  { id: 'ig-06', type: 'reel', title: 'La Puna salteña', url: 'https://www.instagram.com/reel/DYkvTvtAQXP/', image: media.mercado },
  { id: 'ig-07', type: 'reel', title: 'Recorrido turístico', url: 'https://www.instagram.com/reel/DYP8g7xFQ2u/', image: media.manosDeBarro },
  { id: 'ig-08', type: 'post', title: 'Tren y paisaje', url: 'https://www.instagram.com/p/DYH_LVLEzuO/', image: media.iglesia },
  { id: 'ig-09', type: 'post', title: 'Cultura andina', url: 'https://www.instagram.com/p/DYUqgXdlj8X/', image: media.museo },
];

// Relato de la experiencia entrelazado con los reels de cada momento.
export type ExperienceMoment = {
  eyebrow: string;
  title: string;
  description: string;
  reelIds: string[];
};

export const experienceStory: ExperienceMoment[] = [
  {
    eyebrow: 'El comienzo',
    title: 'Salida desde Salta, rumbo a la altura',
    description:
      'El día arranca temprano en la ciudad. Un tramo en colectivo atraviesa el valle de Lerma y la Quebrada del Toro, mientras el paisaje se vuelve cada vez más imponente.',
    reelIds: ['ig-01', 'ig-03'],
  },
  {
    eyebrow: 'Alta montaña',
    title: 'San Antonio de los Cobres y el ascenso en tren',
    description:
      'En San Antonio de los Cobres se hace el transbordo al tren turístico. Desde allí, la formación sube gradualmente hasta los 4.220 msnm acompañada por personal capacitado.',
    reelIds: ['ig-02', 'ig-06'],
  },
  {
    eyebrow: 'El ícono',
    title: 'El Viaducto La Polvorilla',
    description:
      'La llegada al Viaducto La Polvorilla es el momento más esperado: 224 metros de largo y 63 de alto, una proeza de la ingeniería ferroviaria suspendida sobre la Puna.',
    reelIds: ['ig-04', 'ig-07'],
  },
  {
    eyebrow: 'Paisaje y cultura',
    title: 'Pueblos andinos y gastronomía regional',
    description:
      'El regreso reserva tiempo para fotografiar, caminar y disfrutar la cultura andina: mercados, artesanías y la calidez de los pueblos de altura.',
    reelIds: ['ig-05', 'ig-09'],
  },
];

export const contact = {
  address: 'Ameghino 660 — Estación Central de Trenes, Salta, Argentina',
  postal: 'A4400CRL',
  phone: '0800 888 NUBE (6823)',
  email: 'ventas@trenalasnubes.com.ar',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/trenalasnubesoficial/' },
    { label: 'Facebook', href: 'https://www.facebook.com/trenalasnubesOficial/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCa9wf_PqKuMUQiT1wiPAhwg' },
  ],
};
