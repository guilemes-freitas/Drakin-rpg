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
  gap: 1rem;
  z-index: 2;
  width: 100%;
  height: 80%;
  @media screen and (min-width: 1400px) {
    gap: 3rem;
    height: 100%;
  }
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
  p{
    font-size: 28px;
    z-index: 5;
    padding-bottom: 2rem;
  }
`

export const CurrentStatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content:  space-around;
  gap: 3rem;
  @media screen and (min-width: 1400px) {
    gap: 5rem;
  }
`;

export const PATitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 500;
  @media screen and (min-width: 1400px) {
  font-size: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  align-items: center;
  @media screen and (min-width: 720px) {
    gap: 2rem;
  }
  @media screen and (min-width: 1400px) {
    bottom: 2rem;
  }
`;

export const PAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -5rem;
  @media screen and (min-width: 1400px) {
    margin-bottom: 5rem;
  }
`

export const ButtonArmorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;    
  gap: 1rem;
  margin-bottom: 0.6rem;
`

export const TurnWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`

export const EffectsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  position: absolute;
  right: 8rem;
`