import { FC, useContext, useEffect, useRef, useState } from "react";
import LanguagePickerWrapper from "./LanguagePickerWrapper";
import { CircleFlag } from "react-circle-flags";
import GlobalContext from "../../contexts/globalContext";
import { useTranslation } from "react-i18next";

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
  const mainFlagReference = useRef(null);
  const changeLanguage = (setEnglish: boolean) => {
    setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen);
    setIsEnglish(setEnglish);
    setLanguage(setEnglish ? "en" : "pl");
  };
  const { t } = useTranslation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getChildElementCount = (): void => {
    if (languagePickerWrapperReference.current !== null) {
      setChildElementCount(
        ((languagePickerWrapperReference.current as unknown) as HTMLElement)
          .childElementCount - 1,
      );
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setTimeout(getChildElementCount, 10);
    }
  };
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
      <CircleFlag
        countryCode={isEnglish ? "gb" : "pl"}
        height="50px"
        width="50px"
        loading="lazy"
        ref={mainFlagReference}
        onClick={() => setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen)}
        onMouseEnter={() => {
          setIsMouseOverLanguageMenu(true);
          !isMobile && setIsMenuOpenOnMobileLocal(true);
        }}
        alt={t(
          `languageSelector.${isEnglish ? "greatBritainFlag" : "polishFlag"}`,
        )}
        title={t(`languageSelector.${isMobile ? "clickTip" : "hoverTip"}`)}
      />
      <CircleFlag
        countryCode={isEnglish ? "pl" : "gb"}
        onClick={() => changeLanguage(isEnglish ? false : true)}
        height="50px"
        width="50px"
        loading="lazy"
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
