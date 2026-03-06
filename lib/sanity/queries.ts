import { groq } from 'next-sanity'

// Home - trabajos destacados para la grilla
export const FEATURED_WORKS_QUERY = groq`
  *[_type == "work" && featured == true] | order(order asc) {
    "slug": slug.current,
    brand,
    title,
    portadaUrl,
    previewUrl
  }
`

// /works - listado completo
export const ALL_WORKS_QUERY = groq`
  *[_type == "work"] | order(order asc) {
    "slug": slug.current,
    brand,
    title,
    previewUrl
  }
`

// /works/[id] - detalle completo de un trabajo
export const WORK_DETAIL_QUERY = groq`
  *[_type == "work" && slug.current == $slug][0] {
    "slug": slug.current,
    brand,
    title,
    date,
    heroVideoUrl,
    portadaUrl,
    racionalImageUrl,
    racionalText,
    quote,
    galeriaUrls,
    stillsUrls,
    fichaTecnica[] {
      _key,
      role,
      names
    }
  }
`

// Para el footer/nav del detalle: otros trabajos (excluyendo el actual)
export const OTHER_WORKS_QUERY = groq`
  *[_type == "work" && slug.current != $slug] | order(order asc) {
    "slug": slug.current,
    brand,
    title,
    previewUrl
  }
`

// Todos los slugs (para generateStaticParams)
export const WORK_SLUGS_QUERY = groq`
  *[_type == "work" && defined(slug.current)] {
    "slug": slug.current
  }
`

// Page por slug
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    body,
    seo
  }
`
