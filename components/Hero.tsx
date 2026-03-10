'use client';

import { useTranslations } from 'next-intl';
import { HERO_REEL_VIDEO } from '@/lib/assets';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
      id="hero"
      className="relative -mt-[129px] h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_REEL_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => {
          document
            .getElementById('trabajos-seleccionados')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 bg-transparent md:bottom-[40px]"
        aria-label={t('scrollDown')}
      >
        <span className="font-sans text-[16px] font-normal text-white md:text-[20px]">
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
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
