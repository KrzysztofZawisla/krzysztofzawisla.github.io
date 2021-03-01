import { memo, MemoExoticComponent } from "react";
import styled, { StyledComponent } from "styled-components";

export type MainWrapperType = MemoExoticComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<"main", never, {}, never>
>;

const MainWrapper = memo(styled.main`
  position: relative;
  min-height: 100vh;
  width: calc(100vw - 50px);
  left: 50px;
  padding: 0 7.5px 15px 7.5px;
`);

export default MainWrapper;
