import React from "react";
import { Navbar, Gallery } from "./components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Gallery />
    </>
  );
};

export default App;
