import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h3 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    span {
      font-size: 1rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    h4 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    .totalValue {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }
`;
