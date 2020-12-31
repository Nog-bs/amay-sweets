import React from "react";
import { GalleryBox, GalleryCard } from "./Gallery.elements";
import { data } from "../../data/GalleryData";

export default function Gallery() {
  return (
    <>
      <GalleryBox>
        <GalleryCard data={data[0]} />
      </GalleryBox>
    </>
  );
}
