import { getTranslations } from 'next-intl/server';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Logo } from '@/components/ui/Logo';
import { HeaderShell } from './HeaderShell';
import type { StaticPathnames } from '@/i18n/routing';

export async function Header() {
  const t = await getTranslations('Navigation');

  const navItems: { href: StaticPathnames; label: string }[] = [
    { href: '/trabajos', label: t('works') },
    { href: '/nosotros', label: t('about') },
    { href: '/contacto', label: t('contact') },
  ];

  return (
    <HeaderShell>
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-[50px] md:pb-[15px] md:pt-[50px]">
        <Logo size="large" />

        {/* Nav + Language switcher (desktop only) */}
        <div className="flex items-center gap-[40px]">
          <Navigation items={navItems} />
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
