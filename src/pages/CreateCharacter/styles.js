import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  >button{
    z-index: 5;
  }
  @media screen and (min-width: 720px) {
    padding: 30px;
    >button{
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  left: 3%;
  top: 7%;
  width: 80%;
  height: 80%;
  gap: 2rem;
  @media screen and (max-width: 720px) {
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 0;
  width: 100%;
  height: 100%;

  > div > input {
    font-size: 16px;
    margin-bottom: 20px;
  }
  > div > button {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 500;
  z-index: -1;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 96%;
`;

export const Benefit = styled.span`
  color: var(--blue);
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonWrapperRight = styled.div`
  right: 0;
  bottom: 0;
  @media screen and (min-width: 720px) {
    right: 15px;
    bottom: 15px;
  }
`;

export const ButtonWrapperLeft = styled.div`
  left: 0;
  bottom: 0;
  @media screen and (min-width: 720px) {
    left: 15px;
    bottom: 15px;
  }
`;

export const RaceImage = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 85%;
  width: 85%;
  display: block;
  z-index: 1;
  opacity: 0.4;
  @media screen and (min-width: 720px) {
    height: 100%;
    z-index: 4;
    width: 42%;
    left: 45%;
    opacity: 1;
    background-size: contain;
  }
  @media screen and (min-width: 940px) {
    width: 33%;
  }
`;

export const RaceTitle = styled.h2`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
    text-decoration: underline;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 36px;
    left: 22%;
    top: 23%;
  }
  @media screen and (min-width: 1400px) {
    font-size: 48px;
  }
`;

export const Benefits = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: ${props => props.display ? "inherit" : "none"};
  background-color: var(--white);
  left: 0;
  top: 49%;
  z-index: 5;
  span{
    width: 65%;
    color: var(--blue);
    font-size: 14px;
  }
  .disadvantage{
    width: 100%;
    background-color: var(--black);
    color: var(--red);
  }
  @media screen and (min-width: 720px) {
  z-index: 2;
    display: inherit;
    top: 35%;
    span{
      font-size: 18px;
    }
    width: 55%;
  }
`;

export const Description = styled.span`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 90%;
  font-size: 14px;
  color: var(--white);
  display: ${props => props.display ? "inherit" : "none"};
  text-align: center;
  top: 49%;
  z-index: 5;
  @media screen and (min-width: 720px) {
    display: inherit;
    left: 3rem;
    width: 65%;
    font-size: 16px;
    text-align: left;
    top: 66%;
  }
`;

export const Return = styled.button`
    font-size: 16px;
    bottom: 98.6%;
    left: 30px;
    background-color: var(--black);
    color: white;
    font-family: 'Pirata One';
`