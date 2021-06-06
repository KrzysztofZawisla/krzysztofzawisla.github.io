/*import LanguagePickerWrapper, {
  LanguagePickerWrapperType,
} from "@root/components/LanguagePickerWrapper/LanguagePickerWrapper";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { MemoExoticComponent } from "react";
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
    expectType<MemoExoticComponent<LanguagePickerWrapperType>>(
      LanguagePickerWrapper,
    );
  });
});
*/

export {};
