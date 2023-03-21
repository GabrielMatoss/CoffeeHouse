import styled from "styled-components";

export const CoffeeGalleryContainer = styled.section`
    width: 100%;
    margin-top: 2rem;

    h3{
        font-size: 2rem;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        font-family: 'Baloo 2';
        font-weight: 800;
        line-height: 130%;
    }
`;

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
`;