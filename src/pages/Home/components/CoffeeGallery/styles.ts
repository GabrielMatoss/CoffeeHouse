import styled from "styled-components";

export const CoffeeGalleryContainer = styled.section`
  width: 100%;
  margin-top: 8rem;
  padding-inline: 1rem;
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-family: "Baloo 2";
    font-weight: 800;
    line-height: 130%;
  }
  @media (max-width: 1034px) {
    margin-top: 8rem;
  }
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 1034px) {
    grid-template-columns: repeat(auto-fit, minmax(14.9rem, 1fr));
    margin-top: 5rem;
  }
`;
