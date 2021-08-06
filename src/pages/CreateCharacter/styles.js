import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  left: 3%;
  top: 7%;
  width: 80%;
  height: 80%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
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
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 97%;
`;

export const Benefit = styled.span`
  color: var(--blue);
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonWrapperRight = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const ButtonWrapperLeft = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

export const RaceImage = styled.div`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 100%;
    z-index: 4;
    width: 42%;
    left: 45%;
    position: absolute;
  }
  @media screen and (min-width: 940px) {
    width: 33%;
  }
`;

export const RaceTitle = styled.h2`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
    position: absolute;
    text-decoration: underline;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 48px;
    left: 22%;
    top: 23%;
  }
`;

export const Benefits = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 55%;
  position: absolute;
  background-color: var(--white);
  left: 0;
  top: 36%;
  span{
    color: var(--blue);
    font-size: 18px;
  }
  .disadvantage{
    background-color: var(--black);
    color: var(--red);
  }
  @media screen and (min-width: 1400px) {
    span{
      font-size: 24px;
    }
  }
`;

export const Description = styled.span`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 55%;
  position: absolute;
  color: var(--white);
  left: 3%;
  text-align: left;
  top: 57%;
  z-index: 5;
  font-size: 18px;
  @media screen and (min-width: 1400px) {
    font-size: 22px;
  }
`;