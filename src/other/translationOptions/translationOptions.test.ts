import { InitOptions, InterpolationOptions } from "i18next";
import translationsOptions from "./translationOptions";
import { expectType } from "tsd";
import { isEmpty } from "lodash";

interface BackendObject extends Object {
  loadPath: string;
}

describe("Translation Options", () => {
  it("Has correct type", () => {
    expectType<InitOptions>(translationsOptions);
  });
  it("Has english fallback", () => {
    expect(translationsOptions.fallbackLng).toBe("en");
  });
  it("Has load setted to languageOnly", () => {
    expect(translationsOptions.load).toBe("languageOnly");
  });
  it("Has correct loadPath", () => {
    const { backend }: InitOptions = translationsOptions;
    const { loadPath }: BackendObject = backend as BackendObject;
    expect(loadPath).toBe("./static/locales/{{lng}}.json");
  });
  it("Has disabled escapeValue interpolation", () => {
    const { interpolation }: InitOptions = translationsOptions;
    const {
      escapeValue,
    }: InterpolationOptions = interpolation as InterpolationOptions;
    expect(escapeValue).toBe(false);
  });
  it("Exists", () => {
    expect(translationsOptions).toBeTruthy();
    expect(isEmpty(translationsOptions)).toBe(false);
  });
});
