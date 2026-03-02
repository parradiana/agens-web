import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'] as const,
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/trabajos': {
      es: '/trabajos',
      en: '/works',
    },
    '/trabajos/[id]': {
      es: '/trabajos/[id]',
      en: '/works/[id]',
    },
    '/nosotros': {
      es: '/nosotros',
      en: '/about',
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
    '/politicas': {
      es: '/politicas',
      en: '/policies',
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathnames = keyof typeof routing.pathnames;
