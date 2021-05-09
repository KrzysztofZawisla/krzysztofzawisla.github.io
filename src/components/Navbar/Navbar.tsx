import { FC, useRef, KeyboardEvent as ReactKeyboardEvent, memo } from "react";
import { Link } from "react-router-dom";
import NavbarSpliter from "@root/components/Navbar/NavbarSpliter";
import NavbarWrapper from "@root/components/Navbar/NavbarWrapper";
import NavbarTitle from "@root/components/Navbar/NavbarTitle";
import NavbarMenu from "@root/components/Navbar/NavbarMenu";
import NavbarItem from "@root/components/Navbar/NavbarItem";
import { useTranslation } from "react-i18next";
import handleMenuClose from "@root/other/handleMenuClose";
import { useState } from "@hookstate/core";
import {
  isMenuOpenOnMobileGlobal,
  isMobileGlobal,
} from "@root/other/globalStates/globalStates";

const Navbar: FC = (): JSX.Element => {
  const isMobile = useState(isMobileGlobal);
  const isMenuOpenOnMobile = useState(isMenuOpenOnMobileGlobal);
  const NavbarReference = useRef(null);
  const adjustWebsiteOnMenuItemClick = () => {
    isMobile.get() &&
      ((NavbarReference?.current as unknown) as HTMLElement).blur();
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();
  return (
    <header>
      <NavbarWrapper
        isMobile={isMobile.get()}
        isMenuOpenOnMobile={isMenuOpenOnMobile.get()}
        ref={NavbarReference}
        onClick={() => {
          isMobile.get() &&
            isMenuOpenOnMobile.set((previousValue) => {
              return !previousValue;
            });
        }}
        onKeyPress={(event: ReactKeyboardEvent<HTMLDivElement>) => {
          handleMenuClose(event, isMenuOpenOnMobile.set);
        }}
        tabIndex={0}
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

export default memo(Navbar);
