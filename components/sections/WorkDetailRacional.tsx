'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { formatWorkDate } from '@/lib/utils';

interface WorkDetailRacionalProps {
  racionalImageUrl?: string;
  date?: string;
  brand: string;
  racionalText?: string;
  locale: string;
}

export function WorkDetailRacional({
  racionalImageUrl,
  date,
  brand,
  racionalText,
  locale,
}: WorkDetailRacionalProps) {
  const t = useTranslations('WorkDetailPage');

  return (
    <section className="pt-10 lg:pt-[50px]">
      <Container className="flex flex-col gap-6 lg:gap-[25px]">

        {/* Section title */}
        <h2 className="font-sans text-[18px] font-normal uppercase text-black md:text-[20px] lg:text-[25px]">
          {t('rationale')}
        </h2>

        {/* Two-column layout */}
        <motion.div
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >

          {/* Left column — image */}
          {racionalImageUrl ? (
            <ImageWithSkeleton
              src={racionalImageUrl}
              alt={brand}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 529px"
              wrapperClassName="relative aspect-[3/4] w-full shrink-0 lg:w-[529px]"
            />
          ) : (
            <div className="aspect-[3/4] w-full shrink-0 bg-gray lg:w-[529px]" />
          )}

          {/* Right column — date, brand, text */}
          <div className="flex flex-col gap-6 lg:flex-1 lg:gap-[45px] lg:pl-8 xl:pl-16">

            {/* Date + Brand */}
            <div className="flex flex-wrap gap-4 font-secondary text-[20px] font-semibold text-black md:text-[25px] lg:gap-[121px] lg:text-[30px]">
              {date && (
                <span>[{formatWorkDate(date, locale)}]</span>
              )}
              <span>[{brand.toUpperCase()}]</span>
            </div>

            {/* Racional text */}
            {racionalText && (
              <p className="font-sans text-[20px] font-medium uppercase leading-[1.1] text-black md:text-[28px] lg:text-[35px] xl:text-[40px]">
                {racionalText}
              </p>
            )}

          </div>

        </motion.div>

        {/* Divider */}
        <hr className="mt-6 border-t border-black lg:mt-10" />

      </Container>
    </section>
  );
}
