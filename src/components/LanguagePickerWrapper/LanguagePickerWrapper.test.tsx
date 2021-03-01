import LanguagePickerWrapper, {
  LanguagePickerWrapperType,
} from "./LanguagePickerWrapper";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("LanguagePickerWrapper", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <LanguagePickerWrapper isLanguageMenuOpen={true} numberOfNotMainFlags={2}>
        test
      </LanguagePickerWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<LanguagePickerWrapperType>(LanguagePickerWrapper);
  });
});
