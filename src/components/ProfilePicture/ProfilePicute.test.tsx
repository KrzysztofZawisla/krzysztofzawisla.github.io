import ProfilePicture from "./ProfilePicture";
import { render, cleanup, screen, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("ProfilePicture", () => {
  it("renders component properly", (): void => {
    const { container }: RenderResult = render(<ProfilePicture />);
    expect(container).toMatchSnapshot();
  });
  it("have auto height", (): void => {
    render(<ProfilePicture />);
    const element: HTMLImageElement = screen.getByRole(
      "img",
    ) as HTMLImageElement;
    expect(element).toHaveStyleRule("height", "auto");
  });
});
