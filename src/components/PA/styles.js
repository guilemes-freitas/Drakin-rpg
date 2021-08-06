import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;
    z-index: 5;
    padding: 11px;
    opacity: ${props => props.used ? '0.5' : '1'};
    cursor: pointer;
`

export const FirstSquare = styled.div`
    height: 85px;
    width: 85px;
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
`

export const SecondSquare = styled.div`
    height: 78px;
    width: 78px;
    background-color: var(--green);
    border: 2px solid var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`