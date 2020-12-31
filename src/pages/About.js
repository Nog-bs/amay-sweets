import React from "react";
import {
  AboutSection,
  AboutImg,
  AboutDescription,
  AboutHead,
  AboutText,
  AboutHr,
} from "../styles/About.elements";

const About = () => {
  return (
    <AboutSection>
      <AboutImg />
      <AboutDescription>
        <AboutHead>About Amay Sweets</AboutHead>
        <AboutHr />
        <AboutText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste libero
          dicta doloremque vitae cupiditate, earum laboriosam neque iusto ipsa
          assumenda optio, quisquam blanditiis quae architecto voluptates?
          Soluta, voluptas quod? Quasi.
        </AboutText>
      </AboutDescription>
    </AboutSection>
  );
};

export default About;
