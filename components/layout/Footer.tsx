import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function Footer() {
  const t = await getTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white min-h-[321px]">
      <div className="mx-auto flex w-full max-w-[1728px] items-start justify-between px-[55px] py-12">
        {/* Col 1: Copyright */}
        <div className="text-[20px] leading-[31px] font-normal">
          <p>@{year}</p>
          <p>AgensAgency</p>
        </div>

        {/* Col 2: Legal + Social */}
        <div className="flex flex-col gap-1 text-[20px] leading-[31px] font-normal">
          <Link href="/politicas" className="hover:underline">
            {t('policies')}
          </Link>
          <a
            href="https://www.linkedin.com/company/agensagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t('linkedin')}
          </a>
          <a
            href="https://www.instagram.com/agens.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t('instagram')}
          </a>
        </div>

        {/* Col 3: Nav */}
        <div className="flex flex-col gap-1 text-[20px] leading-[31px] font-normal">
          <Link href="/trabajos" className="hover:underline">
            {t('works')}
          </Link>
          <Link href="/nosotros" className="hover:underline">
            {t('about')}
          </Link>
          <Link href="/contacto" className="hover:underline">
            {t('contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
