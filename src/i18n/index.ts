import type { Locale } from './utils';
import { es } from './es';
import { en } from './en';

export { localePath, altLocale, BOOKING_URL } from './utils';
export type { Locale } from './utils';

const translations = { es, en } as const;

export function useTranslations(locale: Locale) {
  return translations[locale];
}

export { es, en };
