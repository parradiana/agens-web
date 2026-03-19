'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useContactModal } from '@/lib/contact-modal-context';

export function SectionFixedBar() {
  const t = useTranslations('HomePage');
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useContactModal();

  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between px-4 py-6 md:px-[50px] md:py-[35px]">
      {/* Tagline */}
      <p className="max-w-[65%] font-sans text-[14px] font-normal leading-tight text-black md:max-w-[667px] md:text-[25px]">
        {t('tagline')}
      </p>

      {/* CTA */}
      <button
        onClick={openModal}
        className="relative ml-auto flex h-[40px] items-center md:h-[50px]"
        aria-label={t('cta')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Expanded background shape — grows from right to left */}
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

          {/* Text overlay */}
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

        {/* "A" logo — fades out on hover */}
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
  );
}
