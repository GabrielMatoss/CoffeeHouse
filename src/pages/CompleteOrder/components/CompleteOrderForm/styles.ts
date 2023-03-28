import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    h3 {
        font-size: 1.125rem;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
       // line-height: 130%;
    }
`;