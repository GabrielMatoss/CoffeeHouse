import styled from "styled-components";

export const ContainerCartHistory = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-top: 3.5rem;

  h3 {
    font-weight: 700;
    font-family: "Baloo 2", cursive;
    font-size: 1.2rem;
  }


  .headerForm {
    // background-color: brown;
    gap: 0.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    h4 {
      font-family: "Roboto", sans-serif;
    }
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  .formContainer {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 40px;
    //margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    input {
      border: none;
      background-color: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-button"]};
      border-radius: 4px;
      height: 2.4rem;
      padding-left: 0.8rem;
      font-size: .8rem;
    }

    #Rua {
      width: 100%;
    }
    .containerNumberAndComplement {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      #Num {
        flex: 1;
      }
      #Comp {
        flex: 2;
      }
    }

    .containerBairroCidadeUf {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      #Bairro {
        flex: 1;
      }
      #Cidade {
        flex: 1;
      }
      #Uf {
        width: 3.5rem;
      }
    }
  }

   .contentInfos{
    display: flex;
    flex-direction: column;
    gap: .9rem;
  } 
  .containerMethodPayment{
    background: ${props => props.theme["base-card"]};
    padding: 40px;

    .sectionInfoPayment{
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap:  2rem;

      .containerContentInfos {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: .5rem;
      }

      h4 {
      font-family: "Roboto", sans-serif;
      color: ${props => props.theme["base-subtitle"]};
    }
      svg {
        color: ${props => props.theme.purple};
      }  
    }
      .selectionMethodsPayment{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: .7rem;
      } 

       .paymentMethods{
        background-color: ${(props) => props.theme["base-button"]};
        display: flex;
        border: none;
        padding: 1rem;
        align-items: center;
        justify-content: flex-start;
        border-radius: 6px;
        gap: 1rem;
        flex: 1;

        p{
          text-transform: uppercase;
          font-size: 0.8rem;
          line-height: 160%;
        }
       } 
    }
     

  .contentValues {
   // background-color: brown;
    display: flex;
    flex-direction: column;
    gap: .9rem;
    .container {
      width: 100%;
      background-color: ${(props) => props.theme["base-card"]};
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 40px;

      .contentCardCoffee { 
        display: flex;
        // background-color: blue;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #e6e5e5;
        gap: 1rem;
        padding-bottom: 1rem;
        img {
          width: 5rem;
          height: 5rem;
        }

        .contentPropsCoffee {
          display: flex;
          flex-direction: column;
          .nameAndPrice {
           width: 13rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            > p {
              font-weight: bold;
            }
          }

          .containerButtons {
            margin-top: 1rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-start;

            button {
              border: none;
              background: none;
              color: ${(props) => props.theme.purple};
              font-size: 1rem;
            }

            .qtdButtons {
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: baseline;
              gap: 6px;
              background-color: ${(props) => props.theme["base-button"]};
              padding: 5px;
              border-radius: 6px;
            }

            .removeBtn {
              text-align: center;
              display: flex;
              align-items: center;

              gap: 0.5rem;
              background-color: ${(props) => props.theme["base-button"]};
              padding: 8px;
              border-radius: 6px;
              text-transform: uppercase;
              font-size: 0.8rem;
              span {
                color: ${(props) => props.theme["base-label"]};
              }
            }
          }
        }
      }

      .totalItens{
        display: flex;
       // background-color: chocolate;
        flex-direction: column;
        gap: 2rem;
        .calculatorValues{
          display: flex;
          flex-direction: column;
          gap: .5rem;
          > div{
            display: flex;
            justify-content: space-between;
          }
        }

        .containerButton{
          display: flex;
          align-items: center;
          justify-content: center;

          > button{
            width: 100%;
            padding: .8rem;
            border-radius: 6px;
            border: none;
            background-color: ${props => props.theme.yellow};
            color: ${props => props.theme.white};
            font-weight: 700;
            font-size: .8rem;
            line-height: 160%;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
