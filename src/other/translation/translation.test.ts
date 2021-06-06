import { i18n as Translation } from "i18next";
import initTranslations from "@root/other/translation/translation";
import { expectType } from "tsd";
import { isEmpty } from "lodash";

describe("Translation", () => {
  it("Returns value", async () => {
    const translation: Translation = await initTranslations();
    expect(isEmpty(translation)).toBe(false);
    expect(translation).toBeTruthy();
  });
  it("Has correct type", async () => {
    expectType<Translation>(await initTranslations());
  });
});
