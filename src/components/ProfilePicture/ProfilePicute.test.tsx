import ProfilePicture from "./ProfilePicture";
import { render, cleanup, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("ProfilePicture", () => {
  it("renders component properly", (): void => {
    const { container }: RenderResult = render(<ProfilePicture />);
    expect(container).toMatchSnapshot();
  });
});
