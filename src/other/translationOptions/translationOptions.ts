import { InitOptions } from "i18next";

const translationsOptions: InitOptions = {
  load: "languageOnly",
  backend: {
    loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}.json`,
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

export default translationsOptions;
