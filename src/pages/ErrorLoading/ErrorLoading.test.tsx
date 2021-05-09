import ErrorLoading from "@root/pages/ErrorLoading/ErrorLoading";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import AppProvider from "@root/components/AppProvider/AppProvider";
import { i18n } from "i18next";
import initTranslations from "@root/other/translation/translation";

afterEach(cleanup);

describe("ErrorLoading", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: i18n = await initTranslations();
    const { container }: RenderResult = render(
      <AppProvider translation={translation}>
        <ErrorLoading />
      </AppProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC>(ErrorLoading);
  });
});
