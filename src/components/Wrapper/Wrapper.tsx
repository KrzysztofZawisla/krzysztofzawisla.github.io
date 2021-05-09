import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type WrapperType = StyledComponent<
  "div",
  never,
  Record<string, unknown>,
  never
>;

const Wrapper: WrapperType = styled.div`
  width: 80%;
  margin: 0 auto;
  word-break: break-word;
`;

export default memo(Wrapper);
