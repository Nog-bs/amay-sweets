import styled from "styled-components";

export const GalleryBox = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    width: 80vw;
    margin: 0 auto;
    padding: 32px 0px;
  }
`;

export const GalleryCard = styled.div`
  background-image: ${({ image1 }) => `url(${image1})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 80vw;
  margin: 16px;
  border: 2px solid pink;
  border-radius: 10px;
  box-shadow: 0px 6px 10px grey;

  &:hover,
  &:active {
    background-image: ${({ image2 }) => `url(${image2})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 80vw;
    margin: 16px;
    border: 2px solid pink;
    border-radius: 10px;
    box-shadow: 0px 6px 10px grey;
    transition: linear 0.3s;
  }

  @media (min-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 300px;
    margin: 16px;
    border: 2px solid pink;
    border-radius: 10px;
    box-shadow: 0px 6px 10px grey;
    transition: linear 0.3s;

    &:hover {
      transition: linear 0.3s;
      background-image: ${({ image2 }) => `url(${image2})`};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 350px;
      width: 300px;
      margin: 16px;
      border: 2px solid pink;
      border-radius: 10px;
      box-shadow: 0px 6px 10px grey;
    }
  }
`;

export const GalleryCardBack = styled.div`
  @media (min-width: 768px) {
    background-image: ${({ image2 }) => `url(${image2})`};
    background-size: contain;
    background-repeat: no-repeat;
    height: 350px;
    width: 300px;
    margin: 16px;
    border: 2px solid pink;
    border-radius: 10px;
    box-shadow: 0px 6px 10px grey;
  }
`;
