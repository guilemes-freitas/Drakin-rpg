import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  height: 100vh;
  padding: 0px 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 96%;
`;

export const Return = styled.button`
    font-size: 18px;
    bottom: 98.2%;
    left: 30px;
    position: absolute;
    background-color: var(--black);
    color: white;
    font-family: 'Pirata One';
`
