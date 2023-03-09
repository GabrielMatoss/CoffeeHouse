import styled from "styled-components";

export const ContainerCartHistory = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    background-color: darkcyan;
    margin-top: 3.5rem;

    h3 {
        font-weight: 700;
        font-family: "Baloo 2", cursive;
        font-size: 1.2rem;
    }
 

   form {
    background-color: cadetblue;
    padding: 40px;
   }

    .headerForm {
        background-color: brown;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;