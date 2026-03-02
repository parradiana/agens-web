import type { SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from 'next-sanity';

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanitySeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
}

export interface Work {
  _id: string;
  title: string;
  client: string;
  slug: SanitySlug;
  date: string; // e.g. "nov 2025 - Argentina"
  excerpt?: string;
  coverImage?: SanityImageSource;
  rationale?: PortableTextBlock[];
  results?: {
    engagement?: string;
    likes?: string;
    views?: string;
  };
  quote?: string;
  gallery?: SanityImageSource[];
  videoUrl?: string;
  credits?: PortableTextBlock[];
  relatedWorks?: Pick<Work, '_id' | 'title' | 'client' | 'slug' | 'coverImage'>[];
  seo?: SanitySeo;
}

export interface Page {
  _id: string;
  title: string;
  body?: PortableTextBlock[];
  seo?: SanitySeo;
}
