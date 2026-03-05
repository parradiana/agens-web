'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { SectionFixedBar } from './SectionFixedBar';

export function SelectedWorksIntro() {
  const t = useTranslations('HomePage');

  return (
    <section
      id="trabajos-seleccionados"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-off-white"
      aria-label={t('selectedWorks')}
    >
      <motion.div
        className="flex flex-col items-center gap-[25px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <p className="font-sans text-[20px] font-normal text-black md:text-[25px]">
          {t('selectedWorks')}
        </p>

        <button
          type="button"
          onClick={() => {
            document
              .getElementById('trabajos-grid')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex cursor-pointer flex-col items-center gap-2 bg-transparent"
          aria-label={t('scrollDown')}
        >
          <span className="font-sans text-[16px] font-normal text-black md:text-[20px]">
            {t('scrollDown')}
          </span>
          <svg
            width="14"
            height="69"
            viewBox="0 0 14 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 0V67M1 61L7 67L13 61"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>

      <SectionFixedBar />
    </section>
  );
}
