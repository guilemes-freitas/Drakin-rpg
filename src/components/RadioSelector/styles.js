import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 102px;
  height: 40px;
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: 4;


  @media screen and (min-width: 720px) {
    width: 102px;
    height: 23px;
    flex-direction: row;
  }
`;

export const ItemBorder = styled.div`
  background-color: var(--black);
  border: 2px solid;
  border-color: ${(props) => (props.selected ? "var(--blue)" : "var(--white)")};
  transition: all 500ms;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  cursor: pointer;
    z-index: 4;
  @media screen and (min-width: 720px) {
    width: 22px;
    height: 22px;
  }
`;

export const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 5;
  cursor: pointer;
  transition: all 300ms;

  width: 100%;
  height: 100%;
`;

export const Race = styled.h4`
  color: ${(props) => (props.selected ? "var(--blue)" : "var(--white)")};
  font-size: 12px;
  font-weight: 500;
  transition: color 500ms;
  z-index: 5;
  @media screen and (min-width: 720px) {
    font-size: 18px;
  }
`;
