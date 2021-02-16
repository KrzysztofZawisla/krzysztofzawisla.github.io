import Wrapper from "./Wrapper";
import { cleanup, render, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("Wrapper", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Wrapper>test</Wrapper>);
    expect(container).toMatchSnapshot();
  });
});
