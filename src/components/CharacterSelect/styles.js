import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 100%;
    height: 62px;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border-radius: 0;
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-right: 8px;

  .indicator {
    position: absolute;
    left: ${(props) => props.leftIndicator};
    top: 25px;
    background-color: var(--blue);
    height: 12px;
    width: 12px;
    z-index: 5;
    transition: left 500ms;
    transform: translate(12px,0) rotate(45deg) ;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;
