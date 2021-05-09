import { i18n as TranslationType } from "i18next";
import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import consoleGreetings from "./other/consoleGreetings/consoleGreetings";
import registerServiceWorker from "./other/registerServiceWorker/registerServiceWorker";
import initTranslations from "./other/translation/translation";

if (process.env.DEVELOPMENT) {
  const { getLCP, getFID, getCLS, getFCP, getTTFB } = await import(
    "web-vitals"
  );
  // eslint-disable-next-line no-console
  getLCP(console.log);
  // eslint-disable-next-line no-console
  getFID(console.log);
  // eslint-disable-next-line no-console
  getCLS(console.log);
  // eslint-disable-next-line no-console
  getFCP(console.log);
  // eslint-disable-next-line no-console
  getTTFB(console.log);
}

consoleGreetings();

const root: HTMLElement | null = document.querySelector("#root");

const translation: TranslationType = await initTranslations();
render(
  <StrictMode>
    <App translation={translation} />
  </StrictMode>,
  root,
);

if ("serviceWorker" in navigator) {
  registerServiceWorker(`./sw-${process.env.MODERN ? "modern" : "legacy"}.js`);
}
