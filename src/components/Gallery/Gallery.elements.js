import styled from "styled-components";

export const GalleryBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100;
  height: 90vh;
`;

export const GalleryCard = styled.div`
  background-image: url(${({ data }) => data.img1});
  background-size: cover;
  height: 350px;
  width: 300px;
  background-repeat: no-repeat;
  margin: 6px;
  border: 2px solid pink;
  border-radius: 10px;
  box-shadow: 0px 6px 10px grey;
`;
