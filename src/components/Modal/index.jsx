
import {
  BodyContainer,
  CustomModal,
  ButtonWrap, 
  ButtonForm,
  Title,
  Button, ButtonWrapper,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import "antd/dist/antd.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Modal = ({ isModalVisible = false,handleDamage,title,text, setIsModalVisible,color }) => {
  const [statValue,setStatValue] = useState(0);
  const minValue = 0;
  const maxValue = 999;

  const handleDecrease = () => {
    if(statValue > minValue){
      setStatValue(statValue - 1)
    }
  };

  const handleIncrease = () =>{
    if(statValue < maxValue){
      setStatValue(statValue + 1)
    }
  };

  const handleIncrease100 = () =>{
    if((statValue+100) <= maxValue){
      setStatValue(statValue + 100)
    }
  };

  const handleIncrease10 = () =>{
    if((statValue+10) <= maxValue){
      setStatValue(statValue + 10)
    }
  };

  const handleDecrease10 = () =>{
    if((statValue-10) >= minValue){
      setStatValue(statValue - 10)
    }
  };

  const handleDecrease100 = () =>{
    if((statValue-100) >= minValue){
      setStatValue(statValue - 100)
    }
  };

  const handleCloseModal = () => {
    setStatValue(0)
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    handleDamage(statValue)
    setStatValue(0)
    setIsModalVisible(false);
  };


  return (
    <CustomModal
      visible={isModalVisible}
      width={500}
      title={<Title>{title}</Title>}
      onCancel={handleCloseModal}
      closeIcon={<FaTimes />}
      modalColor={color}
      footer={[
        <ButtonWrap>
            <>
              <ButtonForm
                color={color}
                onClick={handleCloseModal}
                type="submit"
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 110,
                }}
              >
                Cancelar
              </ButtonForm>
              <ButtonForm
                color={color}
                type="submit"
                onClick={handleConfirm}
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 90,
                }}
              >
                Confirmar
              </ButtonForm>
            </>
        </ButtonWrap>,
      ]}
    >
      <BodyContainer>
        <ButtonWrapper>
          <Button 
                  disabled={statValue+100 > maxValue}
                  onClick={handleIncrease100}
              >
              +100
          </Button>
          <Button 
                  disabled={statValue+10 > maxValue}
                  onClick={handleIncrease10}
              >
              +10
          </Button>
          <Button 
                  disabled={statValue-10 < minValue}
                  onClick={handleDecrease10}
              >
              -10
          </Button>
          <Button 
                  disabled={statValue-100 < minValue}
                  onClick={handleDecrease100}
              >
              -100
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
            <h3>{text}</h3>
            <Button 
                disabled={statValue === minValue}
                onClick={handleDecrease}
            >
            <FaChevronLeft></FaChevronLeft>
            </Button>
            {statValue}
            <Button 
                disabled={statValue === maxValue}
                onClick={handleIncrease}
            >
            <FaChevronRight></FaChevronRight>
            </Button>
        </ButtonWrapper>
      </BodyContainer>
    </CustomModal>
  );
};

export default Modal;