'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { useContactModal } from '@/lib/contact-modal-context';
import { ABOUT_GIF } from '@/lib/assets';

export function AboutHero() {
  const t = useTranslations('AboutPage');
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useContactModal();

  return (
    <section className="relative bg-off-white pt-[20px] md:pt-[30px]">
      <Container className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
        {/* Image — left column, sticky on desktop */}
        <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:sticky lg:top-[129px] lg:h-[928px] lg:w-[38%] lg:self-start">
          <Image
            src={ABOUT_GIF}
            alt="About Hero"
            fill
            unoptimized
            className="object-cover"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>

        {/* Right column — all text content scrolls alongside sticky gif */}
        <div className="flex flex-col lg:w-[55%] lg:ml-auto">
          {/* Who we are */}
          <motion.div
            className="flex flex-col gap-[34px] lg:pt-[40px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <p className="font-secondary text-[20px] font-normal md:text-[25px]">
              [{t('whoWeAreTitle').toLowerCase()}]
            </p>

            <div className="font-sans text-[20px] leading-normal md:text-[28px] lg:text-[35px]">
              <p className="mb-4">{t('whoWeAreParagraph1')}</p>
              <p>
                {t('whoWeAreParagraph2Before')}
                <strong className="font-bold">{t('whoWeAreParagraph2Bold')}</strong>
                {t('whoWeAreParagraph2After')}
              </p>
            </div>
          </motion.div>

          {/* Arrow + CTA */}
          <div className="flex items-center justify-between pt-8 pb-4 lg:pt-16 lg:pb-0">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById('nuestra-historia')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex cursor-pointer items-center justify-center bg-transparent"
              aria-label="scroll down"
            >
              <svg
                width="42"
                height="24"
                viewBox="0 0 42 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 1L21 21L41 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={openModal}
              className="relative flex h-[40px] items-center md:h-[50px]"
              aria-label={t('cta')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="absolute right-0 top-0 h-full overflow-hidden"
                style={{
                  width: isHovered ? '172px' : '0px',
                  transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <svg
                  viewBox="0 0 206 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-0 h-full w-[172px]"
                  aria-hidden="true"
                >
                  <path d="M182.711 0H0V38.25V54.0323H185.161L187.559 60H206L182.711 0Z" fill="black" />
                </svg>

                <span
                  className="absolute inset-0 z-10 flex items-center justify-center pr-[12px] font-sans text-[14px] font-bold uppercase text-white underline"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: isHovered ? 'opacity 0.2s ease 0.2s' : 'opacity 0.1s ease 0s',
                  }}
                >
                  {t('cta')}
                </span>
              </div>

              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-20 h-[40px] w-auto md:h-[50px]"
                style={{
                  opacity: isHovered ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                }}
              >
                <path
                  d="M25.1936 0H7.05783L15.3383 17.9324L0 45.0269H27.6983L30.149 50H49L25.1936 0Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* Our Story — continues in the same right column */}
          <motion.div
            id="nuestra-historia"
            className="flex flex-col gap-[34px] pt-16 pb-32 scroll-mt-[100px] lg:pt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <p className="font-secondary text-[20px] font-normal md:text-[25px]">
              [{t('ourStoryTitle').toLowerCase()}]
            </p>

            <div className="font-sans text-[20px] leading-normal md:text-[28px] lg:text-[35px]">
              <p className="mb-8">{t('ourStoryParagraph1')}</p>
              <p>{t('ourStoryParagraph2')}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
