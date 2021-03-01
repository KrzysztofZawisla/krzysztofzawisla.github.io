import GlobalStyle, { GlobalStyleType } from "./GlobalStyle";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("GlobalStyle", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<GlobalStyle />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<GlobalStyleType>(GlobalStyle);
  });
});
