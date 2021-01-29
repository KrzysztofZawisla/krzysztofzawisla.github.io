/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarSpliter from "./NavbarSpliter";
import NavbarWrapper from "./NavbarWrapper";
import NavbarTitle from "./NavbarTitle";
import NavbarMenu from "./NavbarMenu";
import NavbarItem from "./NavbarItem";
import GlobalContext, {
  GlobalContextCompleteValues,
  IsMenuOpenOnMobileDispatcher,
  IsMobileDispatcher,
} from "../../context/globalContext";

const Navbar: FC = (): JSX.Element => {
  const {
    isMobileDispatcher,
    isMenuOpenOnMobileDispatcher,
  }: GlobalContextCompleteValues = useContext(GlobalContext);
  const [isMobile]: IsMobileDispatcher = isMobileDispatcher;
  const [
    isMenuOpenOnMobile,
    setIsMenuOpenOnMobile,
  ]: IsMenuOpenOnMobileDispatcher = isMenuOpenOnMobileDispatcher;
  const NavbarReference = useRef(null);
  const adjustWebsiteOnMenuItemClick = () => {
    isMobile && ((NavbarReference?.current as unknown) as HTMLElement).blur();
    window.scrollTo(0, 0);
  };
  return (
    <header>
      <NavbarWrapper
        isMobile={isMobile}
        isMenuOpenOnMobile={isMenuOpenOnMobile}
        ref={NavbarReference}
        onClick={() => {
          setIsMenuOpenOnMobile(!isMenuOpenOnMobile);
        }}
      >
        <NavbarSpliter />
        <NavbarTitle>Menu</NavbarTitle>
        <NavbarMenu>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/projects">Projects</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/skills">Skills</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/experience">Experience</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/contact">Contact</Link>
          </NavbarItem>
        </NavbarMenu>
      </NavbarWrapper>
    </header>
  );
};

export default Navbar;
