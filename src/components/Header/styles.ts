import styled from "styled-components";

export const HeaderContainer = styled.header`
  //padding-inline: 1rem;
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 1150px) {
    padding-inline: 1rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BaseHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  min-width: 2.3rem;
  height: 2.3rem;

  padding: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;

  position: relative;
  font-size: 0.875rem;
`;

export const LocalizationButton = styled(BaseHeaderButton)`
  background: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};

  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
`;

export const CartButton = styled(BaseHeaderButton)`
  background: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};

  svg {
    color: ${({ theme }) => theme.colors["yellow"]};
  }
`;
