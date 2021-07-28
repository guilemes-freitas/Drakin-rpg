import styled from "styled-components";
import TriangleButton from "../../assets/images/TriangleButton.svg";
import TriangleButtonLeft from "../../assets/images/TriangleButtonLeft.svg";

export const ButtonItem = styled.button`
  background-color: transparent;
  width: 100px;
  height: 96px;
  /* clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%); */
`;

export const Triangle = styled.div`
  background-image: url(${(props) => props.isLeft ? TriangleButtonLeft : TriangleButton});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
