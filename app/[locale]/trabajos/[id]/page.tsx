import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { workBySlugQuery, allWorksQuery } from '@/lib/sanity/queries';
import type { Work } from '@/lib/sanity/types';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateStaticParams() {
  const works = await sanityFetch<Work[]>({
    query: allWorksQuery,
    tags: ['work'],
  }).catch(() => [] as Work[]);

  return works.map((work) => ({ id: work.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = await sanityFetch<Work | null>({
    query: workBySlugQuery,
    params: { slug: id },
    tags: [`work:${id}`],
  }).catch(() => null);

  if (!work) return {};
  return {
    title: work.seo?.metaTitle ?? work.title,
    description: work.seo?.metaDescription ?? work.excerpt,
  };
}

export default async function TrabajoPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const work = await sanityFetch<Work | null>({
    query: workBySlugQuery,
    params: { slug: id },
    tags: [`work:${id}`],
  }).catch(() => null);

  if (!work) notFound();

  return (
    <section>
      {/* WorkDetail — Fase 2 */}
      <h1>{work.title}</h1>
      <p>{work.client}</p>
    </section>
  );
}
