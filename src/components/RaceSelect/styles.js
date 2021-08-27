import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 280px;
    height: 80px;

    position: fixed;
    bottom: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    border-radius: 0;

    @media screen and (min-width: 720px) {
        border-radius: 0 24px 24px 0;
        height: unset;
        bottom: 80%;
        right: 0;

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

  .indicator {
    position: absolute;
    left: ${(props) => props.leftIndicator};
    top: 32px;
    background-color: var(--blue);
    height: 12px;
    width: 12px;
    z-index: 4;
    transition: left 500ms;
    transform: translateX(15px) rotate(45deg);
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
      height: 14px;
      width: 14px;
      top: 21px;
      left: 91px;
      top: ${(props) => props.topIndicator};
      transform: translateY(5px);
      z-index: 4;
      transition: top 500ms;
      transform: rotate(45deg);
    }
  }
`;

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
`;
