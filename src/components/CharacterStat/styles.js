import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--white);
    z-index: 5;
    padding: 11px;
`

export const FirstSquare = styled.div`
    height: 40px;
    width: 40px;
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
`

export const SecondSquare = styled.div`
    height: 35px;
    width: 35px;
    background-color: var(--green);
    border: 2px solid var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Value = styled.h4`
    font-size: 18px;
    transform: rotate(-45deg);
    font-weight: 500;
`

export const Type = styled.span`
    font-size: 14px;
`