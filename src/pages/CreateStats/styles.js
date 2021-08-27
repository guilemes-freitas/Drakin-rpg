import styled from "styled-components";
import Sky from "../../assets/images/sky.jpg"
import Human from "../../assets/images/Human.png"

export const Container = styled.div`
  width: 100%;
  height: 55%;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--black);
  position: absolute;
  bottom: 0;
  z-index: 2;
  clip-path: polygon(43% 0,57% 0,100% 31%,100% 100%,0 100%,0 31%);
`;

export const CloudBackground = styled.div`
  height: 63%;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: url(${Sky});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const LeftContainer = styled.div`
  height: 68%;
  width: 43%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
`;

export const LeftSide = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  background-color: var(--blue);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.75;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
`;

export const MiddleContainer = styled.div`
  height: 45%;
  width: 14%;
  position: absolute;
  top: 0;
  left:43%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Middle = styled.div`
  background: rgba(61, 174, 245, 0.75);
  height: 100%;
  position: absolute;
  width: 100%;
`;
export const Figure = styled.div`
  position: absolute;
  background-image: url(${Human});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 80%;
  opacity: 0.80;
`;

export const Points = styled.div`
  background-color: var(--black);
  outline: 20px solid var(--blue);
  transform: rotate(45deg);
  width: 125px;
  height: 125px;
  position: absolute; 
  opacity: 1;
  bottom: 2rem;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 24px 24px 7px rgb(0 0 0 / 42%);
  h4{
      font-size: 50px;
      padding-right: 20px;
    transition: color 500ms;
    color: ${props => props.error ? "var(--red)" : "var(--white)"};
    transform: rotate(-45deg);
    padding-right: 20px;
  }
  p{
    transition: color 500ms;
    color: ${props => props.error ? "var(--red)" : "var(--white)"};
    font-size: 14px;
    padding-left: 32px;
    transform: rotate(-45deg);
  }
  @media screen and (min-width: 1400px) {
    width: 200px;
    height: 200px;
    h4{
      font-size: 70px;
      padding-right: 20px;
    }
    p{
      font-size: 18px;
      padding-left: 73px;
    }
  }
`;

export const RightSideContainer = styled.div`
  height: 68%;
  width: 43%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content:  space-around;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
`;

export const RightSide = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 74%);
  background-color: var(--blue);
  height: 100%;
  position: absolute;
  width: 100%;
  opacity: 0.75;
`;

export const CharacterStatWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 75%;
  padding-left: 30px;
  p{
    font-size: 28px;
    z-index: 5;
    padding-bottom: 2rem;
  }
`

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

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const StatWrapper = styled.div`
  font-size: 0;
  display: flex;
  .Hexagon{
    margin-bottom: calc(26px - 155px * 0.2886);
    @media screen and (min-width: 720px) {
      margin-bottom: calc(22px - 155px * 0.2886);
    }
  }
`;

export const StatWrapperAbsolute = styled.div`
  font-size: 0;
  display: flex;
  position: absolute;
  right: 7rem;
  bottom: 150px;
  .Hexagon{
    margin-bottom: calc(26px - 155px * 0.2886);
    @media screen and (min-width: 720px) {
      margin-bottom: calc(22px - 155px * 0.2886);
    }
  }
`;