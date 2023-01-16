import { useEffect, useRef, useState } from "react";
import { AsideContainer, MenuWrapper, Wrapper } from "./styles";
import RadioSelector from "../RadioSelector";
import { useCharacters } from "../../providers/characters";

const CharacterSelect = ({handleSelect, characterName}) =>{
    const {characters} = useCharacters();
    const options = useRef([]);
    const [topIndicator, setTopIndicator] = useState("45px");
    const [leftIndicator, setLeftIndicator] = useState("-4px");
    const indicator = useRef(null);
  
    const getDimensions = () => {
        options.current.forEach((item) => {
            if (item?.className.includes("option--selected")) {
            const top = item.offsetTop;
            const left = item.offsetLeft;
            setLeftIndicator(`${left+33}px`);
            setTopIndicator(`${top+4}px`);
            }
        });
        options.current=[];
    };
  
    useEffect(() => {
      getDimensions();
    }, [characterName]);

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
                {!!characterName && <span className="indicator" ref={indicator}></span>}
                {characters.map((character,id) => {
                    return <RadioSelector
                    key={id}
                    options={options}  
                    name="character" 
                    value={character.name} 
                    selected={character.name === characterName} 
                    onChange={(e) => handleSelect(e)}>{character.name}</RadioSelector>
                })}
            </MenuWrapper>
        </Wrapper>
    </AsideContainer>
    );
}

export default CharacterSelect;