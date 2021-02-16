import { i18n } from "i18next";
import initTranslations from "./translation";

describe("Translation", () => {
  it("Returns value", async () => {
    const translation: i18n = await initTranslations();
    expect(translation).toBeTruthy();
  });
});
