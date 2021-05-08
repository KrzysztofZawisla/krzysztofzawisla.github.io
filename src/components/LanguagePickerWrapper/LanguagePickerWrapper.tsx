import { memo } from "react";
import styled, { css, StyledComponent } from "styled-components";

interface LanguagePickerWrapperProperties {
  isLanguageMenuOpen: boolean;
  numberOfNotMainFlags: number;
}

export type LanguagePickerWrapperType = StyledComponent<
  "div",
  never,
  LanguagePickerWrapperProperties,
  never
>;

const LanguagePickerWrapper = memo(styled.div<LanguagePickerWrapperProperties>`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  > img {
    &:first-child {
      z-index: 1;
    }
    ${({ numberOfNotMainFlags, isLanguageMenuOpen }) => {
      // eslint-disable-next-line sonarjs/no-unused-collection
      const styles = [];
      for (let index = 2; index < 2 + numberOfNotMainFlags; index++) {
        styles.push(css`
          &:nth-child(${index}) {
            transform: translateY(
              ${() => (isLanguageMenuOpen ? 0 : 55 * (index - 1) + "px")}
            );
          }
        `);
      }
      return [...styles];
    }}
    &:not(:first-child) {
      transition: all 0.3s;
      margin: 7.5px 0;
      visibility: ${({ isLanguageMenuOpen }) =>
        isLanguageMenuOpen ? "visible" : "hidden"};
    }
  }
`);

export default LanguagePickerWrapper;
