import { Border, Container } from "./styles";

const Button = ({onClickFunc, color,children}) => {
    return(
        <Container onClick={onClickFunc} color={color}>
            <Border>
                {children}
            </Border>
        </Container>
    );
}

export default Button