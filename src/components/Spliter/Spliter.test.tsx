import Spliter, { SpliterType } from "./Spliter";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("Spliter", () => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Spliter />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<SpliterType>(Spliter);
  });
});
