import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    background: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }
`;

export const NameCoffee = styled.p`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const DescriptionCoffee = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors["base-label"]};
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    
    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
    }

    p {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 0.75rem;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;
