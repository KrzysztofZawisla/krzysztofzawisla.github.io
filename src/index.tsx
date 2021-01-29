import { render } from "react-dom";

import App from "./App";

const root: HTMLElement | null = document.querySelector("#root");

(async () => {
  render(<App />, root);
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./src/sw.js");
  });
}
