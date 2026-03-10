import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { WORK_DETAIL_QUERY, WORK_SLUGS_QUERY } from '@/lib/sanity/queries';
import type { WorkDetail } from '@/lib/sanity/types';
import { WorkDetailHero } from '@/components/sections/WorkDetailHero';
import { WorkDetailRacional } from '@/components/sections/WorkDetailRacional';
import { WorkDetailGaleria } from '@/components/sections/WorkDetailGaleria';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateStaticParams() {
  const works = await sanityFetch<{ slug: string }[]>({
    query: WORK_SLUGS_QUERY,
    tags: ['work'],
  }).catch(() => []);

  return works.map((w) => ({ id: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const lang = locale as 'es' | 'en';

  const work = await sanityFetch<WorkDetail | null>({
    query: WORK_DETAIL_QUERY,
    params: { slug: id },
    tags: [`work:${id}`],
  }).catch(() => null);

  if (!work) {
    return {};
  }

  return {
    title: work.title[lang],
    description: work.racionalText?.[lang]?.slice(0, 160),
  };
}

export default async function TrabajoPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const work = await sanityFetch<WorkDetail | null>({
    query: WORK_DETAIL_QUERY,
    params: { slug: id },
    tags: [`work:${id}`],
  }).catch(() => null);

  if (!work) {
    notFound();
  }

  const lang = locale as 'es' | 'en';

  return (
    <>
      <WorkDetailHero
        heroVideoUrl={work.heroVideoUrl}
        portadaUrl={work.portadaUrl}
        alt={`${work.brand} — ${work.title[lang]}`}
      />

      <WorkDetailRacional
        racionalImageUrl={work.racionalImageUrl}
        date={work.date}
        brand={work.brand}
        racionalText={work.racionalText?.[lang]}
        locale={locale}
      />

      {work.galeriaUrls && work.galeriaUrls.length > 0 && (
        <WorkDetailGaleria
          galeriaUrls={work.galeriaUrls}
          quote={work.quote?.[lang]}
          brand={work.brand}
        />
      )}
    </>
  );
}
