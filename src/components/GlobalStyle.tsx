import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100vw;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    &:hover {
      color: #aaa;
    }
  }
`;

export default GlobalStyle;
