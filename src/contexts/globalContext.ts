import {
  createContext,
  Context,
  Provider,
  Dispatch,
  SetStateAction,
} from "react";
import i18n from "i18next";

export type GlobalContext = Context<GlobalContextCompleteValues>;
type GlobalContextProvider = Provider<GlobalContextCompleteValues>;

export type IsMobileDispatcher = [boolean, Dispatch<SetStateAction<boolean>>];
export type IsMenuOpenOnMobileDispatcher = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
];
export type LanguageDispatcher = [string, Dispatch<SetStateAction<string>>];

export interface GlobalContextCompleteValues {
  isMobileDispatcher: IsMobileDispatcher;
  languageDispatcher: LanguageDispatcher;
  isMenuOpenOnMobileDispatcher: IsMenuOpenOnMobileDispatcher;
}

export interface GlobalContextValues {
  isMobile: boolean;
  language: string;
  isMenuOpenOnMobile: boolean;
}

export const initialGlobalStoreValue: GlobalContextValues = {
  isMobile: window.innerWidth < 768 ? true : false,
  isMenuOpenOnMobile: false,
  language:
    i18n.language || window.localStorage.i18nextLng || window.navigator.language
      ? (
          i18n.language ||
          window.localStorage.i18nextLng ||
          window.navigator.language
        ).slice(0, 2)
      : "en",
};

const GlobalContext: GlobalContext = createContext<GlobalContextCompleteValues>(
  (initialGlobalStoreValue as unknown) as GlobalContextCompleteValues,
);
export const GlobalContextProvider: GlobalContextProvider =
  GlobalContext.Provider;

export default GlobalContext;
