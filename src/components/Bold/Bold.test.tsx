import Bold from "./Bold";
import { render, cleanup, screen, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";

afterEach(cleanup);

const testText: string = "test";
const TestComponent: ReactElement = <Bold>{testText}</Bold>;

describe("Bold", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(TestComponent);
    expect(container).toMatchSnapshot();
    expect(await screen.findByText(testText)).toBeInTheDocument();
  });
  it("is bold", async (): Promise<void> => {
    render(TestComponent);
    const element: HTMLSpanElement = screen.getByText(
      testText,
    ) as HTMLSpanElement;
    expect(element).toHaveStyleRule("font-weight", "700");
  });
});
