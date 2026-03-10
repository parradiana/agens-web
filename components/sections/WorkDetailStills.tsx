'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

interface WorkDetailStillsProps {
  stillsUrls: string[];
  brand: string;
}

export function WorkDetailStills({
  stillsUrls,
  brand,
}: WorkDetailStillsProps) {
  const t = useTranslations('WorkDetailPage');

  return (
    <section className="pt-10 lg:pt-[50px]">
      <Container className="flex flex-col gap-6 lg:gap-[25px]">

        {/* Section title */}
        <h2 className="font-sans text-[18px] font-normal uppercase text-black md:text-[20px] lg:text-[25px]">
          {t('stills')}
        </h2>

        {/* Horizontal scroll */}
        <motion.div
          className="scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory md:-mx-8 md:px-8 lg:-mx-12 lg:gap-5 lg:px-12 xl:-mx-[50px] xl:px-[50px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {stillsUrls.map((url, i) => (
            <ImageWithSkeleton
              key={url}
              src={url}
              alt={`${brand} still ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 392px"
              wrapperClassName="relative aspect-[392/254] w-[280px] shrink-0 snap-start md:w-[350px] lg:w-[392px]"
            />
          ))}
        </motion.div>

        {/* Divider */}
        <hr className="mt-6 border-t border-black lg:mt-10" />

      </Container>
    </section>
  );
}
