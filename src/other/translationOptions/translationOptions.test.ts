import { InitOptions } from "i18next";
import translationsOptions from "./translationOptions";
import { expectType } from "tsd";
import { isEmpty } from "lodash";

describe("Translation Options", () => {
  it("Has correct type", () => {
    expectType<InitOptions>(translationsOptions);
  });
  it("Exists", () => {
    expect(translationsOptions).toBeTruthy();
    expect(isEmpty(translationsOptions)).toBe(false);
  });
});
