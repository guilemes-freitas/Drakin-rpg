import styled from "styled-components";

export const Container = styled.button`
    width: ${props => props.size === 'big' ? '85px' : props.size === 'medium' ? '105px' : '100px'};
    height: ${props => props.size === 'big' ? '49px' : props.size === 'medium' ? '66px' : '54px'};
    font-size: ${props => props.size === 'big' ? '12px' : props.size === 'medium' ? '18px' : '12px'};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(${props => props.whiteSchema ? '--white' : props.color});
    @media screen and (min-width: 720px) {
        width: ${props => props.size === 'big' ? '130px' : props.size === 'medium' ? '105px' : '100px'};
        height: ${props => props.size === 'big' ? '66px' : props.size === 'medium' ? '66px' : '54px'};
        font-size: ${props => props.size === 'big' ? '18px' : props.size === 'medium' ? '18px' : '12px'};
    }
    @media screen and (min-width: 1400px) {
        width: ${props => props.size === 'big' ? '215px' : props.size === 'medium' ? '130px' : '100px'};
        height: ${props => props.size === 'big' ? '66px' : props.size === 'medium' ? '66px' : '54px'};
        font-size: ${props => props.size === 'big' ? '18px' : props.size === 'medium' ? '18px' : '12px'};
    }
`

export const Border = styled.div`
    border: solid 1px var(${props => props.whiteSchema ? '--black' : '--white'});
    width: ${props => props.size === 'big' ? '75px' : props.size === 'medium' ? '126px' : '96px'};
    height: ${props => props.size === 'big' ? '40px' : props.size === 'medium' ? '58px' : '44px'};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(${props => props.whiteSchema ? '--black' : '--white'});
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 720px) {
        width: ${props => props.size === 'big' ? '204px' : props.size === 'medium' ? '126px' : '96px'};
        height: ${props => props.size === 'big' ? '58px' : props.size === 'medium' ? '58px' : '44px'};
    }
`