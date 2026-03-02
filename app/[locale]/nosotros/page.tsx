import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.nosotros' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function NosotrosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <NosotrosContent />;
}

function NosotrosContent() {
  const t = useTranslations('AboutPage');
  return (
    <section>
      <h2>{t('whoWeAreTitle')}</h2>
      <p>{t('whoWeAreParagraph1')}</p>
      <p>{t('whoWeAreParagraph2')}</p>
      <h2>{t('ourStoryTitle')}</h2>
      <p>{t('ourStoryParagraph1')}</p>
      <p>{t('ourStoryParagraph2')}</p>
    </section>
  );
}
