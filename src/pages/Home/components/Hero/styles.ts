import styled from "styled-components";
import { rgba } from "polished";
import heroBackground from "../../../../assets/heroBackground.png";

export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${heroBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors.white} 0%,
        ${rgba(theme.colors.background, 0.2)} 50%,
        ${theme.colors.background} 100%
      )`};
      background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    /* font-family: 'Baloo 2', cursive;
font-family: 'Roboto', sans-serif; */
    div section{
        h1{
            color: ${({theme}) => theme.colors["base-title"]};
            font-size: 3rem;
            font-family: 'Baloo 2', cursive;
            line-height: 130%;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        p{
            color: ${({theme}) => theme.colors["base-subtitle"]};
            font-size: 1.25rem;
            line-height: 130%;
            font-weight: 400;
        }
    }

    .containerImgHero{
       // background-color: blueviolet;
        width: 80%;
        img {
            max-width: 100%;
            min-width: 300px;
        }
    }
`;

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`;