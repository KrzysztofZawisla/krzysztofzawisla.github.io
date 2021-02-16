import { i18n } from "i18next";
import initTranslations from "./translation";
import { expectType } from "tsd";
import { isEmpty } from "lodash";

describe("Translation", () => {
  it("Returns value", async () => {
    const translation: i18n = await initTranslations();
    expect(isEmpty(translation)).toBe(false);
    expect(translation).toBeTruthy();
  });
  it("Has correct type", async () => {
    expectType<i18n>(await initTranslations());
  });
});
