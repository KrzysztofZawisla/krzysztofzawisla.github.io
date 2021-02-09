import FooterWrapper from "./FooterWrapper";
import { render } from "@testing-library/react";

test("Render FooterWrapper component", async (): Promise<void> => {
  render(<FooterWrapper>test</FooterWrapper>);
});
