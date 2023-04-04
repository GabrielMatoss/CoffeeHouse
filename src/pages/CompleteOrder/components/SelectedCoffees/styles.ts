import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    h3 {
        font-size: 1.125rem;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        line-height: 130%;
    }
`;

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`;