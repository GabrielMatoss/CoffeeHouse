import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div p:nth-child(1) {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
  div p:nth-child(2) {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }
`;
