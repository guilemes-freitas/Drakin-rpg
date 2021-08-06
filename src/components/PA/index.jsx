import { Content, FirstSquare, SecondSquare } from "./styles";

const PA = ({PAvalue,used,handleValue}) => {
    return(
        <Content used={PAvalue >= used} onClick={() => handleValue(PAvalue)}>
            <FirstSquare>
                <SecondSquare>
                </SecondSquare>
            </FirstSquare>
        </Content>
    );
}

export default PA