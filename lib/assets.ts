/**
 * Centralized asset URLs for the OCI S3-compatible bucket.
 *
 * Work/portfolio assets are also listed here as a reference manifest,
 * but will be loaded via Sanity CMS in production.
 */

const BUCKET_BASE =
  'https://grilv9at0nnk.compat.objectstorage.sa-saopaulo-1.oraclecloud.com/AGENS-WEBSITE-ASSETS/assets';

/** Build a full bucket URL from a path relative to assets/ */
export function bucketUrl(path: string): string {
  return `${BUCKET_BASE}/${path}`;
}

/* ── Home ──────────────────────────────────────────────────────── */

export const HERO_REEL_VIDEO = bucketUrl('hero-reel-home.mp4');

/* ── Loading ───────────────────────────────────────────────────── */

export const VIDEO_LOADING_GIF = bucketUrl('loading/video-loading.gif');

/* ── Client Logos ──────────────────────────────────────────────── */

export const CLIENT_LOGOS = [
  { name: 'Pantene', src: bucketUrl('logos-clientes/client-pantene.png') },
  { name: 'Vick', src: bucketUrl('logos-clientes/client-vick.png') },
  { name: 'Pampers', src: bucketUrl('logos-clientes/client-pampers.png') },
  { name: 'Philco', src: bucketUrl('logos-clientes/client-philco.png') },
  { name: 'Noblex', src: bucketUrl('logos-clientes/client-noblex.png') },
  { name: 'Cabify', src: bucketUrl('logos-clientes/client-cabify.png') },
  { name: 'Oral-B', src: bucketUrl('logos-clientes/client-oralb.png') },
  { name: 'Siam Motos', src: bucketUrl('logos-clientes/client-siammotos.png') },
  { name: 'OPPO', src: bucketUrl('logos-clientes/client-oppo.png') },
  { name: 'H&S', src: bucketUrl('logos-clientes/client-h&s.png') },
  { name: 'Gillette', src: bucketUrl('logos-clientes/client-gillette.png') },
  { name: 'Always', src: bucketUrl('logos-clientes/client-always.png') },
  { name: 'Herbal Essences', src: bucketUrl('logos-clientes/client-herbal.png') },
  { name: 'Venus', src: bucketUrl('logos-clientes/client-venus.png') },
  { name: 'Bosch', src: bucketUrl('logos-clientes/client-bosch.png') },
  { name: 'Cher', src: bucketUrl('logos-clientes/client-cher.png') },
  { name: 'Allure', src: bucketUrl('logos-clientes/client-allure.png') },
  { name: 'Fixodent', src: bucketUrl('logos-clientes/client-fixodent.png') },
  { name: 'Downy', src: bucketUrl('logos-clientes/client-downy.png') },
  { name: 'ATMA', src: bucketUrl('logos-clientes/client-atma.png') },
  { name: 'Mariacher', src: bucketUrl('logos-clientes/client-mariacher.png') },
] as const;

/* ── Work / Portfolio Assets ──────────────────────────────────── */

export const WORKS_ASSETS = {
  'atma-enamoradozzz': {
    hero: bucketUrl('atma-enamoradozzz/hero-atma-enamoradozzz.mp4'),
    portada: bucketUrl('atma-enamoradozzz/portada-atma-enamoradozzz.webp'),
    preview: bucketUrl('atma-enamoradozzz/preview-atma-enamoradozzz.webp'),
    racional: bucketUrl('atma-enamoradozzz/racional-atma-enamoradozzz.webp'),
    stills: [
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-1.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-2.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-3.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-4.webp'),
    ],
  },
  'cabify-juntadas': {
    hero: bucketUrl('cabify-juntadas/hero-cabify-juntadas.mp4'),
    portada: bucketUrl('cabify-juntadas/portada-cabify-juntadas.webp'),
    preview: bucketUrl('cabify-juntadas/preview-cabify-juntadas.webp'),
    racional: bucketUrl('cabify-juntadas/racional-cabify-juntadas.webp'),
    stills: [
      bucketUrl('cabify-juntadas/still-cabify-juntadas-1.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-2.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-3.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-4.webp'),
    ],
    galeria: [
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-1.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-2.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-3.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-4.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-5.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-6.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-7.webp'),
    ],
  },
  'cabify-poolhunters': {
    hero: bucketUrl('cabify-poolhunters/hero-cabify-poolhunters.mp4'),
    portada: bucketUrl('cabify-poolhunters/portada-cabify-poolhunters.webp'),
    preview: bucketUrl('cabify-poolhunters/preview-cabify-poolhunters.webp'),
    racional: bucketUrl('cabify-poolhunters/racional-cabify-poolhunters.webp'),
    stills: [
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-1.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-2.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-3.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-4.webp'),
    ],
  },
  'oralb-cambiame': {
    hero: bucketUrl('oralb-cambiame/hero-oralb-cambiame.mp4'),
    portada: bucketUrl('oralb-cambiame/portada-oralb-cambiame.webp'),
    preview: bucketUrl('oralb-cambiame/preview-oralb-cambiame.webp'),
    racional: bucketUrl('oralb-cambiame/racional-oralb-cambiame.webp'),
    stills: [
      bucketUrl('oralb-cambiame/still-oralb-cambiame-1.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-2.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-3.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-4.webp'),
    ],
  },
  'philco-aire': {
    hero: bucketUrl('philco-aire/hero-philco-aire.mp4'),
    portada: bucketUrl('philco-aire/portada-philco-aire.webp'),
    preview: bucketUrl('philco-aire/preview-philco-aire.webp'),
    racional: bucketUrl('philco-aire/racional-philco-aire.webp'),
    stills: [
      bucketUrl('philco-aire/still-philco-aire-1.webp'),
      bucketUrl('philco-aire/still-philco-aire-2.webp'),
      bucketUrl('philco-aire/still-philco-aire-3.webp'),
      bucketUrl('philco-aire/still-philco-aire-4.webp'),
    ],
  },
  'philco-heladera': {
    hero: bucketUrl('philco-heladera/hero-philco-heladera.mp4'),
    portada: bucketUrl('philco-heladera/portada-philco-heladera.webp'),
    preview: bucketUrl('philco-heladera/preview-philco-heladera.webp'),
    racional: bucketUrl('philco-heladera/racional-philco-heladera.webp'),
    stills: [
      bucketUrl('philco-heladera/still-philco-heladera-1.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-2.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-3.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-4.webp'),
    ],
    galeria: [
      bucketUrl('philco-heladera/galeria-philco-heladera-1.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-2.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-3.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-4.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-5.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-6.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-7.webp'),
    ],
  },
} as const;
