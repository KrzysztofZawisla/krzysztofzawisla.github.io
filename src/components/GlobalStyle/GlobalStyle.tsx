import { memo } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

export type GlobalStyleType = GlobalStyleComponent<unknown, DefaultTheme>;

const GlobalStyle: GlobalStyleType = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: "Catamaran", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100vw;
  }
  a {
    color: inherit;
    transition: all 0.3s;
    &:hover {
      color: #aaa;
    }
  }
`;

export default memo(GlobalStyle);
