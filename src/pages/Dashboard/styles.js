import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
padding: 0px 30px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  background-color: var(--black);
  padding: 0 5px;
  bottom: 97%;
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