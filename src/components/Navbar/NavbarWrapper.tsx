import styled, { css } from "styled-components";

interface NavbarWrapperProperties {
  isMenuOpenOnMobile: boolean;
  isMobile: boolean;
}

const NavbarWrapper = styled.nav<NavbarWrapperProperties>`
  color: #111;
  background: #eee;
  width: 210px;
  height: 100vh;
  padding-right: 50px;
  position: fixed;
  z-index: 2;
  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
  left: ${({ isMenuOpenOnMobile }) =>
    isMenuOpenOnMobile ? "-150px" : "-160px"};
  transition: all 0.3s;
  ${({ isMenuOpenOnMobile, isMobile }) =>
    isMenuOpenOnMobile &&
    isMobile &&
    css`
      transform: translate3d(150px, 0, 0);
      animation-timing-function: 1s ease-in;
    `}
  @media screen and (min-width: 768px) {
    &:focus,
    &:hover {
      transform: translate3d(150px, 0, 0);
      animation-timing-function: 1s ease-in;
    }
  }
`;

export default NavbarWrapper;
