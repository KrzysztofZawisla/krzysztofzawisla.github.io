import { memo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
interface LanguagePickerWrapperProperties {
  isLanguageMenuOpen: boolean;
  numberOfNotMainFlags: number;
}

const LanguagePickerWrapper = styled.div<LanguagePickerWrapperProperties>`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  > img {
    &:first-of-type {
      z-index: 1;
    }
    ${({ numberOfNotMainFlags, isLanguageMenuOpen }) => {
      const styles = [];
      for (let index = 2; index < 2 + numberOfNotMainFlags; index++) {
        styles.push(css`
          &:nth-of-type(${index}) {
            transform: translateY(
              ${isLanguageMenuOpen ? 0 : 55 * (index - 1) + "px"}
            );
          }
        `);
      }
      return [...styles];
    }}
    &:not(:first-of-type) {
      transition: all 0.3s;
      margin: 7.5px 0;
      visibility: ${({ isLanguageMenuOpen }) =>
        isLanguageMenuOpen ? "visible" : "hidden"};
    }
  }
`;

export default memo(LanguagePickerWrapper);
