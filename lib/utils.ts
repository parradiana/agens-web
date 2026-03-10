const MONTH_ABBREVIATIONS: Record<string, number> = {
  ene: 0, jan: 0,
  feb: 1,
  mar: 2,
  abr: 3, apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  ago: 7, aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dic: 11, dec: 11,
};

const LOCALE_MAP: Record<string, string> = {
  es: 'es-AR',
  en: 'en-US',
};

function parseTextDate(dateStr: string): Date | null {
  const match = dateStr.match(/^([a-zA-Z]+)\s+(\d{4})/);

  if (!match) {
    return null;
  }

  const monthKey = match[1].toLowerCase().slice(0, 3);
  const monthIndex = MONTH_ABBREVIATIONS[monthKey];

  if (monthIndex === undefined) {
    return null;
  }

  return new Date(Number(match[2]), monthIndex, 15);
}

function parseIsoDate(dateStr: string): Date | null {
  const match = dateStr.match(/^(\d{4}-\d{2})(?:-\d{2})?/);

  if (!match) {
    return null;
  }

  const date = new Date(`${match[1]}-15`);

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
}

function formatUpperMonthYear(date: Date, locale: string): string {
  const resolvedLocale = LOCALE_MAP[locale] ?? 'en-US';
  const month = date.toLocaleString(resolvedLocale, { month: 'long' });

  return `${month.toUpperCase()} ${date.getFullYear()}`;
}

/**
 * Formats a work date string to "MES AÑO" localized.
 * Handles: "feb 2026 – Argentina", "dic 2025", "2025-12", "2025-12-15"
 */
export function formatWorkDate(dateStr: string, locale: string): string {
  const date = parseTextDate(dateStr) ?? parseIsoDate(dateStr);

  if (!date) {
    return dateStr.toUpperCase();
  }

  return formatUpperMonthYear(date, locale);
}
