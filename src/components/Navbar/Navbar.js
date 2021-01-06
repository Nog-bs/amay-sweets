import React, { useState } from "react";
import {
  Nav,
  NavHeader,
  NavImage,
  NavList,
  NavItem,
  NavMenu,
  NavMenuClose,
  NavMobileMenu,
  NavHr,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavImage to="/" />
        <NavHeader to="/">Amay Sweets</NavHeader>
        <NavMobileMenu onClick={handleClick}>
          {click ? <NavMenuClose /> : <NavMenu onClick={handleClick} />}
        </NavMobileMenu>
        <NavList click={click} onClick={handleClick}>
          <NavHr />
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavHr />
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
