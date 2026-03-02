import { groq } from 'next-sanity';

export const allWorksQuery = groq`
  *[_type == "work"] | order(date desc) {
    _id,
    title,
    client,
    slug,
    date,
    excerpt,
    coverImage
  }
`;

export const workBySlugQuery = groq`
  *[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    client,
    slug,
    date,
    excerpt,
    coverImage,
    rationale,
    results,
    quote,
    gallery,
    videoUrl,
    credits,
    relatedWorks[]-> {
      _id,
      title,
      client,
      slug,
      coverImage
    },
    seo
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    body,
    seo
  }
`;
