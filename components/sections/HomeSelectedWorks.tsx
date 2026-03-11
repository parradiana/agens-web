import { getTranslations } from 'next-intl/server';
import { sanityFetch } from '@/lib/sanity/fetch';
import { FEATURED_WORKS_QUERY } from '@/lib/sanity/queries';
import type { FeaturedWork } from '@/lib/sanity/types';
import { HomeSelectedWorksClient } from './HomeSelectedWorksClient';

interface Props {
  locale: string;
}

export async function HomeSelectedWorks({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  const works = await sanityFetch<FeaturedWork[]>({
    query: FEATURED_WORKS_QUERY,
    tags: ['work'],
  }).catch(() => [] as FeaturedWork[]);

  if (works.length === 0) {
    return null;
  }

  return (
    <HomeSelectedWorksClient
      works={works}
      locale={locale}
      viewMoreLabel={t('viewMore')}
      sectionLabel={t('selectedWorks')}
    />
  );
}
