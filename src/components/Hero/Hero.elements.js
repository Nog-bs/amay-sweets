import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  transition: 1s ease-in;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffb7c5;
  opacity: 0.7;
  position: absolute;
  z-index: -1;
`;

export const HeroContent = styled.div`
  height: 100vh;
  width: 100%;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeroText = styled.h2`
  font-size: 8em;
  color: #fff;
  font-family: "DancingScript", sans-serif;

  @media (min-width: 768px) {
    font-size: 10em;
  }
`;

export const HeroImg = styled.img``;
