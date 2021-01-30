import { InitOptions } from "i18next";

const translationsOptions: InitOptions = {
  load: "languageOnly",
  backend: {
    loadPath: "./static/locales/{{lng}}.json",
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

export default translationsOptions;