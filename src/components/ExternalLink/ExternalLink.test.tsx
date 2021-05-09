import ExternalLink, {
  ExternalLinkProperties,
} from "@root/components/ExternalLink/ExternalLink";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { FC, MemoExoticComponent, ReactElement } from "react";
import { expectType } from "tsd";

afterEach(cleanup);

describe("ExternalLink", (): void => {
  const testText: string = "test";
  const TestComponent: ReactElement = <ExternalLink>{testText}</ExternalLink>;
  it("renders component properly", (): void => {
    const { container }: RenderResult = render(TestComponent);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<MemoExoticComponent<FC<ExternalLinkProperties>>>(ExternalLink);
  });
});

export {};
