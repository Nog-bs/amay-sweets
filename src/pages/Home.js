import React, { useState } from "react";
import { Gallery, Hero } from "../components";
import { data } from "../data/GalleryData";

const Home = () => {
  // STORING DATA FROM GALLERY DATA
  const [galleryData] = useState(data);

  return (
    <>
      <Hero galleryData={galleryData} />
      <Gallery galleryData={galleryData} />
    </>
  );
};

export default Home;
