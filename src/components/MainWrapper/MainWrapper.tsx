import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type MainWrapperType = StyledComponent<
  "main",
  never,
  Record<string, unknown>,
  never
>;

const MainWrapper: MainWrapperType = styled.main`
  position: relative;
  min-height: 100vh;
  width: calc(100vw - 50px);
  left: 50px;
  padding: 0 7.5px 15px 7.5px;
`;

export default memo(MainWrapper);
