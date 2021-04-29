import { i18n } from "i18next";
import { debounce } from "lodash";
import { FC, ReactNode, useEffect, useState } from "react";
import {
  GlobalContextValues,
  initialGlobalStoreValue,
  IsMobileDispatcher,
  IsMenuOpenOnMobileDispatcher,
  LanguageDispatcher,
  GlobalContextProvider,
} from "../../contexts/globalContext";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export interface AppProviderProperties {
  children: ReactNode;
  translation: i18n;
}

const {
  isMobile,
  isMenuOpenOnMobile,
  language,
}: GlobalContextValues = initialGlobalStoreValue;

const AppProvider: FC<AppProviderProperties> = ({
  children,
  translation,
}: AppProviderProperties): JSX.Element => {
  const [isMobileLocal, setIsMobileLocal]: IsMobileDispatcher = useState(
    isMobile,
  );
  const [
    isMenuOpenOnMobileLocal,
    setIsMenuOpenOnMobileLocal,
  ]: IsMenuOpenOnMobileDispatcher = useState(isMenuOpenOnMobile);
  const [languageLocal, setLanguageLocal]: LanguageDispatcher = useState(
    language,
  );
  useEffect(() => {
    const resizeHandler = (): void => {
      const isMobile: boolean = window.innerWidth < 768;
      !isMobile && setIsMenuOpenOnMobileLocal(false);
      setIsMobileLocal(isMobile);
    };
    const resizeLinstenerHandler = debounce(resizeHandler, 25);
    addEventListener("resize", resizeLinstenerHandler);
    return (): void => {
      removeEventListener("resize", resizeLinstenerHandler);
    };
  }, [setIsMobileLocal]);
  useEffect(() => {
    !isMobileLocal && setIsMenuOpenOnMobileLocal(false);
  }, [isMobileLocal, setIsMenuOpenOnMobileLocal]);
  useEffect(() => {
    translation.changeLanguage(languageLocal);
  }, [languageLocal, setLanguageLocal, translation]);
  return (
    <I18nextProvider i18n={translation}>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalContextProvider
            value={{
              isMobileDispatcher: [isMobileLocal, setIsMobileLocal],
              isMenuOpenOnMobileDispatcher: [
                isMenuOpenOnMobileLocal,
                setIsMenuOpenOnMobileLocal,
              ],
              languageDispatcher: [languageLocal, setLanguageLocal],
            }}
          >
            {children}
          </GlobalContextProvider>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  );
};

export default AppProvider;
