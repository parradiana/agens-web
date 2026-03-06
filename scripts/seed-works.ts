import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN!,
  apiVersion: '2024-07-11',
  useCdn: false,
})

const BUCKET_BASE =
  'https://grilv9at0nnk.compat.objectstorage.sa-saopaulo-1.oraclecloud.com/AGENS-WEBSITE-ASSETS/assets'

function bucketUrl(path: string) {
  return `${BUCKET_BASE}/${path}`
}

const works = [
  // ════════════════════════════════════════
  // 1. CABIFY - SE JUNTAN LAS JUNTADAS
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'cabify-juntadas' },
    brand: 'Cabify',
    title: {
      es: 'Se juntan las juntadas',
      en: 'Se juntan las juntadas',
    },
    date: 'nov 2025 - Argentina',
    featured: true,
    order: 1,
    heroVideoUrl: bucketUrl('cabify-juntadas/hero-cabify-juntadas.mp4'),
    portadaUrl: bucketUrl('cabify-juntadas/portada-cabify-juntadas.webp'),
    previewUrl: bucketUrl('cabify-juntadas/preview-cabify-juntadas.webp'),
    racionalImageUrl: bucketUrl('cabify-juntadas/racional-cabify-juntadas.webp'),
    racionalText: {
      es: 'Cabify es la app de movilidad que incentiva los encuentros reales y presenciales. Por esto, con motivo de fin de año lanzó su campaña "Se juntan las juntadas"\nPartiendo de un insight real que es que cuando llega fin de año las personas solemos aceptar más juntadas de las que podemos ir a presenciar.',
      en: 'Cabify is a mobility app that encourages real, in-person connections. For this reason, at the end of the year it launched the campaign "When meetups come together."\n\nBased on a real insight: when the end of the year arrives, people tend to accept more social gatherings than they can actually attend.',
    },
    quote: {
      es: '"Si se juntan las juntadas, andá en Cabify"',
      en: '"If the meetups come together, go with Cabify."',
    },
    galeriaUrls: [
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-1.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-2.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-3.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-4.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-5.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-6.webp'),
      bucketUrl('cabify-juntadas/galeria-cabify-juntadas-7.webp'),
    ],
    stillsUrls: [
      bucketUrl('cabify-juntadas/still-cabify-juntadas-1.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-2.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-3.webp'),
      bucketUrl('cabify-juntadas/still-cabify-juntadas-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'cj01', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'cj02', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'cj03', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Kiara Vescio & Ian Engstfeld' },
      { _key: 'cj04', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'cj05', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'cj06', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'cj07', role: { es: 'Productora', en: 'Production Company' }, names: 'Austria' },
      { _key: 'cj08', role: { es: 'Director', en: 'Director' }, names: 'Sebastián Sánchez' },
      { _key: 'cj09', role: { es: 'Productor ejecutivo', en: 'Executive Producer' }, names: 'Juan Manuel Menvielle' },
      { _key: 'cj10', role: { es: 'Productor', en: 'Producer' }, names: 'Tomas Morello' },
      { _key: 'cj11', role: { es: 'Directora de fotografía', en: 'Director of Photography' }, names: 'Florencia Mamberti' },
      { _key: 'cj12', role: { es: 'Editor', en: 'Editor' }, names: 'Carolina Grgurevic' },
      { _key: 'cj13', role: { es: 'Post Productor', en: 'Post Producer' }, names: 'Ignacio Parodis' },
      { _key: 'cj14', role: { es: 'Color', en: 'Colorist' }, names: 'Roy Bermudez' },
      { _key: 'cj15', role: { es: 'Sonido', en: 'Sound' }, names: 'TDL' },
      { _key: 'cj16', role: { es: 'Banda', en: 'Band' }, names: 'TDL' },
      { _key: 'cj17', role: { es: 'Responsable por cliente', en: 'Client Leads' }, names: 'Florencia Sassone & Julieta Alemandi' },
    ],
  },

  // ════════════════════════════════════════
  // 2. ORAL-B - CAMBIAME
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'oralb-cambiame' },
    brand: 'Oral-B',
    title: {
      es: 'Cambiame',
      en: 'Cambiame',
    },
    date: 'dic 2025 - Argentina',
    featured: true,
    order: 2,
    heroVideoUrl: bucketUrl('oralb-cambiame/hero-oralb-cambiame.mp4'),
    portadaUrl: bucketUrl('oralb-cambiame/portada-oralb-cambiame.webp'),
    previewUrl: bucketUrl('oralb-cambiame/preview-oralb-cambiame.webp'),
    racionalImageUrl: bucketUrl('oralb-cambiame/racional-oralb-cambiame.webp'),
    racionalText: {
      es: 'Según distintos estudios, la mayoría de las personas no sabe cuándo debe cambiar su cepillo de dientes y termina usándolo más tiempo del recomendado, poniendo en riesgo su salud bucal.\n\nPor suerte, Oral-B desarrolló un cepillo con una tecnología única que te avisa exactamente cuándo es momento de cambiarlo.\n\nPara comunicarlo, creamos una campaña donde los verdaderos protagonistas son los cepillos gastados, que en un musical tan absurdo como inolvidable, le cantan a la gente que ya es hora de dejarlos ir.',
      en: 'According to several studies, most people don\'t know when they should change their toothbrush and end up using it longer than recommended, putting their oral health at risk.\n\nFortunately, Oral-B developed a toothbrush with a unique technology that tells you exactly when it\'s time to change it.\n\nTo communicate this, we created a campaign where the real protagonists are worn-out toothbrushes that, in a musical as absurd as it is unforgettable, sing to people that it\'s time to let them go.',
    },
    quote: {
      es: '"Al fin volvieron los jingles que uno quiere cantar" — usuario Instagram',
      en: '"At last, the jingles you actually want to sing are back." — Instagram user',
    },
    galeriaUrls: [] as string[],
    stillsUrls: [
      bucketUrl('oralb-cambiame/still-oralb-cambiame-1.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-2.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-3.webp'),
      bucketUrl('oralb-cambiame/still-oralb-cambiame-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'ob01', role: { es: 'CEO & Partner', en: 'CEO & Partner' }, names: 'Marcelo Romeo' },
      { _key: 'ob02', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'ob03', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'ob04', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Kiara Vescio & Ian Engstfeld' },
      { _key: 'ob05', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'ob06', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'ob07', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'ob08', role: { es: 'Productora audiovisual', en: 'Production Company' }, names: 'Flamboyant Paradise' },
      { _key: 'ob09', role: { es: 'Director', en: 'Director' }, names: 'Javier Lourenço' },
      { _key: 'ob10', role: { es: 'Head Production', en: 'Head Production' }, names: 'Julia M. Novío' },
      { _key: 'ob11', role: { es: 'Productor Ejecutivo', en: 'Executive Producer' }, names: 'Javier Lourenço' },
      { _key: 'ob12', role: { es: 'AI Artists', en: 'AI Artists' }, names: 'Emilia Pérez Quinteros, Hernán Aguilar, Percy Bustos' },
      { _key: 'ob13', role: { es: 'Digital Retouch', en: 'Digital Retouch' }, names: 'Diego Beyró' },
      { _key: 'ob14', role: { es: 'Editor', en: 'Editor' }, names: 'Javier Lourenço' },
      { _key: 'ob15', role: { es: 'Composite', en: 'Composite' }, names: 'Octavio Nessi' },
      { _key: 'ob16', role: { es: 'Banda y SFX', en: 'Band & SFX' }, names: 'Papamusic' },
      { _key: 'ob17', role: { es: 'Locutor', en: 'Voiceover' }, names: 'Nacho Gagliano' },
      { _key: 'ob18', role: { es: 'Responsable por cliente', en: 'Client Leads' }, names: 'Leandro Donoso, Romina Fernández, Kevin Mcgibbon, Camila Deretich, Candelaria Gimenez & Tadeo Silva' },
    ],
  },

  // ════════════════════════════════════════
  // 3. PHILCO - LAS 4 PUERTAS (HELADERA)
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'philco-heladera' },
    brand: 'Philco',
    title: {
      es: 'Las 4 puertas hacia el orden interior',
      en: 'Las 4 puertas hacia el orden interior',
    },
    date: 'ene 2026 - Argentina',
    featured: true,
    order: 3,
    heroVideoUrl: bucketUrl('philco-heladera/hero-philco-heladera.mp4'),
    portadaUrl: bucketUrl('philco-heladera/portada-philco-heladera.webp'),
    previewUrl: bucketUrl('philco-heladera/preview-philco-heladera.webp'),
    racionalImageUrl: bucketUrl('philco-heladera/racional-philco-heladera.webp'),
    racionalText: {
      es: 'Philco lanzaba su nueva heladera side by side de 4 puertas, diseñada para ayudarte a ordenar mejor. Para comunicarlo, elegimos a Joaquín Levinton, probablemente una de las personas más desordenadas del país.\n\nPero no lo hicimos de la forma tradicional: lanzamos una noticia falsa en redes donde Joaquín anunciaba su propio libro de autoayuda, "Las 4 puertas hacia el orden interior".\n\nLa noticia se viralizó rápidamente… hasta que revelamos que, en realidad, se trataba del lanzamiento de la nueva heladera de Philco.',
      en: 'Philco was launching its new four-door side-by-side refrigerator, designed to help people organize better. To communicate this, we chose Joaquín Levinton, probably one of the most disorganized people in the country.\n\nBut we didn\'t do it the traditional way: we released fake news on social media where Joaquín announced his own self-help book, "The Four Doors to Inner Order."\n\nThe news quickly went viral… until we revealed that it was actually the launch of Philco\'s new refrigerator.',
    },
    quote: {
      es: '"Joaquín Levinton anuncia un libro y sorprende con una faceta inédita" — Diario Crónica',
      en: '"Joaquín Levinton announces a book and surprises with an unexpected side." — Crónica Newspaper',
    },
    galeriaUrls: [
      bucketUrl('philco-heladera/galeria-philco-heladera-1.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-2.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-3.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-4.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-5.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-6.webp'),
      bucketUrl('philco-heladera/galeria-philco-heladera-7.webp'),
    ],
    stillsUrls: [
      bucketUrl('philco-heladera/still-philco-heladera-1.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-2.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-3.webp'),
      bucketUrl('philco-heladera/still-philco-heladera-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'ph01', role: { es: 'CEO & Partner', en: 'CEO & Partner' }, names: 'Marcelo Romeo' },
      { _key: 'ph02', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'ph03', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'ph04', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Kiara Vescio & Ian Engstfeld' },
      { _key: 'ph05', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'ph06', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'ph07', role: { es: 'UGC Coordinator', en: 'UGC Coordinator' }, names: 'José Aly Berrios' },
      { _key: 'ph08', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'ph09', role: { es: 'Productora', en: 'Production Company' }, names: 'MALO™CASA PRODUCTORA' },
      { _key: 'ph10', role: { es: 'Director', en: 'Director' }, names: 'Germán Gugliara' },
      { _key: 'ph11', role: { es: 'Productor ejecutivo', en: 'Executive Producer' }, names: 'Juan Pedro Justel Seguy' },
      { _key: 'ph12', role: { es: 'Directora de fotografía', en: 'Director of Photography' }, names: 'Daniel Ring' },
      { _key: 'ph13', role: { es: 'Fotografía fija', en: 'Still Photography' }, names: 'Brau Perez Martí' },
      { _key: 'ph14', role: { es: 'Responsable por cliente', en: 'Client Leads' }, names: 'Pablo Barat, Mauro Caggiano, Nicolás Guttelson' },
    ],
  },

  // ════════════════════════════════════════
  // 4. CABIFY - POOLHUNTERS
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'cabify-poolhunters' },
    brand: 'Cabify',
    title: {
      es: 'Pool Hunters',
      en: 'Pool Hunters',
    },
    date: 'dic 2025 - Argentina',
    featured: true,
    order: 4,
    heroVideoUrl: bucketUrl('cabify-poolhunters/hero-cabify-poolhunters.mp4'),
    portadaUrl: bucketUrl('cabify-poolhunters/portada-cabify-poolhunters.webp'),
    previewUrl: bucketUrl('cabify-poolhunters/preview-cabify-poolhunters.webp'),
    racionalImageUrl: bucketUrl('cabify-poolhunters/racional-cabify-poolhunters.webp'),
    racionalText: {
      es: 'Cuando llega el verano, el calor se vuelve insoportable y no todos tenemos pileta.\nAsí nació Poolhunters, una serie de contenidos que muestran hasta dónde puede llegar alguien con tal de escapar del calor, integrando a Cabify como facilitador del destino más deseado del verano: la casa del amigo con pileta.',
      en: 'When summer arrives, the heat becomes unbearable and not everyone has a pool.\n\nThat\'s how Poolhunters was born: a content series that shows how far someone can go to escape the heat, integrating Cabify as the facilitator to reach the most desired summer destination — the friend\'s house with a pool.',
    },
    quote: {
      es: '"Si hay un amigo con pileta tenés que estar ahí y si vas en Cabify es mejor"',
      en: '"If there\'s a friend with a pool, you have to be there — and going by Cabify is even better."',
    },
    galeriaUrls: [] as string[],
    stillsUrls: [
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-1.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-2.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-3.webp'),
      bucketUrl('cabify-poolhunters/still-cabify-poolhunters-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'cp01', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'cp02', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'cp03', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Kiara Vescio & Ian Engstfeld' },
      { _key: 'cp04', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'cp05', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'cp06', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'cp07', role: { es: 'Director', en: 'Director' }, names: 'Rubén Troilo' },
      { _key: 'cp08', role: { es: 'Banda y SFX', en: 'Band & SFX' }, names: 'Papamusic' },
      { _key: 'cp09', role: { es: 'Locución', en: 'Voiceover' }, names: 'Pedro Labattaglia' },
      { _key: 'cp10', role: { es: 'Responsable por cliente', en: 'Client Leads' }, names: 'Florencia Sassone & Julieta Alemandi' },
    ],
  },

  // ════════════════════════════════════════
  // 5. PHILCO - UN AIRE BAJO EL BRAZO
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'philco-aire' },
    brand: 'Philco',
    title: {
      es: 'Un aire bajo el brazo',
      en: 'Un aire bajo el brazo',
    },
    date: 'ene 2026 - Argentina',
    featured: true,
    order: 5,
    heroVideoUrl: bucketUrl('philco-aire/hero-philco-aire.mp4'),
    portadaUrl: bucketUrl('philco-aire/portada-philco-aire.webp'),
    previewUrl: bucketUrl('philco-aire/preview-philco-aire.webp'),
    racionalImageUrl: bucketUrl('philco-aire/racional-philco-aire.webp'),
    racionalText: {
      es: 'El verano en Argentina puede ser implacable. El calor extremo afecta a todos, pero según un estudio científico de la Universidad de Harvard, los recién nacidos son quienes más lo padecen. Por eso creamos una promoción pensada especialmente para quienes esperan un hijo en la época más calurosa del año: porque si cada bebé viene con un pan bajo el brazo, este verano vienen con un aire bajo el brazo.',
      en: 'Summer in Argentina can be relentless. Extreme heat affects everyone, but according to a scientific study by Harvard University, newborns suffer the most.\n\nThat\'s why we created a promotion especially designed for those expecting a baby during the hottest time of the year: because if every baby comes with a loaf of bread under their arm, this summer they come with an AC under their arm.',
    },
    quote: {
      es: '"30% de descuento para quienes estén esperando un hijo en verano"',
      en: '"30% off for those expecting a baby during summer."',
    },
    galeriaUrls: [] as string[],
    stillsUrls: [
      bucketUrl('philco-aire/still-philco-aire-1.webp'),
      bucketUrl('philco-aire/still-philco-aire-2.webp'),
      bucketUrl('philco-aire/still-philco-aire-3.webp'),
      bucketUrl('philco-aire/still-philco-aire-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'pa01', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'pa02', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'pa03', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Sofía Luque & Santiago Ameijeiras' },
      { _key: 'pa04', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'pa05', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'pa06', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'pa07', role: { es: 'Head of Brands & Social Media', en: 'Head of Brands & Social Media' }, names: 'Agustina Arrossagaray' },
      { _key: 'pa08', role: { es: 'UGC Coordinator', en: 'UGC Coordinator' }, names: 'José Aly Berrios' },
      { _key: 'pa09', role: { es: 'AI Director', en: 'AI Director' }, names: 'Rubén Troilo' },
      { _key: 'pa10', role: { es: 'Editor', en: 'Editor' }, names: 'Nacho Parodis' },
      { _key: 'pa11', role: { es: 'Banda y SFX', en: 'Sound & SFX' }, names: 'Papamusic' },
      { _key: 'pa12', role: { es: 'Responsable por cliente', en: 'Client Leads' }, names: 'Diego Gorali, Pablo Barat, Mauro Caggiano, Nicolás Guttelson y Sol Alaniz' },
    ],
  },

  // ════════════════════════════════════════
  // 6. ATMA - ENAMORADOZZZ
  // ════════════════════════════════════════
  {
    _type: 'work',
    slug: { _type: 'slug', current: 'atma-enamoradozzz' },
    brand: 'Atma',
    title: {
      es: 'Enamoradozzz',
      en: 'Enamoradozzz',
    },
    date: 'feb 2026 - Argentina',
    featured: true,
    order: 6,
    heroVideoUrl: bucketUrl('atma-enamoradozzz/hero-atma-enamoradozzz.mp4'),
    portadaUrl: bucketUrl('atma-enamoradozzz/portada-atma-enamoradozzz.webp'),
    previewUrl: bucketUrl('atma-enamoradozzz/preview-atma-enamoradozzz.webp'),
    racionalImageUrl: bucketUrl('atma-enamoradozzz/racional-atma-enamoradozzz.webp'),
    racionalText: {
      es: 'Para el Día de los Enamorados, ATMA tomó como punto de partida un dato real: según estudios del Centro de Psiquiatría Integrativa (ZIP) de Alemania, la cercanía con la persona de la que estamos enamorados estimula la liberación de oxitocina, una hormona vinculada al bienestar y a la inducción del sueño.\n\nUn insight tan romántico como cotidiano: cuando estamos enamorados, es muy probable que uno de los dos termine quedándose dormido.\n\nEn vez de verlo como un problema —la serie que queda a medias, la charla que se corta— lo transformamos en celebración. Así nació Enamoradozzz: una promoción que invitaba a fotografiar a tu pareja dormida y participar por descuentos en colchones ATMA.\n\nPorque si el amor da sueño, que sea sobre el mejor colchón.',
      en: 'For Valentine\'s Day, ATMA started from a real fact: according to studies by the Center for Integrative Psychiatry (ZIP) in Germany, being close to the person we\'re in love with stimulates the release of oxytocin, a hormone linked to well-being and the induction of sleep.\n\nA truth that\'s as romantic as it is relatable: when we\'re in love, chances are one of the two will end up falling asleep.\n\nInstead of seeing it as a problem — the series left unfinished, the conversation that gets cut short — we turned it into a celebration. That\'s how Enamoradozzz was born: a promotion inviting people to photograph their partner asleep and enter for a chance to win discounts on ATMA mattresses.\n\nBecause if love makes you sleepy, it might as well be on the best mattress.',
    },
    quote: {
      es: '"Una promo que convierte el amor en descuentos"',
      en: '"A promo that turns love into discounts"',
    },
    galeriaUrls: [] as string[],
    stillsUrls: [
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-1.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-2.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-3.webp'),
      bucketUrl('atma-enamoradozzz/still-atma-enamoradozzz-4.webp'),
    ],
    fichaTecnica: [
      { _key: 'ae01', role: { es: 'CCOs & Partners', en: 'CCOs & Partners' }, names: 'Nicolás Zarlenga & Federico Plaza Montero' },
      { _key: 'ae02', role: { es: 'Executive Creative Directors', en: 'Executive Creative Directors' }, names: 'Ezequiel Irureta & Sergio Rio León' },
      { _key: 'ae03', role: { es: 'Equipo creativo', en: 'Creative Team' }, names: 'Manuel Pedroso, Benjamín Tesei & Matías Rubira' },
      { _key: 'ae04', role: { es: 'Coordinadora de cuentas', en: 'Account Coordinator' }, names: 'Ivana Benozzi' },
      { _key: 'ae05', role: { es: 'Diseñadora gráfica creativa', en: 'Creative Graphic Designer' }, names: 'Chiara Zoe Bourlot' },
      { _key: 'ae06', role: { es: 'Productor', en: 'Producer' }, names: 'Sebastián "Chiqui" Suarez' },
      { _key: 'ae07', role: { es: 'Head of Brands & Social Media', en: 'Head of Brands & Social Media' }, names: 'Agustina Arrossagaray' },
      { _key: 'ae08', role: { es: 'UGC Coordinator', en: 'UGC Coordinator' }, names: 'José Aly Berrios' },
      { _key: 'ae09', role: { es: 'CM', en: 'CM' }, names: 'Azul Romeo' },
      { _key: 'ae10', role: { es: 'AI Director', en: 'AI Director' }, names: 'Rubén Troilo' },
      { _key: 'ae11', role: { es: 'Editor', en: 'Editor' }, names: 'Ignacio Parodis' },
      { _key: 'ae12', role: { es: 'Banda y SFX', en: 'Music & SFX' }, names: 'Papamusic' },
      { _key: 'ae13', role: { es: 'Locutor', en: 'Voiceover' }, names: 'Nacho Gagliano' },
      { _key: 'ae14', role: { es: 'Responsable por cliente', en: 'Client Representatives' }, names: 'Ernesto San Martín, María Belén Parodi y Javier Alonso Idarraga' },
    ],
  },
]

async function seed() {
  console.log('Iniciando seed de trabajos...\n')

  for (const work of works) {
    try {
      const result = await client.create(work)
      console.log(`  [${work.brand}] ${work.title.es} -> ${result._id}`)
    } catch (error) {
      console.error(`  Error en [${work.brand}] ${work.title.es}:`, error)
    }
  }

  console.log('\nSeed completado! 6 trabajos creados.')
}

seed()
