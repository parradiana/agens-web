'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { SectionFixedBar } from './SectionFixedBar';

const CLIENT_LOGOS = [
  { name: 'Pantene', src: '/clients/client-pantene.png' },
  { name: 'Vick', src: '/clients/client-vick.png' },
  { name: 'Pampers', src: '/clients/client-pampers.png' },
  { name: 'Philco', src: '/clients/client-philco.png' },
  { name: 'Noblex', src: '/clients/client-noblex.png' },
  { name: 'Cabify', src: '/clients/client-cabify.png' },
  { name: 'Oral-B', src: '/clients/client-oralb.png' },
  { name: 'Siam Motos', src: '/clients/client-siammotos.png' },
  { name: 'OPPO', src: '/clients/client-oppo.png' },
  { name: 'H&S', src: '/clients/client-h&s.png' },
  { name: 'Gillette', src: '/clients/client-gillette.png' },
  { name: 'Always', src: '/clients/client-always.png' },
  { name: 'Herbal Essences', src: '/clients/client-herbal.png' },
  { name: 'Venus', src: '/clients/client-venus.png' },
  { name: 'Bosch', src: '/clients/client-bosch.png' },
  { name: 'Cher', src: '/clients/client-cher.png' },
  { name: 'Allure', src: '/clients/client-allure.png' },
  { name: 'Fixodent', src: '/clients/client-fixodent.png' },
  { name: 'Downy', src: '/clients/client-downy.png' },
  { name: 'ATMA', src: '/clients/client-atma.png' },
  { name: 'Mariacher', src: '/clients/client-mariacher.png' },
] as const;

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
                  className="h-[50px] md:h-[70px] w-auto object-contain"
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
                  className="h-[50px] md:h-[70px] w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>

      </motion.div>

      <SectionFixedBar />
    </section>
  );
}
