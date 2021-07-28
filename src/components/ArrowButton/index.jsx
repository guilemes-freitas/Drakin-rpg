import { ButtonItem, Triangle } from "./styles";

const ArrowButton = ({ onClickFunc, isLeft = false, ...rest }) => {
  return (
    <ButtonItem type="button" onClick={onClickFunc} {...rest}>
      <Triangle isLeft={isLeft} ></Triangle>
    </ButtonItem>
  );
};

export default ArrowButton;
