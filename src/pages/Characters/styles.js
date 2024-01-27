import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  height: 80%;
  padding: 30px 10px;
  @media screen and (min-width: 720px) {
  padding: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 60%;
  @media screen and (min-width: 1400px) {
    gap: 3rem;
    height: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 97%;
  transition: all 500ms;
`;

export const Return = styled.button`
    font-size: 16px;
    bottom: 98.6%;
    left: 30px;
    position: absolute;
    background-color: var(--black);
    color: white;
    font-family: 'Pirata One';
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  position: absolute;
  top: 2rem;
  left: 0.5rem;
  @media screen and (min-width: 720px) {
    left: 2rem;
  }
`;

export const StatWrapper = styled.div`
  display: none;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  p{
    font-size: 28px;
    z-index: 5;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 720px) {
    display: flex;
  }
`;

export const CurrentStatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content:  space-around;
  gap: 1rem;
  @media screen and (min-width: 720px) {
    gap: 2rem;
  }
  @media screen and (min-width: 1400px) {
    gap: 3rem;
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
`;

export const ButtonArmorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;    
  gap: 1rem;
  margin-bottom: 0.6rem;
`;

export const TurnWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 0.5rem;
  @media screen and (min-width: 720px) {
    bottom: 2rem;
    left: 2rem;
    top: auto;
    right: auto;
  }
`;

export const EffectsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  flex-direction: column;
`;

export const EffectFigure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  >figcaption{
    position: absolute;
    left: 18px;
    bottom: 5px;
    user-select: none;
    font-size: 18px;
    color: var(--white);
    text-shadow: -1px -1px 0 var(--black), 1px -1px 0 var(--black), -1px 1px 0 var(--black), 1px 1px 0 var(--black);
  }
`;

export const EffectImage = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;