import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html, body {
        height:100vh;
        width: 100%;
        overflow: hidden; 
        margin: 0; 
        padding: 0; 
    }
    body {
        padding-top: 100px;
        
    }
`;

export default GlobalStyle;
