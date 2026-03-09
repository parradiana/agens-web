import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PoliciesContent } from '@/components/sections/PoliciesContent';

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

  return <PoliciesContent />;
}
