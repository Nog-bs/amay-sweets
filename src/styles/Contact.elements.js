import styled from "styled-components";
import image from "../assets/images/food-collage.jpg";
import family from "../assets/images/family2.PNG";

export const Image = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin: 12px 0px;
    flex-flow: row;
  }
`;
export const ContactCard = styled.div`
  justify-self: center;
  background: #ffb7c5;
  z-index: 0;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  width: 70vw;
  height: 70%;

  @media (min-width: 768px) {
    flex-flow: row;
    width: 70%;
    height: 50%;
  }
  @media (min-width: 1200px) {
    flex-flow: row;
    width: 50vw;
    height: 30vw;
  }
`;

export const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49%;
  width: 70%;
  @media (min-width: 768px) {
    height: 100%;
    width: 49%;
  }
`;

export const ContactImage = styled.div`
  background-image: url(${family});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 80%;
  border-radius: 100%;

  @media (min-width: 768px) {
    height: 60%;
    width: 60%;
  }
`;

export const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 49%;
  width: 70%;
  @media (min-width: 768px) {
    height: 100%;
    width: 49%;
  }
`;

export const ContactHead = styled.h3`
  @media (min-width: 768px) {
    text-align: center;
    font-family: "DancingScript";
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ContactHr = styled.hr`
  background: #fff;
  border: none;
  height: 3px;
  border-radius: 5px;
  margin: 16px;
  width: 60%;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const ContactDesc = styled.p`
  @media (min-width: 768px) {
    margin-top: 16px;
    text-align: center;
  }
`;
