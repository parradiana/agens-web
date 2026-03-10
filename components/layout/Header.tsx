import { getTranslations } from 'next-intl/server';
import { Navigation, type NavItem } from './Navigation';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Logo } from '@/components/ui/Logo';
import { HeaderShell } from './HeaderShell';

export async function Header() {
  const t = await getTranslations('Navigation');

  const navItems: NavItem[] = [
    { href: '/trabajos', label: t('works') },
    { href: '/nosotros', label: t('about') },
    { href: '/contacto', label: t('contact'), isModalTrigger: true },
  ];

  return (
    <HeaderShell>
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-[50px] md:pb-[15px] md:pt-[50px]">
        <Logo size="large" />

        {/* Nav + Language switcher (desktop only) */}
        <div className="flex items-center gap-[40px]">
          <Navigation items={navItems} />
          <div className="hidden xl:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
