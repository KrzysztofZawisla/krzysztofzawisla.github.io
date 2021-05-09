import Spliter, { SpliterType } from "@root/components/Spliter/Spliter";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { MemoExoticComponent } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("Spliter", () => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Spliter />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<MemoExoticComponent<SpliterType>>(Spliter);
  });
});
