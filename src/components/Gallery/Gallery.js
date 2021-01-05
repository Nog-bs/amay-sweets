import React from "react";
import {
  GalleryBox,
  GalleryCard,
  GalleryButton,
  GalleryContainer,
  GalleryLink,
} from "./Gallery.elements";
import Flip from "react-reveal/Flip";

const Gallery = ({ galleryData }) => {
  return (
    <>
      <GalleryBox>
        <GalleryContainer>
          {galleryData.map((card, id) => {
            return (
              <Flip key={id} left>
                <GalleryCard image1={card.image1} image2={card.image2} />
              </Flip>
            );
          })}
        </GalleryContainer>
        <GalleryLink to="/about">
          <GalleryButton>ABOUT</GalleryButton>
        </GalleryLink>
      </GalleryBox>
    </>
  );
};

export default Gallery;
