'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { CLIENT_LOGOS } from '@/lib/assets';

const ROW_1 = CLIENT_LOGOS.slice(0, 11);
const ROW_2 = CLIENT_LOGOS.slice(11);

export function SectionClients() {
  const t = useTranslations('HomePage');

  return (
    <section
      id="clientes"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-off-white overflow-hidden"
      aria-label={t('clientsAriaLabel')}
    >
      <motion.div
        className="flex w-full flex-col items-center gap-[46px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <p className="font-sans text-[20px] font-normal text-black md:text-[25px]">
          {t('clientsTitle')}
        </p>

        <div className="flex w-full flex-col gap-2.5">
          <Marquee speed={40} direction="left" pauseOnHover gradient={false}>
            {ROW_1.map((logo) => (
              <div key={logo.name} className="mx-5 md:mx-[21px] flex shrink-0 items-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={70}
                  className="h-[35px] md:h-[50px] w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>

          <Marquee speed={40} direction="right" pauseOnHover gradient={false}>
            {ROW_2.map((logo) => (
              <div key={logo.name} className="mx-5 md:mx-[21px] flex shrink-0 items-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={70}
                  className="h-[35px] md:h-[50px] w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>

      </motion.div>
    </section>
  );
}
