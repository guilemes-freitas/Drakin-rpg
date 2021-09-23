import {ButtonWrapperLeft, ButtonWrapperRight ,CharacterStatWrapper, CloudBackground, Container, Figure, LeftContainer, LeftSide, Middle, MiddleContainer, Points, RightSide, RightSideContainer, StatsContainer, StatWrapper, StatWrapperAbsolute} from "./styles";
import { useState } from "react";
import raceStatus from "../../utils/raceStatus";
import ArrowButton from "../../components/ArrowButton";
import { useHistory } from "react-router-dom";
import Stat from "../../components/Stat";
import { useCharacters } from "../../providers/characters";
import { FaPlusCircle, FaBolt, FaDumbbell, FaFistRaised, FaBrain, FaSun, FaCommentDots, FaEye, FaLightbulb } from "react-icons/fa";
import CharacterStat from "../../components/CharacterStat";
import calculateHP from "../../utils/calculateHP";

const CreateStats = () => {
    const {preCharacter, characters, addCharacter} = useCharacters()
    const raceBonuses = raceStatus.filter((race)=>{
        return race.race === preCharacter.race
    })
    const [availablePoints, setAvailablePoints] = useState(raceBonuses[0]?.bonus.points ? 5+raceBonuses[0].bonus.points : 5);
    const [vigor, setVigor] = useState(5);
    const [strength, setStrength] = useState(5);
    const [dexterity, setDexterity] = useState(5);
    const [intelligence, setIntelligence] = useState(5);
    const [agility, setAgility] = useState(5);
    const [faith, setFaith] = useState(5);
    const [charisma, setCharisma] = useState(5);
    const [perception, setPerception] = useState(5);
    const [wisdom, setWisdom] = useState(5);
    const [error, setError] = useState(false);

    const history = useHistory();
    const handlePoints = (value) =>{
        setAvailablePoints(availablePoints+value)
        setError(false)
    }

    const onSubmitFunction = () => {
        const stats = {
            vigor:vigor,
            strength:strength,
            dexterity:dexterity,
            intelligence:intelligence,
            agility:agility,
            faith:faith,
            charisma:charisma,
            perception:perception,
            wisdom:wisdom,
        }

        const totalStats = {};
        
        [stats,raceBonuses[0].bonus].forEach(stat => { 
            for (let [key, value] of Object.entries(stat)) {
                totalStats[key] ? totalStats[key] += value : totalStats[key] = value
            }
        });
        const PA = totalStats.agility < 5 ? 2 : 3 + Math.floor(totalStats.agility/12)
        const CA = totalStats.agility < 8 ? 4 : 4 + Math.floor((totalStats.agility-4)/4)

        const character = {
            id: characters.length,
            name: preCharacter.name,
            race: preCharacter.race,
            level:0,
            maxHP: calculateHP(vigor),
            currentHP: calculateHP(vigor),
            maxArmor: 0,
            currentArmor: 0,
            extraArmor: {
                points: 0,
                turns: 0, 
            },
            stats:totalStats,
            PA: PA,
            CA: CA,
            gold:raceBonuses[0]?.bonus.gold ? raceBonuses[0].bonus.gold + 150 : 150,
            experience:0,
            effects:{
                stun:false,
                bleed:{
                    points:0,
                    turns:0
                },
                blight:{
                    points:0,
                    turns:0
                },
                burning:{
                    points:0,
                    turns:0
                },
                haste:{
                    points:0,
                    turns:0
                },
                breathingBubble:{
                    points:0,
                    turns:0
                },
                erraticWisp:{
                    points:0,
                    turns:0
                },
                favorableWind:{
                    points:0,
                    turns:0
                },
                soothingCold:{
                    points:0,
                    turns:0
                },
                chilled:{
                    isEffected:false,
                    turns:0
                },
                shocked:{
                    isEffected:false,
                    turns:0
                },
                wet:{
                    isEffected:false,
                    turns:0
                },
                slowed:{
                    isEffected:false,
                    turns:0
                },
                silenced:{
                    isEffected:false,
                    turns:0
                },
            },
            resistences:{
                bleed: 0,
                blight: 0,
                stun:{
                    base: 0,
                    temporary: 0,
                    turns: 0,
                },
                mental:0,
                strength:0,
                agility:0,
                

            },
            proficiences:raceBonuses[0].proficiences,
            deathsDoor:{
                resistence: 0,
                throws: []
            },
        }
        if(availablePoints > 0){
            setError(true)
        }else{
            addCharacter(character)
            history.push("/")
        }
  };

  if(!Object.keys(preCharacter).length){
      history.push("/")
  }

  return (
    <>
        <CloudBackground></CloudBackground>
            <LeftContainer>
                <LeftSide/>
                <CharacterStatWrapper>
                    <p>Nome: {preCharacter.name}</p>
                    <p>Raça: {preCharacter.race}</p>
                    <p>Nível: 0</p>
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
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.vigor} handlePoints={handlePoints} statType={"Vigor"} setValue={setVigor} statValue={vigor}><FaPlusCircle/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.agility} handlePoints={handlePoints} statType={"Agilidade"} setValue={setAgility} statValue={agility}><FaBolt/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.strength} handlePoints={handlePoints} statType={"Força"} setValue={setStrength} statValue={strength}><FaDumbbell/></Stat>
                </StatWrapper>
                <StatWrapper>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.faith} handlePoints={handlePoints} statType={"Fé"} setValue={setFaith} statValue={faith}><FaSun/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.charisma} handlePoints={handlePoints} statType={"Carisma"} setValue={setCharisma} statValue={charisma}><FaCommentDots/></Stat>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.dexterity} handlePoints={handlePoints} statType={"Destreza"} setValue={setDexterity} statValue={dexterity}><FaFistRaised/></Stat>      
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.intelligence} handlePoints={handlePoints} statType={"Inteligência"} setValue={setIntelligence} statValue={intelligence}><FaBrain/></Stat>
                </StatWrapper>
                <StatWrapper>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.perception} handlePoints={handlePoints} statType={"Percepção"} setValue={setPerception} statValue={perception}><FaEye/></Stat>
                </StatWrapper>
                <StatWrapperAbsolute>
                    <Stat disabled={availablePoints<=0} bonus={raceBonuses[0]?.bonus.wisdom} handlePoints={handlePoints} statType={"Sabedoria"} setValue={setWisdom} statValue={wisdom}><FaLightbulb/></Stat>
                </StatWrapperAbsolute>
            </StatsContainer>
            <ButtonWrapperRight>
                <ArrowButton onClickFunc={onSubmitFunction}></ArrowButton>
            </ButtonWrapperRight>
            <ButtonWrapperLeft>
                <ArrowButton onClickFunc={()=> history.push("/newCharacter")} isLeft></ArrowButton>
            </ButtonWrapperLeft>
        </Container>
    </>
  );
};

export default CreateStats;
