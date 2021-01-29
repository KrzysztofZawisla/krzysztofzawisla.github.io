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
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import MainWrapper from "./components/MainWrapper";
import Footer from "./components/Footer/Footer";
import {
  GlobalContextValues,
  initialGlobalStoreValue,
  GlobalContextProvider,
  IsMobileDispatcher,
  IsMenuOpenOnMobileDispatcher,
} from "./context/globalContext";
import { debounce } from "lodash";

const Home: LazyExoticComponent<FC> = lazy(() => import("./pages/Home"));
const Projects: LazyExoticComponent<FC> = lazy(
  () => import("./pages/Projects"),
);
const Skills: LazyExoticComponent<FC> = lazy(() => import("./pages/Skills"));
const Experience: LazyExoticComponent<FC> = lazy(
  () => import("./pages/Experience"),
);
const Contact: LazyExoticComponent<FC> = lazy(() => import("./pages/Contact"));

const {
  isMobile,
  isMenuOpenOnMobile,
}: GlobalContextValues = initialGlobalStoreValue;

const App: FC = (): JSX.Element => {
  const [isMobileLocal, setIsMobileLocal]: IsMobileDispatcher = useState(
    isMobile,
  );
  const [
    isMenuOpenOnMobileLocal,
    setIsMenuOpenOnMobileLocal,
  ]: IsMenuOpenOnMobileDispatcher = useState(isMenuOpenOnMobile);
  useEffect(() => {
    const resizeHandler = (): void => {
      const isMobile: boolean = window.innerWidth < 768 ? true : false;
      setIsMobileLocal(isMobile);
    };
    const resizeLinstenerHandler = debounce(resizeHandler, 25);
    addEventListener("resize", resizeLinstenerHandler);
    return (): void => {
      removeEventListener("resize", resizeLinstenerHandler);
    };
  }, [setIsMobileLocal]);
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalContextProvider
            value={{
              isMobileDispatcher: [isMobileLocal, setIsMobileLocal],
              isMenuOpenOnMobileDispatcher: [
                isMenuOpenOnMobileLocal,
                setIsMenuOpenOnMobileLocal,
              ],
            }}
          >
            <GlobalStyle />
            <Navbar />
            <div
              onClick={() =>
                setIsMenuOpenOnMobileLocal(!isMenuOpenOnMobileLocal)
              }
            >
              <MainWrapper>
                <Suspense fallback={<></>}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/projects">
                      <Projects />
                    </Route>
                    <Route exact path="/skills">
                      <Skills />
                    </Route>
                    <Route exact path="/experience">
                      <Experience />
                    </Route>
                    <Route exact path="/contact">
                      <Contact />
                    </Route>
                  </Switch>
                </Suspense>
              </MainWrapper>
              <Footer />
            </div>
          </GlobalContextProvider>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
};

export default App;
