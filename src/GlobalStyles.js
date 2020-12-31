import { createGlobalStyle } from "styled-components";
import DancingScript from "./assets/fonts/DancingScript.ttf";
import Lato from "./assets/fonts/Lato.ttf";

const GlobalStyles = createGlobalStyle`
/* GLOBAL FONT IMPORTS */
  @font-face {
    font-family: 'DancingScript';
    src: url(${DancingScript});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${Lato});
    font-weight: normal;
    font-style: normal;
  }

/* GENERAL STYLING */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
} 
`;

export default GlobalStyles;
