import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > div {
    h1 {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["yellow-dark"]};
    }

    p {
      font-family: "Roboto";
      font-size: 1.25rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }

  > section{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;