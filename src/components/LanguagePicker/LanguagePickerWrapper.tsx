import styled, { css } from "styled-components";

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
    border-radius: 100%;
    border: solid 1px #eee;
    position: relative;
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
      display: ${({ isLanguageMenuOpen }) =>
        isLanguageMenuOpen ? "inherit" : "none"};
    }
  }
`;

export default LanguagePickerWrapper;