import { i18n as TranslationType } from "i18next";
import App, { AppProperties } from "@root/components/App/App";
import initTranslations from "@root/other/translation/translation";
import { cleanup, render } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("App", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: TranslationType = await initTranslations();
    const { container } = render(<App translation={translation} />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC<AppProperties>>(App);
  });
});
