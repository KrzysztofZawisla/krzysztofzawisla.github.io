import { i18n } from "i18next";
import { render } from "react-dom";
import App from "./components/App/App";
import initTranslations from "./other/translation/translation";

if (process.env.DEVELOPMENT) {
  const { getLCP, getFID, getCLS } = await import("web-vitals");
  getLCP(console.log);
  getFID(console.log);
  getCLS(console.log);
}

const root: HTMLElement | null = document.querySelector("#root");

const translation: i18n = await initTranslations();
render(<App translation={translation} />, root);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    try {
      navigator.serviceWorker.register("./src/modern/sw.js");
    } catch {
      try {
        navigator.serviceWorker.register("./src/legacy/sw.js");
      } catch {
        // eslint-disable-next-line no-console
        console.error("Can't install service worker");
      }
    }
  });
}
