import i18nextBackend from "i18next-xhr-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

const translationsOptions = {
  load: "languageOnly",
  backend: {
    backends: [LocalStorageBackend, i18nextBackend],
    backendOptions: [
      {},
      {
        loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}.json`,
      },
    ],
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

export default translationsOptions;
