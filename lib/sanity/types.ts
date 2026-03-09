/* ── Shared primitives ─────────────────────────────────────── */

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanitySeo {
  metaTitle?: string
  metaDescription?: string
}

export interface LocalizedString {
  es: string
  en: string
}

export interface LocalizedText {
  es: string
  en: string
}

export interface Credit {
  _key: string
  role: LocalizedString
  names: string
}

/* ── Full Work document ────────────────────────────────────── */

export interface Work {
  slug: string
  brand: string
  title: LocalizedString
  date?: string
  featured?: boolean
  order?: number
  heroVideoUrl?: string
  portadaUrl?: string
  previewUrl?: string
  racionalImageUrl?: string
  racionalText?: LocalizedText
  quote?: LocalizedString
  galeriaUrls?: string[]
  stillsUrls?: string[]
  fichaTecnica?: Credit[]
}

/* ── Query projection types ────────────────────────────────── */

export type FeaturedWork = Pick<Work, 'slug' | 'brand' | 'title' | 'portadaUrl' | 'previewUrl'>

export type WorkListItem = Pick<Work, 'slug' | 'brand' | 'title' | 'portadaUrl' | 'previewUrl'>

export type WorkDetail = Omit<Work, 'featured' | 'order'>

/* ── Page (placeholder — Sanity integration pendiente) ──── */

export interface Page {
  _id: string
  title: string
  body?: unknown[]
  seo?: SanitySeo
}
