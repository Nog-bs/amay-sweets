<<<<<<< HEAD:src/components/Gallery/Gallery.js
import React, { useState } from "react";
import { GalleryBox, GalleryCard } from "./Gallery.elements";
=======
import React from "react";
import { GalleryBox, GalleryCard } from "../styles/Gallery.elements";
>>>>>>> f2262a447a4d10ed6fc24cfb05759a905edb558d:src/pages/Gallery.js

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
