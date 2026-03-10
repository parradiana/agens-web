'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

interface RelatedWork {
  slug: string;
  brand: string;
  title: string;
  previewUrl?: string;
}

interface WorkDetailRelatedProps {
  works: RelatedWork[];
}

export function WorkDetailRelated({ works }: WorkDetailRelatedProps) {
  const t = useTranslations('WorkDetailPage');

  return (
    <section className="pt-10 pb-10 lg:pt-[50px] lg:pb-[50px]">
      <Container className="flex flex-col gap-6 lg:gap-[25px]">

        {/* Section title */}
        <h2 className="text-center font-sans text-[18px] font-normal uppercase text-black md:text-[20px] lg:text-[25px]">
          [{t('related')}]
        </h2>

        {/* Related works grid */}
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {works.slice(0, 3).map((work) => (
            <Link
              key={work.slug}
              href={{ pathname: '/trabajos/[id]', params: { id: work.slug } }}
              className="group flex flex-1 flex-col"
            >
              {/* Image */}
              {work.previewUrl ? (
                <ImageWithSkeleton
                  src={work.previewUrl}
                  alt={`${work.brand} — ${work.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  wrapperClassName="relative aspect-[529/343] w-full"
                />
              ) : (
                <div className="aspect-[529/343] w-full bg-gray" />
              )}

              {/* Info */}
              <div className="mt-3 flex items-start gap-3 lg:mt-4 lg:gap-4">
                <span className="shrink-0 font-secondary text-[20px] font-semibold text-black lg:text-[30px]">
                  [{work.brand}]
                </span>

                <div className="flex flex-1 flex-col gap-1">
                  <p className="font-sans text-[16px] leading-[1.15] font-normal text-black lg:text-[20px] lg:leading-[23px]">
                    {work.title.toUpperCase()}
                  </p>

                  <span className="font-sans text-[14px] font-normal lowercase text-black transition-all group-hover:underline group-hover:underline-offset-2 lg:text-[20px]">
                    {t('viewMore')}.
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
