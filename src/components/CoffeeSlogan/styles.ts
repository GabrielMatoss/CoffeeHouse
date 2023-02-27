import styled from "styled-components";

export const CoffeeSloganContent = styled.section`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  .slogan {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      font-family: "Baloo 2", cursive;
      line-height: 130%;
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["base-title"]};
    }
  }

  .contentItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    div:nth-child(1) span {
      background: ${(props) => props.theme["yellow-dark"]};
    }
    div:nth-child(2) span {
      background: ${(props) => props.theme["base-text"]};
    }
    div:nth-child(3) span {
      background: ${(props) => props.theme.yellow};
    }
    div:nth-child(4) span {
      background: ${(props) => props.theme.purple};
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.75rem;

      .contentIcons {
        padding: 0.5rem;
        border-radius: 9999px;
        background-color: red;
        display: inline-flex;
        color: ${(props) => props.theme.background};
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }

  img {
    max-width: 26.5rem;
    width: 100%;
  }
`;
