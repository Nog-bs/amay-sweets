import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/amay-sweets-logo.png";

export const Nav = styled.nav`
  background: #ffb7c5;
  width: 100%;
  color: #fff;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  box-shadow: 10px 10px #0000;
`;

export const NavHeader = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  font-family: "DancingScript";
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #b5651d;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const NavImage = styled(Link)`
  background-repeat: no-repeat;
  background-image: url(${Logo});
  height: 50px;
  width: 60px;
  background-size: 100% 100%;

  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${({ click }) => (click ? 0 : "100%")};
  transition: all 0.4s ease;
  background: #ffb7c5;
  top: 60px;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 24px;

  @media (min-width: 768px) {
    position: static;
    padding: 0;
    top: 0;
    left: 0;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.25rem;
  }
`;

export const NavItem = styled(Link)`
  margin: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #b5651d;
    cursor: pointer;
  }
`;

export const NavHr = styled.hr`
  height: 3px;
  background: #fff;
  width: 100%;
  border: none;
  border-radius: 5px;

  @media (min-width: 768px) {
    display: none;
  }
`;

// HAMBURGER MOBILE MENU
export const NavMobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled(FaBars)`
  font-size: 1.5rem;

  &:hover {
    color: #b5651d;
    cursor: pointer;
  }
`;

export const NavMenuClose = styled(FaTimes)`
  font-size: 1.5rem;

  &:hover {
    color: #b5651d;
    cursor: pointer;
  }
`;
