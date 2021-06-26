import i18next, {
  i18n as TranslationType,
  Module,
  ThirdPartyModule,
} from "i18next";
import i18nextDetector from "i18next-browser-languagedetector";
import translationsOptions, {
  TranslationOptions,
} from "@root/other/translationOptions/translationOptions";
import chainedBackend from "i18next-chained-backend";

type InitTranslations = () => Promise<TranslationType>;
type SetupTranslation = <T extends Module>(
  translation: TranslationType,
  options: TranslationOptions,
  ...modules: T[]
) => Promise<TranslationType>;

const fixedI18NextDetector: ThirdPartyModule =
  i18nextDetector as unknown as ThirdPartyModule;
const fixedChainedBackend: ThirdPartyModule =
  chainedBackend as unknown as ThirdPartyModule;

export const setupTranslation: SetupTranslation = async <T extends Module>(
  translation: TranslationType,
  options: TranslationOptions,
  ...modules: T[]
): Promise<TranslationType> => {
  modules.forEach((module: T) => {
    translation = translation.use(module);
  });
  await translation.init(options);
  return translation;
};

const initTranslations: InitTranslations =
  async (): Promise<TranslationType> => {
    return await setupTranslation(
      i18next,
      translationsOptions,
      fixedChainedBackend,
      fixedI18NextDetector,
    );
  };

export default initTranslations;
