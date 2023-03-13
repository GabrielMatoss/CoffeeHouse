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
    // background-color: brown;
    gap: 0.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
      font-family: "Roboto", sans-serif;
    }
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    #Rua {
      width: 100%;
    }
  }

  .contentValues {
    // background-color: burlywood;

    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      .contentCardCoffee {
        display: flex;
        // background-color: blue;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        border-bottom: 2px solid grey;
        padding-bottom: 1rem;
        img {
          width: 5rem;
          height: 5rem;
        }

        .contentPropsCoffee {
          display: flex;
          flex-direction: column;
          .nameAndPrice {
            display: flex;

            width: 100%;
            // background-color: burlywood;
            gap: 3rem;
          }

          .containerButtons {
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
          }
        }
      }
    }
  }
`;
