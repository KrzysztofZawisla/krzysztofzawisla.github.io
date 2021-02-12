import { i18n } from "i18next";
import App from "./App";
import initTranslations from "../../other/translation";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("App", () => {
  it("renders component properly", async (): Promise<void> => {
    const translation: i18n = await initTranslations();
    const { container } = render(<App translation={translation} />);
    expect(container).toMatchSnapshot();
  });
});
