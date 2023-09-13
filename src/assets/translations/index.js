import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

const deviceLanguage = getLocales()[0]?.languageCode;

let defaultLanguage = 'spanish';

if (deviceLanguage === 'es') {
  defaultLanguage = 'spanish';
} else if (deviceLanguage === 'en') {
  defaultLanguage = 'english';
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/assets/translations/locales/{{lng}}.json',
    },
    compatibilityJSON: 'v3',
    debug: false,
    fallbackLng: 'english',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    lng: defaultLanguage,
    react: {
      useSuspense: false,
    },
    resources: {
      english: { translation: require('./locales/english.json') },
      spanish: { translation: require('./locales/spanish.json') },
    },
  })
  .then(() => {})
  .catch(() => {});

export default i18n;
