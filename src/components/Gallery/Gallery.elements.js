import styled from "styled-components";
import { Link } from "react-router-dom";

export const GalleryBox = styled.section`
  width: 100%;
  background: rgba(255, 183, 197, 0.6);
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const GalleryContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    padding: 32px 0px;
  }
`;

export const GalleryCard = styled.div`
  background-image: ${({ image1 }) => `url(${image1})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 75vh;
  width: 260px;
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
    height: 75vh;
    width: 260px;
    margin: 16px;
    border: 2px solid pink;
    border-radius: 10px;
    box-shadow: 0px 6px 10px grey;
    transition: linear 0.3s;
  }

  @media (min-width: 768px) {
    background-size: 115%;
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

export const GalleryLink = styled(Link)``;

export const GalleryButton = styled.button`
  width: 300px;
  padding: 16px;
  margin: 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #ffb7c5;
  outline: none;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in;
    background-color: #b5651d;
  }
`;
