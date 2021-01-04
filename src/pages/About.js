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
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <AboutSection>
      {data.map((item, id) => (
        <AboutCard change={item.order} key={id} pinkBg={item.pinkBg}>
          <Fade
            // IF INDEX OF ITEM IS EVEN LEFT ANIMATION
            left={data.indexOf(item) % 2 === 0}
            // IF INDEX IS ODD THEN ANIMATION RIGHT
            right={data.indexOf(item) % 2 !== 0}
          >
            <AboutImg image={item.image} />
            <AboutDescription>
              <AboutHead>{item.head}</AboutHead>
              <AboutHr />
              <AboutText>{item.text}</AboutText>
            </AboutDescription>
          </Fade>
        </AboutCard>
      ))}
    </AboutSection>
  );
};

export default About;
