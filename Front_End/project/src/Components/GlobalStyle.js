import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html, body{
        height:100vh;
        width: 100%;
        overflow: hidden; 
    }
    body {
        padding-top:90px; 
    }
`;

export default GlobalStyle;
