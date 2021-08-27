import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;
    color: var(--white);
    z-index: 5;
    padding: 11px;
`

export const FirstSquare = styled.div`
    height: ${props => props.type2 ? '65px' : '40px'};
    width: ${props => props.type2 ? '65px' : '40px'};
    background-color: var(${props => props.blueSchema ? '--blue' : '--green'});
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    @media screen and (min-width: 1400px) {
        height: ${props => props.type2 ? '85px' : '40px'};
        width: ${props => props.type2 ? '85px' : '40px'};
    }
`

export const SecondSquare = styled.div`
    height: ${props => props.type2 ? '58px' : '35px'};
    width: ${props => props.type2 ? '58px' : '35px'};
    background-color: var(${props => props.blueSchema ? '--blue' : '--green'});
    border: 2px solid var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 1400px) {
        height: ${props => props.type2 ? '78px' : '35px'};
        width: ${props => props.type2 ? '78px' : '35px'};
    }
`
export const Value = styled.h4`
    font-size: ${props => props.type2 ? '24px' : '18px'};
    height: ${props => props.type2 ? '24px' : 'initial'};
    font-weight: 500;
    @media screen and (min-width: 1400px) {
        font-size: ${props => props.type2 ? '32px' : '18px'};
    }
`

export const Type = styled.span`
    font-size: ${props => props.type2 ? '14px' : '12px'};
    @media screen and (min-width: 1400px) {
        font-size: ${props => props.type2 ? '18px' : '14px'};
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.type2 ? 'flex-start' : 'center'};
    align-items: center;
    width: 100%;
    height: 100%;
    transform: rotate(-45deg);
`;