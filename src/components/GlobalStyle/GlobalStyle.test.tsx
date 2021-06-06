/*import GlobalStyle, {
  GlobalStyleType,
} from "@root/components/GlobalStyle/GlobalStyle";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { MemoExoticComponent } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("GlobalStyle", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<GlobalStyle />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<MemoExoticComponent<GlobalStyleType>>(GlobalStyle);
  });
});*/

export {};
