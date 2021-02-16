import { i18n } from "i18next";
import initTranslations from "./translation";
import { expectType } from "tsd";

describe("Translation", () => {
  it("Returns value", async () => {
    const translation: i18n = await initTranslations();
    expectType<i18n>(translation);
    expect(translation).toBeTruthy();
  });
});
