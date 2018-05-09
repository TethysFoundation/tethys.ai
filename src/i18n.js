import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './translations/en';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,

    interpolation: {
      escapeValue: false, // React already handles escaping
    },

    react: {
      wait: false,
    },

    resources: {
      en,
    },
  });

export default i18n;
