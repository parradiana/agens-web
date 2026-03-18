import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { StaticPathnames } from '@/i18n/routing';
import { FooterContactButton } from './FooterContactButton';

type FooterLinkProps =
  | { href: StaticPathnames; children: React.ReactNode; external?: false }
  | { href: string; children: React.ReactNode; external: true };

function FooterLink(props: FooterLinkProps) {
  const linkClasses = 'flex flex-col w-full';
  const textClasses = 'text-[20px] leading-[23px] font-normal hover:underline transition-all';

  if (props.external) {
    return (
      <div className={linkClasses}>
        <div className="h-[1px] w-full bg-white mb-0" />
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={textClasses}
        >
          {props.children}
        </a>
      </div>
    );
  }

  return (
    <div className={linkClasses}>
      <div className="h-[1px] w-full bg-white mb-0" />
      <Link href={props.href} className={textClasses}>
        {props.children}
      </Link>
    </div>
  );
}

export async function Footer() {
  const t = await getTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-clip w-full bg-black text-white"
    >
      <div className="flex w-full flex-col gap-8 px-4 pb-12 pt-24 md:flex-row md:items-end md:gap-[151px] md:px-[50px] md:pt-[120px] md:pb-[50px]">
        {/* Copyright */}
        <div className="text-[20px] leading-[23px] font-normal shrink-0">
          <p className="mb-0">@{year}</p>
          <p>AgensAgency</p>
        </div>

        {/* Links Container */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-[20px] md:w-full">
          {/* Left Column: Legal + Social */}
          <div className="flex flex-col gap-[10px] md:w-1/2">
            <FooterLink href="/politicas">
              {t('policies')}
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/company/agensagency/" external>
              {t('linkedin')}
            </FooterLink>
            <FooterLink href="https://www.instagram.com/agens.agency" external>
              {t('instagram')}
            </FooterLink>
          </div>

          {/* Right Column: Navigation */}
          <div className="flex flex-col gap-[10px] md:w-1/2">
            <FooterLink href="/trabajos">
              {t('works')}
            </FooterLink>
            <FooterLink href="/nosotros">
              {t('about')}
            </FooterLink>
            <FooterContactButton label={t('contact')} />
          </div>
        </div>
      </div>
    </footer>
  );
}
