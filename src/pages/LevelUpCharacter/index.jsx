import {CharacterStatWrapper, CloudBackground, Container, Figure, LeftContainer, LeftSide, Middle, MiddleContainer, Points, RightSide, RightSideContainer, StatsContainer, StatWrapper} from "./styles";
import { useState } from "react";
import raceStatus from "../../utils/raceStatus";
import { useHistory } from "react-router-dom";
import Stat from "../../components/Stat";
import { useCharacters } from "../../providers/characters";
import { FaPlusCircle, FaBolt, FaDumbbell, FaFistRaised, FaBrain, FaSun, FaCommentDots, FaEye, FaLightbulb } from "react-icons/fa";
import CharacterStat from "../../components/CharacterStat";
import calculateHP from "../../utils/calculateHP";
import { ButtonWrapperRight } from "./styles";
import ArrowButton from "../../components/ArrowButton";

const LevelUpCharacter = () => {
    const {updateCharacter,character,setCharacter} = useCharacters()
    console.log(character)
    const raceBonuses = raceStatus.filter((race)=>{
        return race.race === character.race
    })

    const [availablePoints, setAvailablePoints] = useState(raceBonuses[0]?.bonus.points ? 5+raceBonuses[0].bonus.points : 5);
    const [vigor, setVigor] = useState(character.stats.vigor);
    const [strength, setStrength] = useState(character.stats.strength);
    const [dexterity, setDexterity] = useState(character.stats.dexterity);
    const [intelligence, setIntelligence] = useState(character.stats.intelligence);
    const [agility, setAgility] = useState(character.stats.agility);
    const [faith, setFaith] = useState(character.stats.faith);
    const [charisma, setCharisma] = useState(character.stats.charisma);
    const [perception, setPerception] = useState(character.stats.perception);
    const [wisdom, setWisdom] = useState(character.stats.wisdom);
    const [error, setError] = useState(false);

    const history = useHistory();
    const handlePoints = (value) =>{
        setAvailablePoints(availablePoints+value)
        setError(false)
    }

    const onSubmitFunction = () => {
        if(availablePoints > 0){
            setError(true)
        }else{
            character.level +=1
            character.experience = 0 
            character.PA = agility < 5 ? 2 : 3 + Math.floor(agility/12)
            character.CA = agility < 8 ? 4 : 4 + Math.floor((agility-4)/4)
            character.maxHP = calculateHP(vigor)
            character.currentHP = calculateHP(vigor)
            character.stats.vigor = vigor
            character.stats.strength = strength
            character.stats.dexterity = dexterity
            character.stats.intelligence = intelligence
            character.stats.agility = agility
            character.stats.faith = faith
            character.stats.charisma = charisma
            character.stats.perception = perception
            character.stats.wisdom = wisdom
            character.stats.wisdom = wisdom
            updateCharacter(character)
            setCharacter(false)
            history.push("/characters")
        }
  };

  if(!Object.keys(character).length){
      history.push("/")
  }

  return (
    <>
        <CloudBackground></CloudBackground>
            <LeftContainer>
                <LeftSide/>
                <CharacterStatWrapper>
                    <p>Nome: {character.name}</p>
                    <p>Raça: {character.race}</p>
                    <p>Nível: {character.level}</p>
                    <p>Ouro: {raceBonuses[0]?.bonus.gold ? raceBonuses[0].bonus.gold + 150 : 150}</p>
                </CharacterStatWrapper>
            </LeftContainer>
            <MiddleContainer>
                <Middle/>
                <Figure></Figure>
                <Points error={error}>
                    <h4>{availablePoints}</h4>
                    <p>Pontos disponíveis</p>
                </Points>
            </MiddleContainer>
            <RightSideContainer>
                <RightSide/>
                <CharacterStatWrapper>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.vigor} statValue={calculateHP(vigor)} statType={"Vida"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.strength} statValue={strength} statType={"Força"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.agility} statValue={agility} statType={"Agilidade"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.faith} statValue={faith} statType={"Fé"}></CharacterStat>
                </CharacterStatWrapper>
                <CharacterStatWrapper>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.intelligence} statValue={intelligence} statType={"Inteligência"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.dexterity} statValue={dexterity} statType={"Destreza"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.charisma} statValue={charisma} statType={"Carisma"}></CharacterStat>
                    <CharacterStat bonus={raceBonuses[0]?.bonus.perception} statValue={perception} statType={"Percepção"}></CharacterStat>
                </CharacterStatWrapper>
            </RightSideContainer>
            
        <Container>
            <StatsContainer>
                <StatWrapper>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.vigor} handlePoints={handlePoints} statType={"Vigor"} setValue={setVigor} statValue={vigor} maxValue={80} minValue={character.stats.vigor}><FaPlusCircle/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.agility} handlePoints={handlePoints} statType={"Agilidade"} setValue={setAgility} statValue={agility} maxValue={48} minValue={character.stats.agility}><FaBolt/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.strength} handlePoints={handlePoints} statType={"Força"} setValue={setStrength} statValue={strength} maxValue={80} minValue={character.stats.strength}><FaDumbbell/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.faith} handlePoints={handlePoints} statType={"Fé"} setValue={setFaith} statValue={faith} maxValue={80} minValue={character.stats.faith}><FaSun/></Stat>
                </StatWrapper>
                <StatWrapper>
                    
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.charisma} handlePoints={handlePoints} statType={"Carisma"} setValue={setCharisma} statValue={charisma} maxValue={50} minValue={character.stats.charisma}><FaCommentDots/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.dexterity} handlePoints={handlePoints} statType={"Destreza"} setValue={setDexterity} statValue={dexterity} maxValue={80} minValue={character.stats.dexterity}><FaFistRaised/></Stat>      
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.intelligence} handlePoints={handlePoints} statType={"Inteligência"} setValue={setIntelligence} statValue={intelligence} maxValue={80} minValue={character.stats.intelligence}><FaBrain/></Stat>
                </StatWrapper>
                <StatWrapper>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.perception} handlePoints={handlePoints} statType={"Percepção"} setValue={setPerception} statValue={perception} maxValue={50} minValue={character.stats.perception}><FaEye/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.wisdom} handlePoints={handlePoints} statType={"Sabedoria"} setValue={setWisdom} statValue={wisdom} maxValue={40} minValue={character.stats.wisdom}><FaLightbulb/></Stat>
                </StatWrapper>
            </StatsContainer>
            <ButtonWrapperRight>
                <ArrowButton onClickFunc={onSubmitFunction}></ArrowButton>
            </ButtonWrapperRight>
        </Container>
    </>
  );
};

export default LevelUpCharacter;
