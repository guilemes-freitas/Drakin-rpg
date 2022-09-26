
import { ButtonArmorWrapper, ButtonWrapper, Container, Content, 
    CurrentStatContainer, EffectImage, EffectFigure, EffectsWrapper, PATitle, 
    PAWrapper, Return, SectionTitle, StatContainer, StatWrapper, TurnWrapper } from "./styles";
import PageBorder from "../../components/PageBorder";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CharacterSelect from "../../components/CharacterSelect";
import { useCharacters } from "../../providers/characters";
import CharacterStat from "../../components/CharacterStat";
import PA from "../../components/PA";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import ModalExtraArmor from "../../components/ModalExtraArmor";
import ModalEffect from "../../components/ModalEffect";
import ExtraStat from "../../components/ExtraStat";
import Blight from "../../assets/images/Blight.png"
import Bleed from "../../assets/images/Bleed.png"
import Burning from "../../assets/images/Burning.png"
import {handlePenetrationCalc, handleDamageCalc, handleCureCalc, handleNextTurn, handleRecoverArmorCalc, handleMaxArmorCalc, handleExtraArmorCalc, handleEffectCalc} from "../../utils/CharacterCalculations"
import LevelUp from "../../components/LevelUp";

const Characters = () => {
    const [isDamageVisible, setIsDamageVisible] = useState(false);
    const [isCureVisible, setIsCureVisible] = useState(false);
    const [isArmorVisible, setIsArmorVisible] = useState(false);
    const [isMaxArmorVisible, setIsMaxArmorVisible] = useState(false);
    const [isExtraArmorVisible, setIsExtraArmorVisible] = useState(false);
    const [isEffectModalVisible, setIsEffectModalVisible] = useState(false);
    const {character, setCharacter,characters, updateCharacter, removeCharacter} = useCharacters();
    const [characterName, setCharacterName] = useState("");
    const [PAs, setPAs] = useState([])
    const [atualPA, setAtualPA] = useState(3)

    const handlePAValue = (value) =>{
        value >= atualPA ? setAtualPA(value+1) : setAtualPA(value)
    }
    
    const handlePenetration = (damage) => { updateCharacter(handlePenetrationCalc(damage,character)) }
    
    const handleDamage = (damage) => { updateCharacter(handleDamageCalc(damage,character)) }
    
    const handleCure = (cure) => { updateCharacter(handleCureCalc(cure,character)) }

    const handleRecoverArmor = (armor) => { updateCharacter(handleRecoverArmorCalc(armor, character)) }

    const handleMaxArmor = (armor) => { updateCharacter(handleMaxArmorCalc(armor,character)) }

    const handleExtraArmor = (armor,turns) => { updateCharacter(handleExtraArmorCalc(armor,turns,character)) }

    const handleEffect = (type,quantity,turn) => { updateCharacter(handleEffectCalc(type,quantity,turn,character)) }
    const handleSelect = (e) => {
        setCharacterName(e.target.value);
        const characterArray = characters.filter((character)=>{
            return character.name === e.target.value
        })
        let PAsTotal = []
        for(let i = 0; i < characterArray[0]?.PA;i++){
            PAsTotal.push(i)
        }
        setPAs(PAsTotal)
        setAtualPA(PAsTotal)
        setCharacter(characterArray[0])
    };

    const handleRemove = () =>{
        removeCharacter(character);
        setCharacter(false);
    }
    const history = useHistory();
    return (
        <Container>
            <PageBorder>
                <Content>
                    <Return onClick={() => history.push("/")}>RETORNAR</Return>
                    <SectionTitle>{character?.name}</SectionTitle>
                    {character && 
                        <>
                            <StatContainer>
                                <StatWrapper>
                                    <CharacterStat statValue={character?.maxHP} statType={"Vida Total"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.strength} statType={"Força"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.agility} statType={"Agilidade"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.faith} statType={"Fé"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.wisdom} statType={"Sabedoria"}></CharacterStat>
                                </StatWrapper>
                                <StatWrapper>
                                    <CharacterStat statValue={character?.stats.intelligence} statType={"Inteligência"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.dexterity} statType={"Destreza"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.charisma} statType={"Carisma"}></CharacterStat>
                                    <CharacterStat statValue={character?.stats.perception} statType={"Percepção"}></CharacterStat>
                                </StatWrapper>
                                <EffectsWrapper>
                                    <Button whiteSchema size={'medium'} onClickFunc={() => setIsEffectModalVisible(!isEffectModalVisible)}>Efeitos</Button>
                                    {character?.effects.bleed.turns > 0 && 
                                    <EffectFigure><EffectImage src={Bleed} alt="Sangramento" title={`Turnos: ${character.effects.bleed.turns}`}/><figcaption>{character.effects.bleed.points}</figcaption></EffectFigure>}
                                    {character?.effects.blight.turns > 0 && 
                                    <EffectFigure><EffectImage src={Blight} alt="Envenenamento" title={`Turnos: ${character.effects.blight.turns}`}/><figcaption>{character.effects.blight.points}</figcaption></EffectFigure>}
                                    {character?.effects.burning.turns > 0 && 
                                    <EffectFigure><EffectImage src={Burning} alt="Sangramento" title={`Turnos: ${character.effects.burning.turns}`}/><figcaption>{character.effects.burning.points}</figcaption></EffectFigure>}
                                </EffectsWrapper>
                            </StatContainer>
                            {
                                character?.currentHP > 0  ?
                                    <>
                                        <LevelUp character={character}/>
                                        <CurrentStatContainer>
                                            <CharacterStat statValue={character?.currentHP} statType={"Vida Atual"} type2></CharacterStat>
                                            <CharacterStat statValue={character?.currentArmor} statType={"Armadura"} type2 blueSchema></CharacterStat>
                                            <ExtraStat statValue={character?.extraArmor.points} statType={"Extra"} blueSchema></ExtraStat>
                                        </CurrentStatContainer>
                                            <PAWrapper>

                                                <PATitle>PA Atual</PATitle>
                                                <CurrentStatContainer>
                                                    {PAs.map(index =>{
                                                        return <PA key={index} PAvalue={index} used={atualPA} handleValue={handlePAValue}></PA>
                                                    })}
                                                </CurrentStatContainer>
                                            </PAWrapper>
                                    </> :
                                    <>
                                        <h2>morreu</h2>
                                        <Button color={'--red'} size={'medium'} onClickFunc={handleRemove}>Deletar personagem</Button>
                                    </>
                            }
                            <ButtonWrapper>
                                <Button color={'--red'} size={'big'} onClickFunc = {() =>setIsDamageVisible(!isDamageVisible)}>Receber dano</Button>
                                <Button color={'--green'} size={'big'} onClickFunc = {() =>setIsCureVisible(!isCureVisible)}>Receber cura</Button>
                                <ButtonArmorWrapper>
                                    <Button color={'--blue'} size={'medium'} onClickFunc = {() =>setIsExtraArmorVisible(!isExtraArmorVisible)}>Armadura extra</Button>
                                    <Button color={'--blue'} size={'big'} onClickFunc = {() =>setIsArmorVisible(!isArmorVisible)}>Recuperar armadura</Button>
                                    <Button color={'--blue'} onClickFunc = {() => setIsMaxArmorVisible(!isMaxArmorVisible)}>Armadura máxima</Button>
                                </ButtonArmorWrapper>
                            </ButtonWrapper>
                            <TurnWrapper>
                                <Button color={'--green'} size={'medium'} onClickFunc = {() => updateCharacter(handleNextTurn(character))}>Próximo turno</Button>
                            </TurnWrapper>
                            
                        </>
                    }
                    <Modal
                      isModalVisible={isDamageVisible}
                      setIsModalVisible={setIsDamageVisible}
                      confirmFunc={handleDamage}
                      handlePenetration={handlePenetration}
                      text={'Quantidade de dano'}
                      title={'Dano'}
                      color={'--red'}
                    ></Modal>
                    <Modal
                      isModalVisible={isCureVisible}
                      setIsModalVisible={setIsCureVisible}
                      confirmFunc={handleCure}
                      text={'Quantidade de cura'}
                      title={'Cura'}
                      color={'--green'}
                    ></Modal>
                    <Modal
                      isModalVisible={isArmorVisible}
                      setIsModalVisible={setIsArmorVisible}
                      confirmFunc={handleRecoverArmor}
                      text={'Quantidade de armadura'}
                      title={'Armadura'}
                      color={'--blue'}
                    ></Modal>
                    <Modal
                      isModalVisible={isMaxArmorVisible}
                      setIsModalVisible={setIsMaxArmorVisible}
                      confirmFunc={handleMaxArmor}
                      text={'Quantidade de armadura'}
                      title={'Armadura Máxima'}
                      color={'--blue'}
                    ></Modal>
                    <ModalExtraArmor
                      isModalVisible={isExtraArmorVisible}
                      setIsModalVisible={setIsExtraArmorVisible}
                      confirmFunc={handleExtraArmor}
                    ></ModalExtraArmor>
                    <ModalEffect
                      isModalVisible={isEffectModalVisible}
                      setIsModalVisible={setIsEffectModalVisible}
                      confirmFunc={handleEffect}
                    ></ModalEffect>
                    <CharacterSelect handleSelect={ handleSelect} characterName={characterName}></CharacterSelect>
                </Content>
            </PageBorder>
        </Container>
    );
};

export default Characters;
