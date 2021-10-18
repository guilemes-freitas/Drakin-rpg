import {
    BodyContainer,
    CustomModal,
    ButtonWrap, 
    ButtonForm,
    Title,
    Button, ButtonWrapper, RadioButton, EffectImage, RadioButtonContainer, QuantityButtonContainer,
  } from "./styles";
import { FaTimes } from "react-icons/fa";
import "antd/dist/antd.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import {handleDecrease,handleIncrease} from "../../utils/IncreaseDecrease";
import Blight from "../../assets/images/Blight.png"
import Bleed from "../../assets/images/Bleed.png"
import Burning from "../../assets/images/Burning.png"

const ModalEffect = ({ isModalVisible = false, confirmFunc,setIsModalVisible }) => {
  const [statValue,setStatValue] = useState(0);
  const [type,setType] = useState("blight");
  const [turns,setTurns] = useState(0);
  const minValue = 0;
  const maxValue = 999;
  const turnsMaxValue = 10

  const handleCloseModal = () => {
    setStatValue(0);
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    confirmFunc(type,statValue,turns)
    setStatValue(0);
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
        <RadioButtonContainer>
          <RadioButton checked={type === "blight"} onClick={() => setType("blight")}>
            <EffectImage src={Blight} alt="Blight"></EffectImage>{"Envenenamento"}
          </RadioButton>
          <RadioButton checked={type === "bleed"} onClick={() => setType("bleed")}>
            <EffectImage src={Bleed} alt="Bleed"></EffectImage>{"Sangramento"}
          </RadioButton>
          <RadioButton checked={type === "burning"} onClick={() => setType("burning")}>
            <EffectImage src={Burning} alt="Burning"></EffectImage>{"Fogo"}
          </RadioButton>
        </RadioButtonContainer>
        <QuantityButtonContainer>
          <ButtonWrapper>
              <h3>Quantidade</h3>
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
          <ButtonWrapper>
                <h3>Turnos</h3>
                <Button 
                        disabled={turns === minValue}
                        onClick={() => setTurns(handleDecrease(turns,minValue))}
                    >
                    <FaChevronLeft></FaChevronLeft>
                    </Button>
                    {turns}
                    <Button 
                        disabled={turns === turnsMaxValue}
                        onClick={() => setTurns(handleIncrease(turns,maxValue))}
                    >
                    <FaChevronRight></FaChevronRight>
                </Button>
            </ButtonWrapper>
          </QuantityButtonContainer>
      </BodyContainer>
    </CustomModal>
  );
};

export default ModalEffect;