import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: absolute;
    top: 1rem;
    h3{
        font-size: 18px;
    }
    @media screen and (min-width: 720px) {
        right: 7rem;
        top: 0.5rem;
    }
`;

export const LevelButton = styled.button`
    width: 28px;
    height: 28px;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(${'--green'});
    @media screen and (min-width: 1400px) {
        width: 32px;
        height: 32px;
    }
`