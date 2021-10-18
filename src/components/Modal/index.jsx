
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
import {handleDecrease, handleDecrease10, handleDecrease100, handleIncrease,handleIncrease10, handleIncrease100} from "../../utils/IncreaseDecrease";

const Modal = ({ isModalVisible = false,confirmFunc,handlePenetration=false,title,text, setIsModalVisible,color }) => {
  const [statValue,setStatValue] = useState(0);
  const [armorPenetration,setArmorPenetration] = useState(false);
  const [penetration,setPenetration] = useState(0);
  const minValue = 0;
  const maxValue = 999;

  const handleIsPenetration = () =>{
    setArmorPenetration(!armorPenetration)
    setPenetration(0)
  }

  const handleCloseModal = () => {
    setStatValue(0)
    setPenetration(0)
    setArmorPenetration(false)
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    confirmFunc(statValue)
    setStatValue(0)
    setIsModalVisible(false);
    handlePenetration && handlePenetration(penetration)
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
        {title === 'Dano' && <Button onClick={handleIsPenetration}>Penetração de armadura</Button>}
        {armorPenetration && <ButtonWrapper>
          <Button 
                disabled={penetration === minValue}
                onClick={() => setPenetration(handleDecrease(statValue,minValue))}
            >
            <FaChevronLeft></FaChevronLeft>
            </Button>
            {penetration}
            <Button 
                disabled={penetration === maxValue}
                onClick={() => setPenetration(handleIncrease(statValue,maxValue))}
            >
            <FaChevronRight></FaChevronRight>
            </Button>
            </ButtonWrapper>}
        <ButtonWrapper>
          <Button 
                  disabled={statValue+100 > maxValue}
                  onClick={() => setStatValue(handleIncrease100(statValue,maxValue))}
              >
              +100
          </Button>
          <Button 
                  disabled={statValue+10 > maxValue}
                  onClick={() => setStatValue(handleIncrease10(statValue,maxValue))}
              >
              +10
          </Button>
          <Button 
                  disabled={statValue-10 < minValue}
                  onClick={() => setStatValue(handleDecrease10(statValue,minValue))}
              >
              -10
          </Button>
          <Button 
                  disabled={statValue-100 < minValue}
                  onClick={() => setStatValue(handleDecrease100(statValue,minValue))}
              >
              -100
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
            <h3>{text}</h3>
            <Button 
                disabled={statValue === minValue}
                onClick={() => setStatValue(handleDecrease(statValue,minValue))}
            >
            <FaChevronLeft></FaChevronLeft>
            </Button>
            {statValue}
            <Button 
                disabled={statValue === maxValue}
                onClick={() => setStatValue(handleIncrease(statValue,maxValue))}
            >
            <FaChevronRight></FaChevronRight>
            </Button>
        </ButtonWrapper>
      </BodyContainer>
    </CustomModal>
  );
};

export default Modal;