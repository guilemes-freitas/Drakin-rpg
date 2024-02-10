import { useRef } from "react";
import { AsideContainer, MenuWrapper, Wrapper } from "./styles";
import raceStatus from "../../utils/raceStatus";
import RadioSelector from "../RadioSelector";

const RaceSelect = ({handleSelect, race}) =>{
  const races = useRef([]);
    
  return (
    <AsideContainer>
      <Wrapper>
        <MenuWrapper>
          {raceStatus.map(status => {
            return <RadioSelector
              key={status.race}
              options={races}  
              name="race" 
              value={status.race} 
              selected={status.race === race} 
              onChange={(e) => handleSelect(e)}>{status.race}
            </RadioSelector>
          })}
        </MenuWrapper>
      </Wrapper>
    </AsideContainer>
  );
}

export default RaceSelect;