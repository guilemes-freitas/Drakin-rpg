import styled from "styled-components";

export const AsideContainer = styled.aside`
  height: 300px;
  width: 100%;
  bottom: 0;
  z-index: 4;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: linear-gradient(180deg, rgba(46, 88, 155, 0) 0%, #2E589B 100%);
  border-radius: 0;
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: end;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 4;
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 100% ;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
