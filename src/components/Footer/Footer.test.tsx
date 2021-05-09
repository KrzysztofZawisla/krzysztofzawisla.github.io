import Footer from "@root/components/Footer/Footer";
import { cleanup, render, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("Footer", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
