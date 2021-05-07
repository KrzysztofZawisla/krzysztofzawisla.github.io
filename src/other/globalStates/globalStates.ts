import { createState } from "@hookstate/core";
import { Persistence } from "@hookstate/persistence";
import i18n from "i18next";

export const isDarkThemeGlobal = createState(
  window.localStorage.getItem("isDarkTheme") === "true"
    ? true
    : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
);
export const isMobileGlobal = createState(
  window.innerWidth < 768 ? true : false,
);
export const languageGlobal = createState(
  i18n.language || window.localStorage.i18nextLng || window.navigator.language
    ? (
        i18n.language ||
        window.localStorage.i18nextLng ||
        window.navigator.language
      ).slice(0, 2)
    : "en",
);
export const isMenuOpenOnMobileGlobal = createState(false);

isDarkThemeGlobal.attach(Persistence("isDarkTheme"));
