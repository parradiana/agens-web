'use client';

import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

interface WorkDetailHeroProps {
  heroVideoUrl?: string;
  portadaUrl?: string;
  alt: string;
}

export function WorkDetailHero({
  heroVideoUrl,
  portadaUrl,
  alt,
}: WorkDetailHeroProps) {
  return (
    <section id="hero" className="relative -mt-[129px] h-[75vh] w-full overflow-hidden md:h-[90vh] lg:h-[110vh]">
      {heroVideoUrl ? (
        <video
          src={heroVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          poster={portadaUrl}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : portadaUrl ? (
        <ImageWithSkeleton
          src={portadaUrl}
          alt={alt}
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          wrapperClassName="absolute inset-0"
        />
      ) : (
        <div className="absolute inset-0 bg-gray" />
      )}
    </section>
  );
}
