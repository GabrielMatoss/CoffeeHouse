import styled from "styled-components";

export const CoffeeSloganContent = styled.div`
  //background-color: brown;

  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  .slogan {
    display: flex;
    flex-direction: column;
    //  background-color: blueviolet;
    gap: 1.75rem;
  }

  .title {
    // background-color: cadetblue;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      font-family: "Baloo 2", cursive;
      line-height: 130%;
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;
    }
  }

  .contentItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;


    div:nth-child(1) span{
        background: ${props => props.theme.purple};
    } 


    > div {
      // background-color: aqua;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.75rem;

      .contentIcons {
        padding: 0.5rem;
        border-radius: 9999px;
         background-color: red;
        display: inline-flex;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }

  .imageCoffeeContent {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    // background-color: darkgreen;

    > img {
    width: 26.5rem;
    }
  }
`;
