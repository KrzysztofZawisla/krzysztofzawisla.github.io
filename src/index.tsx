import { i18n } from "i18next";
import { render } from "react-dom";
import App from "./components/App/App";
import consoleGreetings from "./other/consoleGreetings/consoleGreetings";
import registerServiceWorker from "./other/registerServiceWorker/registerServiceWorker";
import initTranslations from "./other/translation/translation";

if (process.env.DEVELOPMENT) {
  const { getLCP, getFID, getCLS } = await import("web-vitals");
  // eslint-disable-next-line no-console
  getLCP(console.log);
  // eslint-disable-next-line no-console
  getFID(console.log);
  // eslint-disable-next-line no-console
  getCLS(console.log);
}

consoleGreetings();

const root: HTMLElement | null = document.querySelector("#root");

const translation: i18n = await initTranslations();
render(<App translation={translation} />, root);

if ("serviceWorker" in navigator) {
  try {
    registerServiceWorker("./src/modern/sw.js");
  } catch {
    try {
      registerServiceWorker("./src/legacy/sw.js");
    } catch {
      // eslint-disable-next-line no-console
      console.error("Can't install service worker");
    }
  }
}
