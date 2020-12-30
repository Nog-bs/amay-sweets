import React, { useState } from "react";
import {
  Nav,
  NavHeader,
  NavList,
  NavItem,
  NavMenu,
  NavMenuClose,
  NavMobileMenu,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavHeader>Amay Sweets</NavHeader>
        <NavMobileMenu onClick={handleClick}>
          {click ? <NavMenuClose /> : <NavMenu />}
        </NavMobileMenu>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
