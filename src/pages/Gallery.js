import React from "react";
import { GalleryBox, GalleryCard } from "../styles/Gallery.elements";

export default function Gallery() {
  return (
    <>
      <GalleryBox>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </GalleryBox>
    </>
  );
}
