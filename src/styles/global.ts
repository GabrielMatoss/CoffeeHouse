import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;
