import { FC, useContext, useRef, useState } from "react";
import LanguagePickerWrapper from "./LanguagePickerWrapper";
import { CircleFlag } from "react-circle-flags";
import GlobalContext from "../../contextes/globalContext";

const LanguagePicker: FC = (): JSX.Element => {
  const { languageDispatcher, isMobileDispatcher } = useContext(GlobalContext);
  const [isMobile] = isMobileDispatcher;
  const [language, setLanguage] = languageDispatcher;
  const [isLanguageMenuOpen, setIsMenuOpenOnMobileLocal] = useState(false);
  const [isEnglish, setIsEnglish] = useState(language !== "pl" ? true : false);
  const languagePickerWrapperReference = useRef(null);
  const mainFlagReference = useRef(null);
  const changeLanguage = (setEnglish: boolean) => {
    setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen);
    setIsEnglish(setEnglish);
    setLanguage(setEnglish ? "en" : "pl");
  };
  return (
    <LanguagePickerWrapper
      ref={languagePickerWrapperReference}
      isLanguageMenuOpen={isLanguageMenuOpen}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsMenuOpenOnMobileLocal(true);
        }
      }}
      onMouseLeave={() => {
        setIsMenuOpenOnMobileLocal(false);
      }}
      numberOfNotMainFlags={(() => {
        try {
          return (
            ((languagePickerWrapperReference?.current as unknown) as HTMLElement)
              .childElementCount - 1
          );
        } catch {
          return 0;
        }
      })()}
    >
      <CircleFlag
        countryCode={isEnglish ? "gb" : "pl"}
        height="50px"
        ref={mainFlagReference}
        onClick={() => setIsMenuOpenOnMobileLocal(!isLanguageMenuOpen)}
      />
      <CircleFlag
        countryCode={isEnglish ? "pl" : "gb"}
        onClick={() => changeLanguage(isEnglish ? false : true)}
        height="50px"
      />
    </LanguagePickerWrapper>
  );
};

export default LanguagePicker;
