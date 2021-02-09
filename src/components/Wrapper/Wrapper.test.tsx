import Wrapper from "./Wrapper";
import { render } from "@testing-library/react";

test("Render Wrapper component", async (): Promise<void> => {
  render(<Wrapper>test</Wrapper>);
});
