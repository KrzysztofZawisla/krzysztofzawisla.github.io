import Wrapper, { WrapperType } from "./Wrapper";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("Wrapper", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Wrapper>test</Wrapper>);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<WrapperType>(Wrapper);
  });
});
