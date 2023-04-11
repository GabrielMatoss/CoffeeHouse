import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: #f84747;
    font-size: 0.875rem;
  }
`;

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  outline: none;

  font-size: 0.75rem;
  padding: 0 0.75rem;

  transition: 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
