import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.background ? "95.6%" : "100%"};
    height: 100%;
    background-color: transparent;
    position: ${props => props.background ? "absolute" : "relative"};
    z-index: ${props => props.background ? "-1" : "1"};
    border: 2px solid var(--white);
`;