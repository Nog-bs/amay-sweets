import React from "react";
import { GalleryBox, GalleryCard } from "./Gallery.elements";
import { data } from "../../data/GalleryData";

const Gallery = () => {
  // const [flip, setFlip] = useState(false);

  // const kickFlip = () => setFlip(!flip);

  return (
    <>
      <GalleryBox>
        {data.map((card) => {
          return <GalleryCard image1={card.image1} image2={card.image2} />;
        })}
      </GalleryBox>
    </>
  );
};

export default Gallery;
