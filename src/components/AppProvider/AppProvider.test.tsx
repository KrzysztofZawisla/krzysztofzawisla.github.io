import AppProvider, {
  AppProviderProperties,
} from "@root/components/AppProvider/AppProvider";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import { i18n } from "i18next";
import initTranslations from "@root/other/translation/translation";

afterEach(cleanup);

describe("AppProvider", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: i18n = await initTranslations();
    const { container }: RenderResult = render(
      <AppProvider translation={translation}>
        <></>
      </AppProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC<AppProviderProperties>>(AppProvider);
  });
});
