import React from "react";
import { GalleryBox, GalleryCard } from "./Gallery.elements";
import { data } from "../../data/GalleryData";
import Flip from "react-reveal/Flip";

const Gallery = () => {
  return (
    <>
      <GalleryBox>
        {data.map((card) => {
          return (
            <Flip left>
              <GalleryCard image1={card.image1} image2={card.image2} />
            </Flip>
          );
        })}
      </GalleryBox>
    </>
  );
};

export default Gallery;
