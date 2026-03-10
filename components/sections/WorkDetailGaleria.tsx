'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

interface WorkDetailGaleriaProps {
  galeriaUrls: string[];
  quote?: string;
  brand: string;
}

export function WorkDetailGaleria({
  galeriaUrls,
  quote,
  brand,
}: WorkDetailGaleriaProps) {
  const t = useTranslations('WorkDetailPage');
  const hasFullLayout = galeriaUrls.length >= 7;

  return (
    <section className="pt-10 lg:pt-[50px]">
      <Container className="flex flex-col gap-6 lg:gap-[25px]">

        {/* Section title */}
        <h2 className="font-sans text-[18px] font-normal uppercase text-black md:text-[20px] lg:text-[25px]">
          {t('gallery')}
        </h2>

        {hasFullLayout ? (
          <FullGalleryLayout
            galeriaUrls={galeriaUrls}
            quote={quote}
            brand={brand}
          />
        ) : (
          <SimpleGalleryLayout
            galeriaUrls={galeriaUrls}
            brand={brand}
          />
        )}

        {/* Divider */}
        <hr className="mt-6 border-t border-black lg:mt-10" />

      </Container>
    </section>
  );
}

function FullGalleryLayout({
  galeriaUrls,
  quote,
  brand,
}: WorkDetailGaleriaProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 lg:gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      {/* Row 1: 667 + 529 + 392 */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
        <GalleryImage
          src={galeriaUrls[0]}
          alt={`${brand} gallery 1`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[667/582] lg:w-[42%] lg:shrink-0"
        />
        <GalleryImage
          src={galeriaUrls[1]}
          alt={`${brand} gallery 2`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[529/582] lg:w-[33%] lg:shrink-0"
        />
        <GalleryImage
          src={galeriaUrls[2]}
          alt={`${brand} gallery 3`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[392/582] lg:flex-1"
        />
      </div>

      {/* Row 2: 392 + 392 + 804 */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
        <GalleryImage
          src={galeriaUrls[3]}
          alt={`${brand} gallery 4`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[392/582] lg:w-[25%] lg:shrink-0"
        />
        <GalleryImage
          src={galeriaUrls[4]}
          alt={`${brand} gallery 5`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[392/582] lg:w-[25%] lg:shrink-0"
        />
        <GalleryImage
          src={galeriaUrls[5]}
          alt={`${brand} gallery 6`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[804/582] lg:flex-1"
        />
      </div>

      {/* Row 3: 1079 image + quote */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5">
        <GalleryImage
          src={galeriaUrls[6]}
          alt={`${brand} gallery 7`}
          wrapperClassName="relative w-full aspect-[4/3] lg:aspect-[1079/692] lg:w-[73%] lg:shrink-0"
        />

        {quote && (
          <p className="font-secondary text-[20px] font-semibold text-black md:text-[24px] lg:flex-1 lg:pb-2 lg:text-[30px]">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>

      {/* Remaining images (if more than 7) */}
      {galeriaUrls.length > 7 && (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galeriaUrls.slice(7).map((url, i) => (
            <GalleryImage
              key={url}
              src={url}
              alt={`${brand} gallery ${i + 8}`}
              wrapperClassName="relative w-full aspect-[4/3]"
            />
          ))}
        </div>
      )}

    </motion.div>
  );
}

function SimpleGalleryLayout({
  galeriaUrls,
  brand,
}: {
  galeriaUrls: string[];
  brand: string;
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {galeriaUrls.map((url, i) => (
        <GalleryImage
          key={url}
          src={url}
          alt={`${brand} gallery ${i + 1}`}
          wrapperClassName="relative w-full aspect-[4/3]"
        />
      ))}
    </motion.div>
  );
}

function GalleryImage({
  src,
  alt,
  wrapperClassName,
}: {
  src: string;
  alt: string;
  wrapperClassName: string;
}) {
  return (
    <ImageWithSkeleton
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      wrapperClassName={wrapperClassName}
    />
  );
}
