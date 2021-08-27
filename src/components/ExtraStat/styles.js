import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    gap: 20px;
    color: var(--white);
    z-index: 5;
    padding: 14px;
    right: -50px;
    bottom: -45px;
    @media screen and (min-width: 1400px) {
        padding: 11px;
    }
`;

export const FirstSquare = styled.div`
    height: 57px;
    width: 57px;
    background-color: var(${props => props.blueSchema ? '--blue' : '--green'});
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    @media screen and (min-width: 1400px) {
        height: 65px;
        width: 65px;
    }
`;

export const SecondSquare = styled.div`
    height: 50px;
    width: 50px;
    background-color: var(${props => props.blueSchema ? '--blue' : '--green'});
    border: 2px solid var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 1400px) {
        height: 57px;
        width: 57px;
    }
`

export const Value = styled.h4`
    font-size: 22px;
    height: 22px;
    font-weight: 500;
    @media screen and (min-width: 1400px) {
        font-size: 24px;
        height: 24px;
    }
`

export const Type = styled.span`
    font-size: 16px;
    @media screen and (min-width: 1400px) {
        font-size: 18px;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: rotate(-45deg);
`;