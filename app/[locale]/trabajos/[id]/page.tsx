import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { WORK_DETAIL_QUERY, WORK_SLUGS_QUERY, OTHER_WORKS_QUERY } from '@/lib/sanity/queries';
import type { WorkDetail, WorkListItem } from '@/lib/sanity/types';
import { WorkDetailHero } from '@/components/sections/WorkDetailHero';
import { WorkDetailRacional } from '@/components/sections/WorkDetailRacional';
import { WorkDetailGaleria } from '@/components/sections/WorkDetailGaleria';
import { WorkDetailStills } from '@/components/sections/WorkDetailStills';
import { WorkDetailCredits } from '@/components/sections/WorkDetailCredits';
import { WorkDetailRelated } from '@/components/sections/WorkDetailRelated';

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

  const lang = locale as 'es' | 'en';

  const [work, relatedWorks] = await Promise.all([
    sanityFetch<WorkDetail | null>({
      query: WORK_DETAIL_QUERY,
      params: { slug: id },
      tags: [`work:${id}`],
    }).catch(() => null),
    sanityFetch<WorkListItem[]>({
      query: OTHER_WORKS_QUERY,
      params: { slug: id },
      tags: ['work'],
    }).catch(() => []),
  ]);

  if (!work) {
    notFound();
  }

  const resolvedRelated = relatedWorks.map((w) => ({
    slug: w.slug,
    brand: w.brand,
    title: w.title[lang],
    previewUrl: w.previewUrl,
  }));

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

      {work.stillsUrls && work.stillsUrls.length > 0 && (
        <WorkDetailStills
          stillsUrls={work.stillsUrls}
          brand={work.brand}
        />
      )}

      {work.fichaTecnica && work.fichaTecnica.length > 0 && (
        <WorkDetailCredits
          fichaTecnica={work.fichaTecnica}
          locale={locale}
        />
      )}

      {resolvedRelated.length > 0 && (
        <WorkDetailRelated works={resolvedRelated} />
      )}
    </>
  );
}
