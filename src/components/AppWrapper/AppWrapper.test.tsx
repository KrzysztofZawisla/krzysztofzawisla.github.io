import AppWrapper from "./AppWrapper";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import AppProvider from "../../components/AppProvider/AppProvider";
import { i18n } from "i18next";
import initTranslations from "../../other/translation/translation";

afterEach(cleanup);

describe("AppWrapper", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: i18n = await initTranslations();
    const { container }: RenderResult = render(
      <AppProvider translation={translation}>
        <AppWrapper />
      </AppProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC>(AppWrapper);
  });
});
