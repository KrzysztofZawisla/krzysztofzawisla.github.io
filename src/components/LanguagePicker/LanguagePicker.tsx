import { FC, memo, useCallback, useEffect, useRef } from "react";
import LanguagePickerWrapper from "@root/components/LanguagePickerWrapper/LanguagePickerWrapper";
import { useTranslation } from "react-i18next";
import Flag from "@root/components/Flag/Flag";
import {
  isMenuOpenOnMobileGlobal,
  isMobileGlobal,
  languageGlobal,
} from "@root/other/globalStates/globalStates";
import { useState } from "@hookstate/core";

// eslint-disable-next-line sonarjs/cognitive-complexity
const LanguagePicker: FC = (): JSX.Element => {
  const language = useState(languageGlobal);
  const isMobile = useState(isMobileGlobal);
  const isMenuOpenOnMobile = useState(isMenuOpenOnMobileGlobal);
  const isLanguageMenuOpen = useState(false);
  const isEnglish = useState(language.get() !== "pl" ? true : false);
  const childElementCount = useState(0);
  const isMouseOverLanguageMenu = useState(false);
  const languagePickerWrapperReference = useRef(null);
  const changeLanguage = (setEnglish: boolean) => {
    isLanguageMenuOpen.set((previousValue) => {
      return !previousValue;
    });
    isEnglish.set(setEnglish);
    language.set(setEnglish ? "en" : "pl");
  };
  const { t } = useTranslation();
  const getChildElementCount = useCallback((): void => {
    if (languagePickerWrapperReference.current !== null) {
      childElementCount.set(
        ((languagePickerWrapperReference.current as unknown) as HTMLElement)
          .childElementCount - 1,
      );
    } else {
      setTimeout(getChildElementCount, 10);
    }
  }, []);
  useEffect(() => {
    getChildElementCount();
  }, []);
  useEffect(() => {
    if (!isMouseOverLanguageMenu.get() && !isMobile.get()) {
      isMouseOverLanguageMenu.set(false);
      isMenuOpenOnMobile.set(false);
    }
  }, [isMobile.get()]);
  return (
    <LanguagePickerWrapper
      ref={languagePickerWrapperReference}
      isLanguageMenuOpen={isLanguageMenuOpen.get()}
      onMouseLeave={() => {
        isMouseOverLanguageMenu.set(false);
        !isMobile.get() && isMenuOpenOnMobile.set(false);
      }}
      numberOfNotMainFlags={childElementCount.get()}
    >
      <Flag
        onClick={() => {
          isLanguageMenuOpen.set((previousValue) => {
            return !previousValue;
          });
        }}
        loading="lazy"
        width="50px"
        height="50px"
        src={`${process.env.PUBLIC_URL}/images/${
          isEnglish.get() ? "gb" : "pl"
        }.svg`}
        onMouseEnter={() => {
          isMouseOverLanguageMenu.set(true);
          !isMobile.get() && isLanguageMenuOpen.set(true);
        }}
        alt={t(
          `languageSelector.${
            isEnglish.get() ? "greatBritainFlag" : "polishFlag"
          }`,
        )}
        title={t(`languageSelector.${isMobile ? "clickTip" : "hoverTip"}`)}
      />
      <Flag
        onClick={() => changeLanguage(!isEnglish.get())}
        loading="lazy"
        width="50px"
        height="50px"
        src={`${process.env.PUBLIC_URL}/images/${
          isEnglish.get() ? "pl" : "gb"
        }.svg`}
        onMouseEnter={() => {
          isMouseOverLanguageMenu.set(true);
          !isMobile.get() && isMenuOpenOnMobile.set(true);
        }}
        title={t(
          `languageSelector.${
            isEnglish.get() ? "changeToPolish" : "changeToEnglish"
          }`,
        )}
        alt={t(
          `languageSelector.${
            isEnglish.get() ? "polishFlag" : "greatBritainFlag"
          }`,
        )}
      />
    </LanguagePickerWrapper>
  );
};

export default memo(LanguagePicker);
