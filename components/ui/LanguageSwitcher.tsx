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

  // Variant styles based on current locale
  // ES: border with transparent background, black text (Variant3)
  // EN: black background, white text (Variant2)
  const isEnglish = locale === 'en';
  const buttonClasses = isEnglish
    ? 'bg-black text-white'
    : 'border-2 border-black border-solid text-black';

  return (
    <button
      onClick={() => handleLocaleChange(otherLocale)}
      className={`inline-flex shrink-0 items-center justify-center gap-[10px] p-[7px] text-[16px] leading-none font-normal cursor-pointer transition-colors whitespace-nowrap md:text-[25px] ${buttonClasses}`}
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      {label}
    </button>
  );
}
