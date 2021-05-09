import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type FlagType = StyledComponent<
  "img",
  never,
  Record<string, unknown>,
  never
>;

const Flag: FlagType = styled.img`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #eee;
  position: relative;
`;

export default memo(Flag);
