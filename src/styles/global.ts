import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 1300px;
        background-color: ${(props) => props.theme["base-title"]};
        padding-top: 1rem;
        padding-inline: 10rem;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }

`;

/* 
    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif;
*/
