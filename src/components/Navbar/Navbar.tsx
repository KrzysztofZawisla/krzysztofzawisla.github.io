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
} from "../../contexts/globalContext";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <header>
      <NavbarWrapper
        isMobile={isMobile}
        isMenuOpenOnMobile={isMenuOpenOnMobile}
        ref={NavbarReference}
        onClick={() => {
          isMobile && setIsMenuOpenOnMobile(!isMenuOpenOnMobile);
        }}
      >
        <NavbarSpliter />
        <NavbarTitle>Menu</NavbarTitle>
        <NavbarMenu>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/">{t("menu.aboutMe")}</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/projects">{t("menu.projects")}</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/skills">{t("menu.skills")}</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/experience">{t("menu.experience")}</Link>
          </NavbarItem>
          <NavbarItem onClick={adjustWebsiteOnMenuItemClick}>
            <Link to="/contact">{t("menu.contact")}</Link>
          </NavbarItem>
        </NavbarMenu>
      </NavbarWrapper>
    </header>
  );
};

export default Navbar;
