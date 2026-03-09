'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useContactModal } from '@/lib/contact-modal-context';

export function AboutHero() {
  const t = useTranslations('AboutPage');
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useContactModal();

  return (
    <section className="relative bg-off-white pt-[20px] md:pt-[30px]">
      <Container className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
        {/* Image — left column */}
        <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[928px] lg:w-[38%]">
          <Image
            src="/nosotros-hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right column — text + arrow/CTA */}
        <div className="flex flex-col justify-between lg:w-[55%] lg:ml-auto">
          {/* Text */}
          <motion.div
            className="flex flex-col gap-[34px] lg:pt-[40px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <p className="font-secondary text-[20px] font-normal md:text-[25px] xl:text-[35px]">
              [{t('whoWeAreTitle').toLowerCase()}]
            </p>

            <div className="font-sans text-[20px] leading-normal md:text-[28px] lg:text-[35px] xl:text-[42px]">
              <p className="mb-4">{t('whoWeAreParagraph1')}</p>
              <p>
                {t('whoWeAreParagraph2Before')}
                <strong className="font-bold">{t('whoWeAreParagraph2Bold')}</strong>
                {t('whoWeAreParagraph2After')}
              </p>
            </div>
          </motion.div>

          {/* Arrow + CTA — aligned to bottom of image */}
          <div className="flex items-center justify-between pt-8 pb-4 lg:pt-0 lg:pb-0">
            {/* Scroll down arrow */}
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

            {/* CTA button */}
            <button
              onClick={openModal}
              className="relative flex h-[40px] items-center md:h-[50px]"
              aria-label={t('cta')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Expanded background shape */}
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

              {/* "A" logo */}
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
        </div>
      </Container>
    </section>
  );
}
