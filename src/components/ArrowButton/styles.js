import styled from "styled-components";
import TriangleButton from "../../assets/images/TriangleButton.svg";
import TriangleButtonLeft from "../../assets/images/TriangleButtonLeft.svg";

export const ButtonItem = styled.button`
  background-color: transparent;
  width: 55px;
  height: 50px;
  @media screen and (min-width: 720px) {
    width: 80px;
    height: 70px;
  }
  @media screen and (min-width: 1400px) {
    width: 100px;
    height: 96px;
  }
`;

export const Triangle = styled.div`
  background-image: url(${(props) => props.isLeft ? TriangleButtonLeft : TriangleButton});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
