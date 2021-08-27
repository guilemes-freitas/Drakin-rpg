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
  
  const ModalEffect = ({ isModalVisible = false, confirmFunc,setIsModalVisible }) => {
    const [statValue,setStatValue] = useState(0);
    const [turns,setTurns] = useState(0);
    const minValue = 0;
    const maxValue = 999;
    const turnsMaxValue = 10

    const handleTurnDecrease = () => {
        if(turns > minValue){
            setTurns(turns - 1)
        }
    };
    
    const handleTurnIncrease = () =>{
        if(turns < turnsMaxValue){
            setTurns(turns + 1)
        }
    };

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
  
    const handleCloseModal = () => {
      setStatValue(0)
      setIsModalVisible(false);
    };
  
    const handleConfirm = () => {
      confirmFunc(statValue,turns)
      setStatValue(0)
      setIsModalVisible(false);
    };
  
  
    return (
      <CustomModal
        visible={isModalVisible}
        width={500}
        title={<Title>Efeitos</Title>}
        onCancel={handleCloseModal}
        closeIcon={<FaTimes />}
        footer={[
          <ButtonWrap>
              <>
                <ButtonForm
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
              <h3>Quantidade</h3>
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
          <ButtonWrapper>
                <h3>Turnos</h3>
                <Button 
                        disabled={turns === minValue}
                        onClick={handleTurnDecrease}
                    >
                    <FaChevronLeft></FaChevronLeft>
                    </Button>
                    {turns}
                    <Button 
                        disabled={turns === turnsMaxValue}
                        onClick={handleTurnIncrease}
                    >
                    <FaChevronRight></FaChevronRight>
                </Button>
            </ButtonWrapper>
        </BodyContainer>
      </CustomModal>
    );
  };
  
  export default ModalEffect;