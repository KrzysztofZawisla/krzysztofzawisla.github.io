import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type BoldType = StyledComponent<
  "span",
  never,
  Record<string, unknown>,
  never
>;

const Bold = memo(styled.span`
  font-weight: 700;
`);

export default Bold;
