import styled from "styled-components";
import DrakinIcon from "../../assets/images/Warstwa1.svg";
import PaperTexture from "../../assets/images/texture-paper.webp"

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  &:after{
    content: "";
    background-color: #2E589B;
    -webkit-mask: url(${DrakinIcon}) no-repeat;
    mask: url(${DrakinIcon}) no-repeat;
    -webkit-mask-size: 80% 80%;
    mask-size: 80% 80%;
    -webkit-mask-position: center;
    mask-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.15;
    z-index: -1;
    }
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  text-shadow: -1px -1px 15px #000, 1px -1px 15px #000, -1px 1px 15px #000, 1px 1px 15px #000;
  font-weight: 500;
  padding: 0 5px;
  bottom: 97%;
  @media screen and (min-width: 720px) {
    font-size: 128px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const InfoButton = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  background-image: url(${PaperTexture});
  background-blend-mode: multiply;
  background-size: cover;
  height: 55px;
  width: 50px;
  clip-path: polygon(0% 55%,0% 0%,100% 0%,100% 100%,50% 75%,0% 100%);
  font-size: 20px;
  >span{
    font-size: 12px;
  }
  @media screen and (min-width: 720px) {
    top: 2rem;
    right: 2rem;
    border-radius: 8px 8px 0 0;
    height: 110px;
    width: 100px;
    font-size: 40px;
    >span{
      font-size: 20px;
    }
    transition: .2s ease-in-out;
    &:hover{
      height: 125px;
    }
  }
`;