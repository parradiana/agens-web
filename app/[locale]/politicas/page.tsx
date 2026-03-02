import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { sanityFetch } from '@/lib/sanity/fetch';
import { pageBySlugQuery } from '@/lib/sanity/queries';
import type { Page } from '@/lib/sanity/types';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.politicas' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PoliticasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await sanityFetch<Page | null>({
    query: pageBySlugQuery,
    params: { slug: 'politicas' },
    tags: ['page:politicas'],
  }).catch(() => null);

  return <PoliticasContent page={page} />;
}

function PoliticasContent({ page }: { page: Page | null }) {
  const t = useTranslations('PoliciesPage');
  return (
    <section>
      <h1>{page?.title ?? t('title')}</h1>
      {/* PortableText body — Fase 4 (CMS) */}
      {!page && <p>Contenido próximamente.</p>}
    </section>
  );
}
