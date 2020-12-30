import React, { useState } from "react";
import { GalleryBox, GalleryCard } from "./Gallery.elements";

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
