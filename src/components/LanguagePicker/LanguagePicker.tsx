import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import LanguagePickerWrapper from "./LanguagePickerWrapper";
import GlobalContext from "../../contexts/globalContext";
import { useTranslation } from "react-i18next";
import Flag from "../Flag/Flag";

// eslint-disable-next-line sonarjs/cognitive-complexity
const LanguagePicker: FC = (): JSX.Element => {
  const { languageDispatcher, isMobileDispatcher } = useContext(GlobalContext);
  const [isMobile] = isMobileDispatcher;
  const [language, setLanguage] = languageDispatcher;
  const [isLanguageMenuOpen, setIsMenuOpenOnMobileLocal] = useState(false);
  const [isEnglish, setIsEnglish] = useState(language !== "pl" ? true : false);
  const [childElementCount, setChildElementCount] = useState(0);
  const [isMouseOverLanguageMenu, setIsMouseOverLanguageMenu] = useState(false);
  const languagePickerWrapperReference = useRef(null);
  const changeLanguage = (setEnglish: boolean) => {
    setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen);
    setIsEnglish(setEnglish);
    setLanguage(setEnglish ? "en" : "pl");
  };
  const { t } = useTranslation();
  const getChildElementCount = useCallback((): void => {
    if (languagePickerWrapperReference.current !== null) {
      setChildElementCount(
        ((languagePickerWrapperReference.current as unknown) as HTMLElement)
          .childElementCount - 1,
      );
    } else {
      setTimeout(getChildElementCount, 10);
    }
  }, []);
  useEffect(() => {
    getChildElementCount();
  }, [getChildElementCount]);
  useEffect(() => {
    if (!isMouseOverLanguageMenu && !isMobile) {
      setIsMenuOpenOnMobileLocal(false);
    }
  }, [isMobile, isMouseOverLanguageMenu]);
  return (
    <LanguagePickerWrapper
      ref={languagePickerWrapperReference}
      isLanguageMenuOpen={isLanguageMenuOpen}
      onMouseLeave={() => {
        setIsMouseOverLanguageMenu(false);
        !isMobile && setIsMenuOpenOnMobileLocal(false);
      }}
      numberOfNotMainFlags={childElementCount}
    >
      <Flag
        onClick={() => setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen)}
        loading="lazy"
        width="50px"
        height="50px"
        src={`${process.env.PUBLIC_URL}/images/${isEnglish ? "gb" : "pl"}.svg`}
        onMouseEnter={() => {
          setIsMouseOverLanguageMenu(true);
          !isMobile && setIsMenuOpenOnMobileLocal(true);
        }}
        alt={t(
          `languageSelector.${isEnglish ? "greatBritainFlag" : "polishFlag"}`,
        )}
        title={t(`languageSelector.${isMobile ? "clickTip" : "hoverTip"}`)}
      />
      <Flag
        onClick={() => changeLanguage(isEnglish ? false : true)}
        loading="lazy"
        width="50px"
        height="50px"
        src={`${process.env.PUBLIC_URL}/images/${isEnglish ? "pl" : "gb"}.svg`}
        onMouseEnter={() => {
          setIsMouseOverLanguageMenu(true);
          !isMobile && setIsMenuOpenOnMobileLocal(true);
        }}
        title={t(
          `languageSelector.${
            isEnglish ? "changeToPolish" : "changeToEnglish"
          }`,
        )}
        alt={t(
          `languageSelector.${isEnglish ? "polishFlag" : "greatBritainFlag"}`,
        )}
      />
    </LanguagePickerWrapper>
  );
};

export default LanguagePicker;
