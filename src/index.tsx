import { render } from "react-dom";
import App from "./App";
import initTranslations from "./other/translation";

const root: HTMLElement | null = document.querySelector("#root");

(async () => {
  const translation = await initTranslations();
  render(<App translation={translation} />, root);
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./src/sw.js");
  });
}
