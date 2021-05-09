import Flag, { FlagType } from "@root/components/Flag/Flag";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { MemoExoticComponent } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("Flag", () => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Flag />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<MemoExoticComponent<FlagType>>(Flag);
  });
});
