import { createGlobalStyle } from "styled-components";
import "animate.css/animate.compat.css";
import px2vw from "./px2vw";

const GlobalStyle = createGlobalStyle`
*, html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    font-size: ${px2vw(24)};
    @media (min-width: 768px) {
        font-size: ${px2vw(18)};
    }
    @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    /* font-size: 21px; */
    background-color: ${(props) => props.theme.base};
    color: ${(props) => props.theme.secondary};
}
`;
export default GlobalStyle;
