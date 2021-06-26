import i18nextBackend from "i18next-xhr-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { InitOptions } from "i18next";

export interface TranslationOptions extends InitOptions {
  backend: Record<string, unknown>;
}

const translationsOptions: TranslationOptions = {
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
