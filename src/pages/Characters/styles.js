import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  height: 100vh;
  padding: 0px 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 97%;
  transition: all 500ms;
`;

export const Return = styled.button`
    font-size: 18px;
    bottom: 98.6%;
    left: 30px;
    position: absolute;
    background-color: var(--black);
    color: white;
    font-family: 'Pirata One';
`
export const StatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

export const StatWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 75%;
  p{
    font-size: 28px;
    z-index: 5;
    padding-bottom: 2rem;
  }
`

export const CurrentStatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  gap: 5rem;
`;

export const PATitle = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
margin-top: 3rem;
`;

export const PAWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`