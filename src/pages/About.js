import React from "react";
import {
  AboutSection,
  AboutCard,
  AboutImg,
  AboutDescription,
  AboutHead,
  AboutText,
  AboutHr,
} from "../styles/About.elements";
import { AboutData as data } from "../data/AboutData";

const About = () => {
  return (
    <AboutSection>
      {data.map((item) => (
        <AboutCard pinkBg={item.pinkBg}>
          <AboutImg image={item.image} />
          <AboutDescription order={item.order}>
            <AboutHead>{item.head}</AboutHead>
            <AboutHr />
            <AboutText>{item.text}</AboutText>
          </AboutDescription>
        </AboutCard>
      ))}
    </AboutSection>
  );
};

export default About;
