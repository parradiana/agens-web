'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function AboutStory() {
  const t = useTranslations('AboutPage');

  return (
    <section id="nuestra-historia" className="relative bg-off-white pt-16 pb-32 scroll-mt-[100px]">
      <Container>
        {/* Story text — aligned to right column */}
        <motion.div
          className="flex flex-col gap-[34px] text-black lg:ml-auto lg:w-[55%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <p className="font-secondary text-[20px] font-normal md:text-[25px]">
            [{t('ourStoryTitle').toLowerCase()}]
          </p>

          <div className="font-sans text-[20px] leading-normal md:text-[28px] lg:text-[35px]">
            <p className="mb-8">{t('ourStoryParagraph1')}</p>
            <p>{t('ourStoryParagraph2')}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
