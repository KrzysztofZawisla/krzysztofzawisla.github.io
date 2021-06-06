import { Global, css } from "@emotion/react";
import { FC, memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
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
      `}
    />
  );
};

export default memo(GlobalStyle);
