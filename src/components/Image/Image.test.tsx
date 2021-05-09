import Image from "@root/components/Image/Image";
import { render, cleanup, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("Image", () => {
  it("renders component properly", (): void => {
    const { container }: RenderResult = render(<Image />);
    expect(container).toMatchSnapshot();
  });
});
