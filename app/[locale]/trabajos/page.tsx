import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { ALL_WORKS_QUERY } from '@/lib/sanity/queries';
import type { WorkListItem } from '@/lib/sanity/types';
import { Container } from '@/components/ui/Container';
import { WorkCard } from '@/components/sections/WorkCard';

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

  const t = await getTranslations({ locale, namespace: 'WorksPage' });

  const works = await sanityFetch<WorkListItem[]>({
    query: ALL_WORKS_QUERY,
    tags: ['work'],
  }).catch(() => [] as WorkListItem[]);

  return (
    <section>
      <Container>
        {works.length > 0 ? (
          <div className="divide-y divide-gray">
            {works.map((work) => (
              <div key={work.slug} className="py-5">
                <WorkCard
                  slug={work.slug}
                  brand={work.brand}
                  title={work.title[locale as 'es' | 'en']}
                  portadaUrl={work.portadaUrl}
                  viewMoreLabel={t('viewMore')}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center font-sans text-xl text-black">
            {t('empty')}
          </p>
        )}
      </Container>
    </section>
  );
}
