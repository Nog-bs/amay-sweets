import styled from "styled-components";

export const AboutSection = styled.section`
  position: relative;
  z-index: -1;
`;

export const AboutCard = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ pinkBg }) =>
    pinkBg ? "rgba(255, 183, 197, 0.6)" : "rgba(255, 183, 197, 0.3)"};

  @media (min-width: 768px) {
    height: 75vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutImg = styled.div`
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 288px;
  border-radius: 5px;

  @media (min-width: 768px) {
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
    margin: 20px;
    order: ${({ change }) => (change ? "0" : "-1")};
  }
`;

export const AboutHead = styled.h2`
  font-family: "DancingScript";
  text-align: center;
  width: 275px;
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
  text-align: center;
`;
