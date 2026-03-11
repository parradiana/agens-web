'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { SectionFixedBar } from './SectionFixedBar';
import type { FeaturedWork } from '@/lib/sanity/types';

interface WorkCardProps {
  work: FeaturedWork;
  index: number;
  locale: string;
  viewMoreLabel: string;
}

function WorkCard({ work, index, locale, viewMoreLabel }: WorkCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax: image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  // Fade in on enter, fade out on exit
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isLeft = index % 2 === 0;
  const title = work.title[locale as 'es' | 'en'];

  return (
    <motion.div ref={ref} style={{ opacity }} className="py-[15vh]">
      <div
        className={
          isLeft
            ? 'ml-[4%] mr-auto w-[48vw] max-w-[680px]'
            : 'ml-auto mr-[4%] w-[44vw] max-w-[620px]'
        }
      >
        <Link
          href={{ pathname: '/trabajos/[id]', params: { id: work.slug } }}
          className="group block"
        >
          {/* Image with parallax — container clips, inner div is taller to avoid gaps */}
          <div className="relative aspect-[529/342] overflow-hidden">
            <motion.div
              style={{ y }}
              className="absolute inset-x-0 -top-[80px] -bottom-[80px]"
            >
              {work.portadaUrl ? (
                <Image
                  src={work.portadaUrl}
                  alt={`${work.brand} — ${title}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 90vw, 48vw"
                />
              ) : (
                <div className="size-full bg-gray" />
              )}
            </motion.div>
          </div>

          {/* Card info — brand left, title + arrow + cta right */}
          <div className="mt-4 flex items-start justify-between gap-6">
            <span className="shrink-0 font-secondary text-[30px] font-semibold leading-none text-black">
              [{work.brand}]
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
              <p className="font-sans text-[20px] leading-[23px] text-black">{title}</p>
              {/* Full-width arrow */}
              <div className="flex w-full items-center gap-1" aria-hidden="true">
                <div className="flex-1 border-t border-black" />
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path
                    d="M1 1L7 6L1 11"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-sans text-[20px] leading-[23px] text-black">
                {viewMoreLabel}.
              </span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

interface Props {
  works: FeaturedWork[];
  locale: string;
  viewMoreLabel: string;
  sectionLabel: string;
}

export function HomeSelectedWorksClient({
  works,
  locale,
  viewMoreLabel,
  sectionLabel,
}: Props) {
  return (
    <section id="trabajos-seleccionados" className="relative bg-off-white">
      {/* Sticky background layer — stays fixed while works scroll over it */}
      <div
        className="pointer-events-none sticky top-0 z-[1] flex h-screen items-center justify-center"
        aria-hidden="true"
      >
        <motion.p
          className="font-sans text-[20px] font-normal text-black md:text-[25px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          {sectionLabel}
        </motion.p>

        {/* Tagline + contact CTA fixed at bottom */}
        <div className="pointer-events-auto absolute bottom-0 left-0 w-full">
          <SectionFixedBar />
        </div>
      </div>

      {/* Works layer — scrolls over the sticky background */}
      <div className="relative z-[2] -mt-[100vh] pb-[30vh] pt-[70vh]">
        {works.map((work, i) => (
          <WorkCard
            key={work.slug}
            work={work}
            index={i}
            locale={locale}
            viewMoreLabel={viewMoreLabel}
          />
        ))}
      </div>
    </section>
  );
}
