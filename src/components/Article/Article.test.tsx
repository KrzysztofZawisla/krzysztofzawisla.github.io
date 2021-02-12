import Article from "./Article";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";

afterEach(cleanup);

const testText: string = "test";
const TestComponent: ReactElement = <Article>{testText}</Article>;

describe("Article", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(TestComponent);
    expect(container).toMatchSnapshot();
  });
});
