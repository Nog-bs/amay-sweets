import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: #ffb7c5;
  width: 100%;
  color: #fff;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavHeader = styled.h1`
  font-size: 2rem;
  font-family: "DancingScript";
`;

export const NavList = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin: 6px;
`;

// HAMBURGER MOBILE MENU
export const NavMobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled(FaBars)`
  font-size: 1.5rem;
`;

export const NavMenuClose = styled(FaTimes)`
  font-size: 1.5rem;
`;
