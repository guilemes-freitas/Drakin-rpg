import { Button, ButtonWrapper, FirstHexagon, Logo, LogoTypeWrapper, SecondHexagon, ThirdHexagon, Type } from "./styles"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Stat = ({bonus, statValue,statType, children,setValue,maxValue=10,minValue=1, disabled, handlePoints}) =>{

    const handleDecrease = () => {
        if(statValue > minValue){
            setValue(statValue - 1)
            handlePoints(1)
        }

    };

    const handleIncrease = () =>{
        if(statValue < maxValue){
            setValue(statValue + 1)
            handlePoints(-1);
        }
    };

    return(
        <FirstHexagon className="Hexagon" colorChange={statValue}>
            <SecondHexagon colorChange={statValue}>
                <ThirdHexagon colorChange={statValue}>
                    <LogoTypeWrapper>
                        <Logo colorChange={statValue}>{children}</Logo>
                        <Type colorChange={statValue}>{statType}</Type>
                    </LogoTypeWrapper>
                    <ButtonWrapper colorChange={statValue}>
                        <Button 
                            colorChange={statValue}
                            disabled={statValue === minValue}
                            onClick={handleDecrease}
                        >
                            <FaChevronLeft></FaChevronLeft>
                        </Button>
                        {!!bonus ? bonus + statValue : statValue}
                        <Button 
                            colorChange={statValue}
                            disabled={!!disabled}
                            onClick={handleIncrease}
                        >
                            <FaChevronRight></FaChevronRight>
                        </Button>
                    </ButtonWrapper>
                </ThirdHexagon>
            </SecondHexagon>
        </FirstHexagon>
    )
}

export default Stat