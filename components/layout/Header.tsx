import { getTranslations } from 'next-intl/server';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { StaticPathnames } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

export async function Header() {
  const t = await getTranslations('Navigation');

  const navItems: { href: StaticPathnames; label: string }[] = [
    { href: '/trabajos', label: t('works') },
    { href: '/nosotros', label: t('about') },
    { href: '/contacto', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-off-white">
      <div className="relative mx-auto flex h-[95px] w-full max-w-[1728px] items-center justify-between px-[50px]">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 text-[90px] leading-none">
          <span className="font-bold">AGENS</span>
          <span className="font-light">AGENCY</span>
        </Link>

        {/* Nav + Language switcher */}
        <div className="flex items-center gap-8">
          <Navigation items={navItems} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
