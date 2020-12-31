import React, { useState } from "react";
import {
  Nav,
  NavHeader,
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
        <NavHeader to="/">Amay Sweets</NavHeader>
        <NavMobileMenu onClick={handleClick}>
          {click ? <NavMenuClose /> : <NavMenu onClick={handleClick} />}
        </NavMobileMenu>
        <NavList click={click} onClick={click}>
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
