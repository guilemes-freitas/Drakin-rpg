import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 102px;
  height: 23px;
  position: relative;
`;

export const ItemBorder = styled.div`
  background-color: var(--black);
  border: 2px solid;
  border-color: ${(props) => (props.selected ? "var(--blue)" : "var(--white)")};
  transition: all 500ms;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
  cursor: pointer;
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
  font-size: 18px;
  font-weight: 500;
  transition: color 500ms;
  z-index: 2;
`;
