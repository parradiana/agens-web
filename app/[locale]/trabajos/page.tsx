import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { allWorksQuery } from '@/lib/sanity/queries';
import type { Work } from '@/lib/sanity/types';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.trabajos' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TrabajosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const works = await sanityFetch<Work[]>({
    query: allWorksQuery,
    tags: ['work'],
  }).catch(() => [] as Work[]);

  return (
    <section>
      {/* WorkPreviewList — Fase 2 */}
      {works.length === 0 && (
        <p>Trabajos próximamente.</p>
      )}
    </section>
  );
}
