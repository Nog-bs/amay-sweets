import styled from "styled-components";

export const GalleryBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
`;

export const GalleryCard = styled.div`
  background-image: ${({ image1 }) => `url(${image1})`};
  background-size: contain;
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
`;

export const GalleryCardBack = styled.div`
  background-image: ${({ image2 }) => `url(${image2})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 300px;
  margin: 16px;
  border: 2px solid pink;
  border-radius: 10px;
  box-shadow: 0px 6px 10px grey;
`;
