/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "@hookstate/core";
import {
  FC,
  Suspense,
  LazyExoticComponent,
  lazy,
  KeyboardEvent as ReactKeyboardEvent,
  memo,
} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useErrorBoundary, { UseErrorBoundaryState } from "use-error-boundary";
import { isMenuOpenOnMobileGlobal } from "../../other/globalStates/globalStates";
import handleMenuClose from "../../other/handleMenuClose";
import AboutMe from "../../pages/AboutMe/AboutMe";
import ErrorLoading from "../../pages/ErrorLoading/ErrorLoading";
import Footer from "../Footer/Footer";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import MainWrapper from "../MainWrapper/MainWrapper";
import Navbar from "../Navbar/Navbar";

const Projects: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Projects/Projects"),
);
const Skills: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Skills/Skills"),
);
const Experience: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Experience/Experience"),
);
const Contact: LazyExoticComponent<FC> = lazy(
  () => import("../../pages/Contact/Contact"),
);

// eslint-disable-next-line react/display-name
const AppWrapper: FC = memo(
  (): JSX.Element => {
    const isMenuOpenOnMobile = useState(isMenuOpenOnMobileGlobal);
    const {
      ErrorBoundary,
      didCatch,
    }: UseErrorBoundaryState = useErrorBoundary();
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <div
          onKeyPress={(event: ReactKeyboardEvent<HTMLDivElement>) => {
            handleMenuClose(event, isMenuOpenOnMobile.set);
          }}
          tabIndex={0}
          onClick={(): void => isMenuOpenOnMobile.set(false)}
        >
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
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/contact" component={Contact} />
                    <Route render={() => <Redirect to="/" />} />
                  </Switch>
                </Suspense>
              </ErrorBoundary>
            )}
          </MainWrapper>
          <Footer />
        </div>
        <LanguagePicker />
      </>
    );
  },
);

export default AppWrapper;
