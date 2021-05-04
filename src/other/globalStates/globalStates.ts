import { createState } from "@hookstate/core";
import { Persistence } from "@hookstate/persistence";

export const isDarkThemeGlobal = createState(
  window.localStorage.getItem("isDarkTheme") === "true"
    ? true
    : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
);
isDarkThemeGlobal.attach(Persistence("isDarkTheme"));
