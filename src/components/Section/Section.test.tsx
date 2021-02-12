import Section from "./Section";
import { cleanup, render, RenderResult } from "@testing-library/react";

afterEach(cleanup);

describe("Section", (): void => {
  it("renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<Section>test</Section>);
    expect(container).toMatchSnapshot();
  });
});
