import ExternalLink, { ExternalLinkProperties } from "./ExternalLink";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { FC, ReactElement } from "react";
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
    expectType<FC<ExternalLinkProperties>>(ExternalLink);
  });
});
