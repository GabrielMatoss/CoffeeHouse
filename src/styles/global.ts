import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors["base-text"]};
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

    input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

    @media(max-width: 660px){
      html{
        font-size: 87.25%;
    }
  }
`;

/* font-family: 'Baloo 2', cursive;
font-family: 'Roboto', sans-serif; */
