import Bold from "./Bold";
import { render } from "@testing-library/react";

test("Render Bold component", async (): Promise<void> => {
  render(<Bold>test</Bold>);
});
