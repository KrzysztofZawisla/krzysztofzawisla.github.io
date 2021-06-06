import Projects from "@root/pages/Projects/Projects";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import AppProvider from "@root/components/AppProvider/AppProvider";
import { i18n as Translation } from "i18next";
import initTranslations from "@root/other/translation/translation";

afterEach(cleanup);

describe("Projects", () => {
  it("Renders component properly", async (): Promise<void> => {
    const translation: Translation = await initTranslations();
    const { container }: RenderResult = render(
      <AppProvider translation={translation}>
        <Projects />
      </AppProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC>(Projects);
  });
});
