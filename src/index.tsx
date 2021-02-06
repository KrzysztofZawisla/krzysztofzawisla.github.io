import { i18n } from "i18next";
import { render } from "react-dom";
import App from "./App";
import initTranslations from "./other/translation";

const root: HTMLElement | null = document.querySelector("#root");

(async (): Promise<void> => {
  const translation: i18n = await initTranslations();
  render(<App translation={translation} />, root);
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    try {
      navigator.serviceWorker.register("./src/sw.js");
    } catch {
      // eslint-disable-next-line no-console
      console.error("Can't install service worker");
    }
  });
}
