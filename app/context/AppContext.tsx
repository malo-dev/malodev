import React, { createContext, useContext, useState } from 'react';

/* ─── Types ─────────────────────────────────────────────── */
export type Lang = 'FR' | 'EN' | 'AR';

/* ─── Translations ───────────────────────────────────────── */
const T = {
  FR: {
    // Tabs
    home: 'Accueil', search: 'Recherche', market: 'Marché',
    favorites: 'Favoris', profile: 'Profil',
    // Profile menu
    settings: 'Paramètres', history: 'Historique',
    notifications: 'Notifications', about: 'À propos de IcePasse',
    darkMode: 'Mode sombre', language: 'Langue',
    logout: 'Se déconnecter',
    // Common
    back: 'Retour', save: 'Enregistrer', cancel: 'Annuler',
    confirm: 'Confirmer', verify: 'Vérifier', send: 'Envoyer',
    // Auth
    login: 'Se connecter', register: "S'inscrire",
    email: 'Email / Téléphone', password: 'Mot de passe',
    forgotPassword: 'Mot de passe oublié ?',
    // Home
    topEvents: 'Top Events selon nos goûts',
    nearYou: 'Événements proches de vous',
    topDeals: 'Top Deals',
    // Market
    buy: 'Acheter',
    // Ticket
    myTickets: 'Mes Billets',
    // IceCash
    myBalance: 'Mon Solde :',
    recharge: 'Recharger', pay: 'Payer',
    payment: 'Payement',
    // KYC
    verifyIdentity: "Vérifier mon identité (KYC)",
    kycValid: 'KYC valide',
    // Settings
    account: 'Compte', preferences: 'Préférences', danger: 'Danger',
    // History
    all: 'Tout', purchases: 'Achats', recharges: 'Recharges',
    // About
    version: 'Version',
  },
  EN: {
    home: 'Home', search: 'Search', market: 'Market',
    favorites: 'Favorites', profile: 'Profile',
    settings: 'Settings', history: 'History',
    notifications: 'Notifications', about: 'About IcePasse',
    darkMode: 'Dark mode', language: 'Language',
    logout: 'Log out',
    back: 'Back', save: 'Save', cancel: 'Cancel',
    confirm: 'Confirm', verify: 'Verify', send: 'Send',
    login: 'Sign in', register: 'Sign up',
    email: 'Email / Phone', password: 'Password',
    forgotPassword: 'Forgot password?',
    topEvents: 'Top Events for you',
    nearYou: 'Events near you',
    topDeals: 'Top Deals',
    buy: 'Buy',
    myTickets: 'My Tickets',
    myBalance: 'My Balance:',
    recharge: 'Top up', pay: 'Pay',
    payment: 'Payment',
    verifyIdentity: 'Verify my identity (KYC)',
    kycValid: 'KYC valid',
    account: 'Account', preferences: 'Preferences', danger: 'Danger',
    all: 'All', purchases: 'Purchases', recharges: 'Top-ups',
    version: 'Version',
  },
  AR: {
    home: 'الرئيسية', search: 'بحث', market: 'السوق',
    favorites: 'المفضلة', profile: 'الملف الشخصي',
    settings: 'الإعدادات', history: 'السجل',
    notifications: 'الإشعارات', about: 'حول IcePasse',
    darkMode: 'الوضع الداكن', language: 'اللغة',
    logout: 'تسجيل الخروج',
    back: 'رجوع', save: 'حفظ', cancel: 'إلغاء',
    confirm: 'تأكيد', verify: 'تحقق', send: 'إرسال',
    login: 'تسجيل الدخول', register: 'إنشاء حساب',
    email: 'البريد / الهاتف', password: 'كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    topEvents: 'أفضل الفعاليات لك',
    nearYou: 'فعاليات قريبة منك',
    topDeals: 'أفضل العروض',
    buy: 'شراء',
    myTickets: 'تذاكري',
    myBalance: 'رصيدي:',
    recharge: 'شحن', pay: 'دفع',
    payment: 'الدفع',
    verifyIdentity: 'التحقق من الهوية (KYC)',
    kycValid: 'KYC موثّق',
    account: 'الحساب', preferences: 'التفضيلات', danger: 'خطر',
    all: 'الكل', purchases: 'المشتريات', recharges: 'الشحن',
    version: 'الإصدار',
  },
} as const;

export type TKey = keyof typeof T.FR;

/* ─── Theme ──────────────────────────────────────────────── */
export const lightTheme = {
  bg: '#FFFFFF',
  card: '#FFFFFF',
  cardSecondary: '#F8FAFC',
  text: '#1A1A2E',
  subtext: '#64748B',
  placeholder: '#94A3B8',
  border: '#E2E8F0',
  icon: '#3B82F6',
  iconBg: '#EFF6FF',
  divider: '#F1F5F9',
  input: '#F8FAFC',
  tabBar: '#FFFFFF',
  tabBorder: '#E2E8F0',
};

export const darkTheme = {
  bg: '#0F172A',
  card: '#1E293B',
  cardSecondary: '#0F172A',
  text: '#F1F5F9',
  subtext: '#94A3B8',
  placeholder: '#64748B',
  border: '#334155',
  icon: '#60A5FA',
  iconBg: '#1E3A5F',
  divider: '#1E293B',
  input: '#0F172A',
  tabBar: '#1E293B',
  tabBorder: '#334155',
};

export type AppTheme = typeof lightTheme;

/* ─── Context ────────────────────────────────────────────── */
interface AppContextType {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  language: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: TKey) => string;
  theme: AppTheme;
  isRTL: boolean;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Lang>('FR');

  const theme = darkMode ? darkTheme : lightTheme;
  const isRTL = language === 'AR';

  const t = (key: TKey): string => T[language][key] ?? T.FR[key];

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, language, setLanguage, t, theme, isRTL }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
