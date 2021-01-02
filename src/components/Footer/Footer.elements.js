import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

export const FooterSection = styled.footer`
  background-color: #e7feff;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
`;

export const FooterItem = styled.a`
  margin: 16px;
  color: black;
`;

export const FooterInsta = styled(GrInstagram)`
  font-size: 2rem;
  &:hover {
    color: #b5651d;
  }
`;

export const FooterMail = styled(AiOutlineMail)`
  font-size: 2rem;
  &:hover {
    color: #b5651d;
  }
`;
