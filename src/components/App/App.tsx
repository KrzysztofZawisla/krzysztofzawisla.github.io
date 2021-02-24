/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import {
  FC,
  lazy,
  LazyExoticComponent,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import GlobalStyle from "../GlobalStyle";
import Navbar from "../Navbar/Navbar";
import MainWrapper from "../MainWrapper";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import Footer from "../Footer/Footer";
import { useErrorBoundary } from "use-error-boundary";
import ErrorLoading from "../../pages/ErrorLoading";
import {
  GlobalContextValues,
  initialGlobalStoreValue,
  GlobalContextProvider,
  IsMobileDispatcher,
  IsMenuOpenOnMobileDispatcher,
  LanguageDispatcher,
} from "../../contexts/globalContext";
import { debounce } from "lodash";
import { i18n } from "i18next";
import { I18nextProvider } from "react-i18next";

const AboutMe: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/AboutMe"),
);
const Projects: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Projects"),
);
const Skills: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Skills"),
);
const Experience: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Experience"),
);
const Contact: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Contact"),
);

const {
  isMobile,
  isMenuOpenOnMobile,
  language,
}: GlobalContextValues = initialGlobalStoreValue;

export interface AppProperties {
  translation: i18n;
}

// eslint-disable-next-line react/prop-types
const App: FC<AppProperties> = ({ translation }): JSX.Element => {
  const [isMobileLocal, setIsMobileLocal]: IsMobileDispatcher = useState(
    isMobile,
  );
  const { ErrorBoundary, didCatch } = useErrorBoundary();
  const [
    isMenuOpenOnMobileLocal,
    setIsMenuOpenOnMobileLocal,
  ]: IsMenuOpenOnMobileDispatcher = useState(isMenuOpenOnMobile);
  const [languageLocal, setLanguageLocal]: LanguageDispatcher = useState(
    language,
  );
  useEffect(() => {
    const resizeHandler = (): void => {
      const isMobile: boolean = window.innerWidth < 768 ? true : false;
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
    // eslint-disable-next-line react/prop-types
    translation.changeLanguage(languageLocal);
  }, [languageLocal, setLanguageLocal, translation]);
  return (
    <StrictMode>
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
              <GlobalStyle />
              <Navbar />
              <div onClick={() => setIsMenuOpenOnMobileLocal(false)}>
                <MainWrapper>
                  {didCatch ? (
                    <ErrorLoading />
                  ) : (
                    <ErrorBoundary>
                      <Suspense fallback={<></>}>
                        <Switch>
                          <Route exact path="/" component={AboutMe} />
                          <Route exact path="/projects" component={Projects} />
                          <Route exact path="/skills" component={Skills} />
                          <Route
                            exact
                            path="/experience"
                            component={Experience}
                          />
                          <Route exact path="/contact" component={Contact} />
                        </Switch>
                      </Suspense>
                    </ErrorBoundary>
                  )}
                </MainWrapper>
                <Footer />
              </div>
              <LanguagePicker />
            </GlobalContextProvider>
          </BrowserRouter>
        </HelmetProvider>
      </I18nextProvider>
    </StrictMode>
  );
};

export default App;
