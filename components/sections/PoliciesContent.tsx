'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

function PolicySection({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-sans text-[16px] font-bold leading-normal md:text-[18px] lg:text-[20px]">
        {title}
      </p>
      <p className="font-sans text-[16px] leading-[23px] whitespace-pre-line md:text-[18px] lg:text-[20px]">
        {content}
      </p>
    </div>
  );
}

export function PoliciesContent() {
  const t = useTranslations('PoliciesPage');
  const router = useRouter();

  const handleExit = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const sections = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <section className="bg-off-white">
      <Container>
        {/* Header: título + botón salir */}
        <div className="flex items-center justify-between py-[20px] md:py-[30px]">
          <h1 className="font-sans text-[20px] font-normal leading-normal md:text-[22px] lg:text-[25px]">
            {t('title')}
          </h1>
          <button
            type="button"
            onClick={handleExit}
            className="flex cursor-pointer items-center justify-center bg-transparent"
            aria-label={t('exit')}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 8L22 22M22 8L8 22"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Línea separadora */}
        <div className="h-px w-full bg-black" />

        {/* Contenido */}
        <div className="flex flex-col gap-[30px] py-[30px] lg:flex-row lg:gap-[160px] lg:py-[40px]">
          {/* Fecha */}
          <p className="font-sans text-[16px] leading-[23px] md:text-[18px] lg:shrink-0 lg:text-[20px]">
            {t('lastUpdated')}
          </p>

          {/* Texto completo */}
          <div className="flex flex-col gap-[35px]">
            {/* Intro */}
            <div className="font-sans text-[16px] leading-normal md:text-[18px] lg:text-[20px]">
              <p className="mb-4">{t('intro')}</p>
              <p>{t('introAccept')}</p>
            </div>

            {/* Secciones 1-11 */}
            {sections.map((num) => {
              if (num === 2) {
                return (
                  <div key={num} className="flex flex-col gap-[20px]">
                    <p className="font-sans text-[16px] font-bold leading-normal md:text-[18px] lg:text-[20px]">
                      {t('section2.title')}
                    </p>
                    <div className="flex flex-col gap-[20px]">
                      <p className="font-sans text-[16px] leading-[23px] whitespace-pre-line md:text-[18px] lg:text-[20px]">
                        {t('section2.content1Title')}
                        {'\n'}
                        {t('section2.content1')}
                      </p>
                      <p className="font-sans text-[16px] leading-[23px] whitespace-pre-line md:text-[18px] lg:text-[20px]">
                        {t('section2.content2Title')}
                        {'\n'}
                        {t('section2.content2')}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <PolicySection
                  key={num}
                  title={t(`section${num}.title`)}
                  content={t(`section${num}.content`)}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
