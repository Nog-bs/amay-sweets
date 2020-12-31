import styled from "styled-components";
import Family from "../assets/images/family.jpg";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutImg = styled.div`
  margin: 24px 0;
  background-image: url(${Family});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 288px;
  border-radius: 5px;

  @media (min-width: 768px) {
    height: 300px;
    width: 400px;
    margin: 0 20px 0 0;
  }
`;

// BELOW IS THE ABOUT CARD
export const AboutDescription = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const AboutHead = styled.h2`
  font-family: "DancingScript";
`;

export const AboutHr = styled.hr`
  background: #ffb7c5;
  border: none;
  height: 3px;
  border-radius: 5px;
  margin: 8px;
  width: 200px;
`;

export const AboutText = styled.p`
  background-image: ${({ image1 }) => image1};
`;
