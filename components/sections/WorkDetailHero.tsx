'use client';

import { useState } from 'react';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { PageLoading } from '@/components/ui/PageLoading';

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
  const [isLoading, setIsLoading] = useState(!!heroVideoUrl);

  return (
    <section id="hero" className="relative -mt-[129px] h-[75vh] w-full overflow-hidden md:h-[90vh] lg:h-[110vh]">
      {isLoading && <PageLoading />}

      {heroVideoUrl ? (
        <video
          src={heroVideoUrl}
          autoPlay
          loop
          playsInline
          poster={portadaUrl}
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          onPlaying={() => {
            setIsLoading(false);
          }}
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
