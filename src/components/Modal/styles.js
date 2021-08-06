import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  position: relative;
  h3 {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .ant-modal-header {
    background-color: var(${props => props.modalColor});
  }

  .ant-modal-content {
    background-color: var(${props => props.modalColor});
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(${props => props.modalColor});
    z-index: 1;
    padding: 24px 24px 12px;
  }

  .ant-modal-footer {
    background-color: var(${props => props.modalColor});
  }

  .ant-modal-footer .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ant-btn {
    width: 100px;
    background-color: var(${props => props.modalColor});
    border: 2px solid var(${props => props.modalColor});
    margin: 0;

    &:hover {
      filter: brightness(0.85);
    }
  }

  .ant-modal-body .ant-btn:first-child {
    width: 75px;
  }

  .ant-btn:last-child {
    background-color: var(${props => props.modalColor});
  }

  .ant-btn span {
    color: var(${props => props.modalColor});
    font-weight: bold;
  }

  .ant-btn:last-child span {
    color: var(--white);
    text-transform: capitalize;
    font-weight: bold;
  }

  @media (min-width: 430px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 22px;
    }

    @media (min-width: 600px) {
      .ant-btn {
        width: 150px;
      }
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  z-index: 350;
  min-height: 80px;

  > div {
    position: relative;
    z-index: 350;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  border-radius: 20px;

  margin: 20px 0 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
  }

  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: var(${props => props.color});

  color: var(--red);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 4px 0;
  }
`;

export const Title = styled.h2`
  color: var(--white);
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--white);
    transition: color 500ms;
    font-size: 24px;
`

export const Button = styled.button`
    background-color: transparent;
    font-size: 22px;
    color: var(--white);
    transition: color 500ms;
`