import i18next, { i18n, InitOptions, Module, ThirdPartyModule } from "i18next";
import i18nextDetector from "i18next-browser-languagedetector";
import i18nextBackend from "i18next-xhr-backend";
import translationsOptions from "./translationOptions";

type InitTranslations = () => Promise<i18n>;
type SetupTranslation = <T extends Module>(
  translation: i18n,
  options: InitOptions,
  ...modules: T[]
) => Promise<i18n>;

const fixedI18NextDetector: ThirdPartyModule = (i18nextDetector as unknown) as ThirdPartyModule;
const fixedI18NextBackend: ThirdPartyModule = (i18nextBackend as unknown) as ThirdPartyModule;

export const setupTranslation: SetupTranslation = async <T extends Module>(
  translation: i18n,
  options: InitOptions,
  ...modules: T[]
): Promise<i18n> => {
  modules.forEach((module: T) => {
    translation = translation.use(module);
  });
  await translation.init(options);
  return translation;
};

const initTranslations: InitTranslations = async (): Promise<i18n> => {
  return await setupTranslation(
    i18next,
    translationsOptions,
    fixedI18NextDetector,
    fixedI18NextBackend,
  );
};

export default initTranslations;
