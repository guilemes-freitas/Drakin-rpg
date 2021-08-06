import styled from "styled-components";

export const Container = styled.button`
    width: 215px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(${props => props.color});
    color: var(--white);
`

export const Border = styled.div`
    border: solid 1px var(--white);
    width: 204px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`