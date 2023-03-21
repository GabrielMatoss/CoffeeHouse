import styled from "styled-components";
import { rgba } from "polished";
import heroBackground from "../../../../assets/heroBackground.png";

export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${heroBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.white} 0%,
        ${rgba(theme.background, 0.2)} 50%,
        ${theme.background} 100%
      )`};
      background-size: cover;
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
            color: ${({theme}) => theme["base-title"]};
            font-size: 3rem;
            font-family: 'Baloo 2', cursive;
            line-height: 130%;
            font-weight: 800;
            margin-bottom: 1rem;
        }
    }
`;