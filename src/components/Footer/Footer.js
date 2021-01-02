import React from "react";
import {
  FooterSection,
  FooterList,
  FooterItem,
  FooterInsta,
  FooterMail,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterList>
          <FooterItem href="mailto:amyjyhe@gmail.com" target="_blank">
            <FooterMail />
          </FooterItem>
          <FooterItem
            href="https://www.instagram.com/amay.sweets/"
            target="_blank"
          >
            <FooterInsta />
          </FooterItem>
        </FooterList>
      </FooterSection>
    </>
  );
};

export default Footer;
