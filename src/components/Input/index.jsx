import { Container, Label } from "./styles";
import { InputItem } from "./styles";

const Input = ({ placeholder, error=false, label, ...rest }) => {
  return(
    <Container>
      <Label isErrored={!!error}>{label}</Label>
      <InputItem
        isErrored={!!error}
        placeholder={placeholder}
        {...rest}
        errored={!!error}
      ></InputItem>
    </Container>
  );
};

export default Input;
