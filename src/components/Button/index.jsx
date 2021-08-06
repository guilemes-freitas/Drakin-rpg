import { Border, Container } from "./styles";

const Button = ({onClickFunc, color,children, size, whiteSchema=false}) => {
    return(
        <Container whiteSchema={whiteSchema} size={size} onClick={onClickFunc} color={color}>
            <Border whiteSchema={whiteSchema} size={size}>
                {children}
            </Border>
        </Container>
    );
}

export default Button