import FooterWrapper from "@root/components/FooterWrapper/FooterWrapper";
import { cleanup, render, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("FooterWrapper", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <FooterWrapper>test</FooterWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
