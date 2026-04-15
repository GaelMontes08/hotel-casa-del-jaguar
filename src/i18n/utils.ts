export const BOOKING_URL =
  'https://www.booking.com/hotel/pe/casa-del-jaguar-iquitos.es.html';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/** Returns the locale-prefixed path. The default locale (es) has no prefix. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

/** Returns the alternate locale for a given locale */
export function altLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
