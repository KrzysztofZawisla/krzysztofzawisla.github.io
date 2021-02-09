import Article from "./Article";
import { render } from "@testing-library/react";

test("Render Article component", async (): Promise<void> => {
  render(<Article>test</Article>);
});
