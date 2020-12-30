import { createGlobalStyle } from "styled-components";
import DancingScript from "./assets/fonts/DancingScript.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DancingScript';
    src: url(${DancingScript});
    font-weight: normal;
    font-style: normal;
  }


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
} 
`;

export default GlobalStyles;
