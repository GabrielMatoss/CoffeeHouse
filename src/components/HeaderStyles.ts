import styled from "styled-components";

export const HeaderNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Localization = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purple-light"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    text-align: left;
    color: ${(props) => props.theme["purple-dark"]};
  }

  .iconMap {
    color: ${(props) => props.theme.purple};
  }
`;

export const SectionCartLocal = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  .contentCart {
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
