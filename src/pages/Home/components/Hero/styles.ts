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

  @media (max-width: 1150px) {
    padding-inline: 1rem;
  }
  @media (max-width: 1060px) {
    margin-top: 4rem;
    padding-inline: 1rem;
    height: max-content;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1018px) {
    margin-top: 5rem;
    //  background-color: blueviolet;
    padding-inline: 1rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    div section {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 605px) {
    margin-inline: 1rem;
    align-items: center;
    justify-content: center;
  }

  div section {
    h1 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: 3rem;
      font-family: "Baloo 2", cursive;
      line-height: 130%;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    }

    @media (max-width: 605px) {
      margin-inline: 1rem;
      h1 {
        font-size: 2rem;
      }
    }
    @media (max-width: 380px) {
      text-align: left;
    }
  }

  .containerImgHero {
    // background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    img {
      max-width: 100%;
      min-width: 300px;
    }

    @media (max-width: 660px) {
      img {
        width: 90%;
      }
    }
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 1018px) {
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    padding-inline: 1rem;
    justify-items: center;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: auto;
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    justify-items: flex-start;
  }
`;
