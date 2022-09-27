import styled from "styled-components";

export const Container = styled.button`
    width: ${props => props.size === 'big' ? '85px' : props.size === 'medium' ? '75px' : '70px'};
    height: ${props => props.size === 'big' ? '54px' : props.size === 'medium' ? '49px' : '50px'};
    font-size: ${props => props.size === 'big' ? '14px' : props.size === 'medium' ? '14px' : '12px'};
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(${props => props.whiteSchema ? '--white' : props.color});
    @media screen and (min-width: 720px) {
        padding: 4px;
        width: ${props => props.size === 'big' ? '105px' : props.size === 'medium' ? '100px' : '80px'};
        height: ${props => props.size === 'big' ? '66px' : props.size === 'medium' ? '66px' : '45px'};
        font-size: ${props => props.size === 'big' ? '16px' : props.size === 'medium' ? '14px' : '12px'};
    }
    @media screen and (min-width: 1400px) {
        padding: 5px;
        width: ${props => props.size === 'big' ? '215px' : props.size === 'medium' ? '130px' : '100px'};
        height: ${props => props.size === 'big' ? '66px' : props.size === 'medium' ? '66px' : '54px'};
        font-size: ${props => props.size === 'big' ? '16px' : props.size === 'medium' ? '14px' : '12px'};
    }
`

export const Border = styled.div`
    border: solid 1px var(${props => props.whiteSchema ? '--black' : '--white'});
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(${props => props.whiteSchema ? '--black' : '--white'});
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`