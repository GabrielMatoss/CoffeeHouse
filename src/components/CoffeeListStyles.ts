import styled from "styled-components";

export const CoffeListStyles = styled.main`
    margin-top: 5rem;
    text-align: left;

    //Talvez tenha que ter outro container por volta desse

    .Card {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        padding-inline: 10px;
        background: ${props => props.theme["base-card"]};

        width: 16rem;
        height: 19.375rem;
        border-radius: 0 20px 0 20px;

        .SectionCoffeImg{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .SectionCoffeImg span {
            padding: 4px 8px;
            border-radius: 100px;

            background: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};

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
    
       .SectionDescrition h3{
            font-weight: 700;
            font-family: "Baloo 2", cursive;
            font-size: 1.5rem;
            line-height: 130%;
            color: ${props => props.theme["base-subtitle"]};
        }

       .SectionDescrition p {
            text-align: center;
            color: ${props => props.theme["base-label"]};
        }

        .SectionPrice {
           // background-color: red;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;

            .ContainerButtons{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.5rem;

                button {
                    border: none;
                    background: none;
                    color: ${props => props.theme.purple};
                    font-size: 1rem;
                }
                
                
                .QtdButtons {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: .7rem;
                    background-color: ${props => props.theme["base-button"]};
                    padding: 8px 10px;
                    border-radius: 10px;
                }

                .cart {
                    background: ${props => props.theme.purple};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    color: ${props => props.theme.background};
                    padding: .4rem;
                }
            }
        }
    }
`;