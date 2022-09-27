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

    @media screen and (min-width: 720px) {
        border-radius: 0 24px 24px 0;
        height: unset;
        bottom: 80%;

        width: 128px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
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

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;
    position: absolute;
    height: inherit;
    padding-right: 0;
    padding-bottom: 0px;
    right: 7px;
    
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8px 24px;
      position: relative;
      z-index: 450;
      margin-bottom: 18px;
      margin-right: 0px;

      svg {
        fill: var(--white);
        margin-right: 8px;
      }

      &.navlink--active {
        border-radius: 24px 0 0 24px;
      }
    }
    .indicator {
      position: absolute;
      left: 91px;
      top: ${(props) => props.topIndicator};
      transform: translateY(5px);
      transition: top 500ms;
      transform: rotate(45deg);
      height: 14px;
      width: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 720px) {
    width: 90%;
  }
`;
