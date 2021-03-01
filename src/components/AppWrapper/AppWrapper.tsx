/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  FC,
  Suspense,
  useContext,
  LazyExoticComponent,
  lazy,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Switch, Route } from "react-router-dom";
import useErrorBoundary, { UseErrorBoundaryState } from "use-error-boundary";
import GlobalContext, {
  GlobalContextCompleteValues,
  IsMenuOpenOnMobileDispatcher,
} from "../../contexts/globalContext";
import handleMenuClose from "../../other/handleMenuClose";
import AboutMe from "../../pages/AboutMe/AboutMe";
import ErrorLoading from "../../pages/ErrorLoading/ErrorLoading";
import Footer from "../Footer/Footer";
import GlobalStyle from "../GlobalStyle";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import MainWrapper from "../MainWrapper";
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

const AppWrapper: FC = (): JSX.Element => {
  const {
    isMenuOpenOnMobileDispatcher,
  }: GlobalContextCompleteValues = useContext(GlobalContext);
  const [
    ,
    setIsMenuOpenOnMobile,
  ]: IsMenuOpenOnMobileDispatcher = isMenuOpenOnMobileDispatcher;
  const { ErrorBoundary, didCatch }: UseErrorBoundaryState = useErrorBoundary();
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div
        onKeyPress={(event: ReactKeyboardEvent<HTMLDivElement>) => {
          handleMenuClose(event, setIsMenuOpenOnMobile);
        }}
        tabIndex={0}
        onClick={(): void => setIsMenuOpenOnMobile(false)}
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
};

export default AppWrapper;
