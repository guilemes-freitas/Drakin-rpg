import styled from "styled-components";
import MetalTexture from "../../assets/images/texture-metal.webp"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${MetalTexture}) var(--blue);
  background-blend-mode: multiply, normal;
  mix-blend-mode: normal;
  background-size: cover;
  height: 80px;
  width: 220px;
  transition: .2s ease-in-out;
  >span{
    color: var(--white);
  }
  &:hover {
    background-color: var(--white);
    >span{
      color: var(--blue);
    }
  }

  @media (min-width: 1020px) {
    width: 280px;
  }
`;

export const Text = styled.span`
  transition: .2s ease-in-out;
  font-size: 18px;
  @media (min-width: 1020px) {
    font-size: 32px;
  }
`;
