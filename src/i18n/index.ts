import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslation from "./locales/en/translation.json";
import viTranslation from "./locales/vi/translation.json";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    lng: "vi", // default language
    fallbackLng: "vi",
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
