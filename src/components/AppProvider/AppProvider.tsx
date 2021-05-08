import { i18n } from "i18next";
import { debounce } from "lodash";
import { FC, memo, ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  isMenuOpenOnMobileGlobal,
  isMobileGlobal,
  languageGlobal,
} from "../../other/globalStates/globalStates";
import { useState } from "@hookstate/core";

export interface AppProviderProperties {
  children: ReactNode;
  translation: i18n;
}

// eslint-disable-next-line react/display-name
const AppProvider: FC<AppProviderProperties> = memo(
  ({ children, translation }: AppProviderProperties): JSX.Element => {
    const isMobile = useState(isMobileGlobal);
    const isMenuOpenOnMobile = useState(isMenuOpenOnMobileGlobal);
    const language = useState(languageGlobal);
    useEffect(() => {
      const resizeHandler = (): void => {
        const isMobileSize: boolean = window.innerWidth < 768;
        !isMobileSize && isMenuOpenOnMobile.set(false);
        isMobile.set(isMobileSize);
      };
      const resizeLinstenerHandler = debounce(resizeHandler, 25);
      addEventListener("resize", resizeLinstenerHandler);
      return (): void => {
        removeEventListener("resize", resizeLinstenerHandler);
      };
    }, [isMobile.get()]);
    useEffect(() => {
      !isMobile.get() && isMenuOpenOnMobile.set(false);
    }, [isMobile.get()]);
    useEffect(() => {
      translation.changeLanguage(language.get());
    }, [language.get()]);
    return (
      <I18nextProvider i18n={translation}>
        <HelmetProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </HelmetProvider>
      </I18nextProvider>
    );
  },
);

export default AppProvider;
