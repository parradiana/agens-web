'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import type { Credit } from '@/lib/sanity/types';

interface WorkDetailCreditsProps {
  fichaTecnica: Credit[];
  locale: string;
}

export function WorkDetailCredits({
  fichaTecnica,
  locale,
}: WorkDetailCreditsProps) {
  const t = useTranslations('WorkDetailPage');
  const lang = locale as 'es' | 'en';

  return (
    <section className="pt-10 lg:pt-[50px]">
      <Container className="flex flex-col gap-6 lg:gap-[25px]">

        {/* Section title */}
        <h2 className="font-sans text-[18px] font-normal uppercase text-black md:text-[20px] lg:text-[25px]">
          {t('credits')}
        </h2>

        {/* Credits text */}
        <motion.p
          className="font-sans text-[14px] uppercase leading-relaxed text-black md:text-[18px] lg:text-[24px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {fichaTecnica.map((credit, i) => (
            <span key={credit._key}>
              <span className="font-normal">{credit.role[lang]}: </span>
              <span className="font-bold">{credit.names}</span>
              {i < fichaTecnica.length - 1 && ' · '}
            </span>
          ))}
        </motion.p>

        {/* Divider */}
        <hr className="mt-6 border-t border-black lg:mt-10" />

      </Container>
    </section>
  );
}
