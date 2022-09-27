import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 12px;
    z-index: 5;
    padding: 5px;
    opacity: ${props => props.used ? '0.5' : '1'};
    cursor: pointer;
    @media screen and (min-width: 1400px) {
        gap: 20px;
        padding: 11px;
    }
`

export const FirstSquare = styled.div`
    height: 33px;
    width: 33px;
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    @media screen and (min-width: 720px) {
        height: 45px;
        width: 45px;
    }
    @media screen and (min-width: 1400px) {
        height: 65px;
        width: 65px;
    }
`

export const SecondSquare = styled.div`
    height: 27px;
    width: 27px;
    background-color: var(--green);
    border: 2px solid var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 720px) {
        height: 38px;
        width: 38px;
    }
    @media screen and (min-width: 1400px) {
        height: 58px;
        width: 58px;
    }
`