import styled from "styled-components";

export const CoffeListStyles = styled.main`
  margin-top: 5rem;
  text-align: left;
  //Talvez tenha que ter outro container por volta desse
  .CardContent {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .Card {
    position: relative;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    padding-inline: 10px;
    background: ${(props) => props.theme["base-card"]};
    max-width: 16rem;
    max-height: 19.37rem;
    border-radius: 0 20px 0 20px;

    .SectionCoffeImg {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .SectionCoffeImg img {
      position: relative;
      bottom: 19px;
    }

    .SectionCoffeImg span {
      padding: 4px 8px;
      border-radius: 100px;

      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .SectionDescrition {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .SectionDescrition h3 {
      font-weight: 700;
      font-family: "Baloo 2", cursive;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .SectionDescrition p {
      text-align: center;
      color: ${(props) => props.theme["base-label"]};
    }

    .SectionPrice {
      //background-color: red;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      > p {
        font-weight: 800;
        font-family: "Baloo 2", cursive;
        font-size: 1.5rem;
      }

      > p::before {
        content: "R$";
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 0.2rem;
        font-family: "Roboto", sans-serif;
      }

      .ContainerButtons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        button {
          border: none;
          background: none;
          color: ${(props) => props.theme.purple};
          font-size: 1rem;
        }

        .QtdButtons {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          background-color: ${(props) => props.theme["base-button"]};
          padding: 8px 10px;
          border-radius: 6px;
          text-align: center;
          p {
            font-weight: 400;
          }
        }

        .cart {
          background: ${(props) => props.theme["purple-dark"]};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: ${(props) => props.theme.background};
          padding: 10px;
        }
      }
    }
  }
`;
