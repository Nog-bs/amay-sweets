import React from "react";
import {
  Image,
  ContactCard,
  ContactImage,
  Box1,
  Box2,
  ContactHead,
  ContactHr,
  ContactDesc,
} from "../styles/Contact.elements";

const Contact = () => {
  return (
    <>
      <Image>
        <ContactCard>
          <Box1>
            <ContactImage />
          </Box1>
          <Box2>
            <ContactHead>What are you waiting for?</ContactHead>
            <ContactHr />
            <ContactDesc>
              Send us a message on Instagram, or email us directly with your
              orders!
            </ContactDesc>
          </Box2>
        </ContactCard>
      </Image>
    </>
  );
};

export default Contact;
