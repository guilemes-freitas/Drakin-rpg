import styled from "styled-components";

export const FirstHexagon = styled.div`
    width: 100px;
    height: 100px;
    clip-path: polygon(5% 25%, 50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%);
    background-color: var(--white);
    background-color: ${props => props.colorChange > 5 && "var(--green)"};
    background-color: ${props => props.colorChange < 5 && "var(--red)"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 1s;
    @media screen and (min-width: 720px) {
        width: 120px;
        height: 120px;
    }
    @media screen and (min-width: 1400px) {
        width: 150px;
        height: 150px;
    }

`;

export const SecondHexagon = styled.div`
    width: 95px;
    height: 95px;
    clip-path: polygon(5% 25%, 50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%);
    background-color: var(--green);
    background-color: ${props => props.colorChange !== 5 && "var(--white)"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 1s;
    @media screen and (min-width: 720px) {
        width: 115px;
        height: 115px;
    }
    @media screen and (min-width: 1400px) {
        width: 145px;
        height: 145px;
    }
`;

export const ThirdHexagon = styled.div`
    width: 90px;
    height: 90px;
    clip-path: polygon(5% 25%, 50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%);
    background-color: var(--white);
    background-color: ${props => props.colorChange > 5 && "var(--green)"};
    background-color: ${props => props.colorChange < 5 && "var(--red)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    transition: background-color 1s;
    @media screen and (min-width: 720px) {
        width: 110px;
        height: 110px;
        gap: 0.5rem;
    }
    @media screen and (min-width: 1400px) {
        width: 140px;
        height: 140px;
        gap: 1rem;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    font-size: 22px;
    color: ${props => props.colorChange === 5 ? "var(--green)" : "var(--white)" };
    transition: color 500ms;
`
export const Logo = styled.div`
    font-size: 24px;
    color: var(--green);
    color: ${props => props.colorChange !== 5 && "var(--white)"};
    height: 22px;
    transition: color 500ms;
    @media screen and (min-width: 720px) {
        font-size: 36px;
        height: 35px;
    }
    @media screen and (min-width: 1400px) {
        font-size: 48px;
        height: 50px;
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--green);
    color: ${props => props.colorChange !== 5 && "var(--white)"};
    transition: color 500ms;
    font-size: 24px;
`
export const Type = styled.div`
    color: var(--green);
    color: ${props => props.colorChange !== 5 && "var(--white)"};
    transition: color 500ms;
    font-size: 14px;
    text-transform: capitalize;
    @media screen and (min-width: 720px) {
        font-size: 18px;
    }
`
export const LogoTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;