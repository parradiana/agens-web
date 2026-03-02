'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import type { StaticPathnames } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(newLocale: string) {
    router.replace(pathname as StaticPathnames, { locale: newLocale });
  }

  const otherLocale = routing.locales.find((l) => l !== locale) ?? 'en';
  const label = locale.toUpperCase() + '.';

  return (
    <button
      onClick={() => handleLocaleChange(otherLocale)}
      className="border-2 border-black px-[7px] py-[7px] text-[35px] leading-none font-normal cursor-pointer"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      {label}
    </button>
  );
}
