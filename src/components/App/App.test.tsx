import { i18n } from "i18next";
import App, { AppProperties } from "./App";
import initTranslations from "../../other/translation/translation";
import { cleanup, render } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("App", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: i18n = await initTranslations();
    const { container } = render(<App translation={translation} />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC<AppProperties>>(App);
  });
});
