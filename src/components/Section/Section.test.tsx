import Section from "./Section";
import { render } from "@testing-library/react";

test("Render Section component", async (): Promise<void> => {
  render(<Section>test</Section>);
});
