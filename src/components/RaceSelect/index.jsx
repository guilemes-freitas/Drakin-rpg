import { useEffect, useRef, useState } from "react";
import { AsideContainer, MenuWrapper, Wrapper } from "./styles";
import raceStatus from "../../utils/raceStatus";
import RadioSelector from "../RadioSelector";

const RaceSelect = ({handleSelect, race}) =>{
    const races = useRef([]);
    const [topIndicator, setTopIndicator] = useState("45px");
    const [leftIndicator, setLeftIndicator] = useState("-4px");
    const indicator = useRef(null);
  
    const getDimensions = () => {
        races.current.forEach((item) => {
            if (item?.className.includes("option--selected")) {
            const top = item.offsetTop;
            const left = item.offsetLeft;
            setLeftIndicator(`${left+8}px`);
            setTopIndicator(`${top+4}px`);
            }
        });
        races.current=[];
    };
  
    useEffect(() => {
      getDimensions();
    }, [race]);

    window.onresize = () => {
        getDimensions();
    };
    
    return (
    <AsideContainer>
        <Wrapper>
            <MenuWrapper
            topIndicator={topIndicator}
            leftIndicator={leftIndicator}
            >
                {!!race && <span className="indicator" ref={indicator}></span>}
                {raceStatus.map(status => {
                    return <RadioSelector
                    key={status.race}
                    options={races}  
                    name="race" 
                    value={status.race} 
                    selected={status.race === race} 
                    onChange={(e) => handleSelect(e)}>{status.race}</RadioSelector>
                })}
            </MenuWrapper>
        </Wrapper>
    </AsideContainer>
    );
}

export default RaceSelect;