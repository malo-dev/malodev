import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import es from './locales/es.json';

// Supported languages
export const SUPPORTED_LANGUAGES = {
  fr: { label: 'Français', nativeLabel: 'Français', rtl: false },
  en: { label: 'English', nativeLabel: 'English', rtl: false },
  ar: { label: 'Arabic', nativeLabel: 'العربية', rtl: true },
  es: { label: 'Spanish', nativeLabel: 'Español', rtl: false },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

/**
 * Detect the best matching language from the device locale.
 * Falls back to French (primary market).
 */
function detectLanguage(): LanguageCode {
  const locales = getLocales();
  if (!locales.length) return 'fr';

  const deviceLang = locales[0].languageCode;
  if (deviceLang && deviceLang in SUPPORTED_LANGUAGES) {
    return deviceLang as LanguageCode;
  }

  return 'fr';
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    ar: { translation: ar },
    es: { translation: es },
  },
  lng: detectLanguage(),
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false, // React already handles XSS
  },
  react: {
    useSuspense: false, // Avoid issues with Expo
  },
});

export default i18n;

/**
 * Change the app language at runtime.
 *
 * @example
 * ```ts
 * import { changeLanguage } from '@/i18n';
 * changeLanguage('en');
 * ```
 */
export async function changeLanguage(lang: LanguageCode): Promise<void> {
  await i18n.changeLanguage(lang);
}

/**
 * Check if the current language is RTL.
 */
export function isRTL(): boolean {
  const lang = i18n.language as LanguageCode;
  return SUPPORTED_LANGUAGES[lang]?.rtl ?? false;
}
