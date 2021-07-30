import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--white);
    height: 80px;
        width: 220px;
    @media (min-width: 1020px) {
        width: 432px;
    }
`;

export const Text = styled.h2`
    color: var(--white);
        font-size: 18px;

    @media (min-width: 1020px) {
        font-size: 36px;
    }
`;