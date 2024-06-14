import { createGlobalStyle } from "styled-components";
import "animate.css/animate.compat.css";

const GlobalStyle = createGlobalStyle`
*, html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 21px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.secondary};
}
`;
export default GlobalStyle;
