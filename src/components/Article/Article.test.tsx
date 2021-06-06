/*import Article, { ArticleType } from "@root/components/Article/Article";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { MemoExoticComponent, ReactElement } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

const testText: string = "test";
const TestComponent: ReactElement = <Article>{testText}</Article>;

describe("Article", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(TestComponent);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<MemoExoticComponent<ArticleType>>(Article);
  });
});
*/

export {};
