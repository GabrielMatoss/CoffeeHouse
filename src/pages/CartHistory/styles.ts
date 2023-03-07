import styled from "styled-components";

export const ContainerHistory = styled.div`
    margin-top: 5rem;
    width: 100%;
    background: ${props => props.theme["base-card"]};
    display: grid;
    grid-template-columns: 2fr 1fr;
`;