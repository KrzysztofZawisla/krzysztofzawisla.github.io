import { i18n } from "i18next";
import App from "./App";
import initTranslations from "./other/translation";
import { render } from "@testing-library/react";

test("Render App component", async () => {
  const translation: i18n = await initTranslations();
  render(<App translation={translation} />);
});
