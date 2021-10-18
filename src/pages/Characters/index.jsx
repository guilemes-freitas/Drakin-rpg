
import { ButtonArmorWrapper, ButtonWrapper, Container, Content, CurrentStatContainer, EffectsWrapper, PATitle, PAWrapper, Return, SectionTitle, StatContainer, StatWrapper, TurnWrapper, } from "./styles";
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

const Characters = () => {
    const [isDamageVisible, setIsDamageVisible] = useState(false);
    const [isCureVisible, setIsCureVisible] = useState(false);
    const [isArmorVisible, setIsArmorVisible] = useState(false);
    const [isMaxArmorVisible, setIsMaxArmorVisible] = useState(false);
    const [isExtraArmorVisible, setIsExtraArmorVisible] = useState(false);
    const [isEffectModalVisible, setIsEffectModalVisible] = useState(false);
    const {characters, updateCharacter} = useCharacters();
    const [characterName, setCharacterName] = useState("");
    const [character, setCharacter] = useState(false)
    const [PAs, setPAs] = useState([])
    const [atualPA, setAtualPA] = useState(3)

    const handleValue = (value) =>{
        value >= atualPA ? setAtualPA(value+1) : setAtualPA(value)
    }

    const handlePenetration = (damage) =>{
        if (damage >= character.currentHP){
            damage = damage - character.currentHP
            if(damage > (character.maxHP/2)){
                console.log('morte instantanea!')
            }
            character.currentHP = 0
        }else{
            character.currentHP -= damage
        }
        updateCharacter(character)
    }

    const handleDamage = (damage) =>{
        if (damage >= character.extraArmor.points){
            damage = damage - character.extraArmor.points
            character.extraArmor.points = 0
            character.extraArmor.turns = 0

        }
        if (damage > character.currentArmor){
            damage = damage - character.currentArmor
            character.currentArmor = 0
            if (damage >= character.currentHP){
                damage = damage - character.currentHP
                if(damage > (character.maxHP/2)){
                    console.log('morte instantanea!')
                }
                character.currentHP = 0
            }else{
                character.currentHP -= damage
            }
        } else if (damage <= character.currentArmor){
            character.currentArmor -= damage 
        }
        updateCharacter(character)
    }

    const handleCure = (cure) =>{
        if (cure+character.currentHP > character.maxHP){
            character.currentHP = character.maxHP
        } else {
            character.currentHP += cure 
        }
        updateCharacter(character)
    }

    const handleRecoverArmor = (armor) =>{
        if (armor+character.currentArmor > character.maxArmor){
            character.currentArmor = character.maxArmor
        } else {
            character.currentArmor += armor 
        }
        updateCharacter(character)
    }

    const handleMaxArmor = (armor) =>{
        character.maxArmor = armor
        character.currentArmor = armor
        updateCharacter(character)
    }

    const handleExtraArmor = (armor,turns) =>{
        if(turns < character.extraArmor.turns){
            turns = character.extraArmor.turns
        }
        armor += character.extraArmor.points

        character.extraArmor = {points:armor,
                                turns:turns}
        updateCharacter(character)
    }

    const handleNextTurn = () =>{
        const damageEffects = ['bleed','blight','burning']
        damageEffects.map((effect) => {
            if(character.effects[effect].turns > 0){
                character.effects[effect].turns -= 1
                handlePenetration(character.effects[effect].points)
            }
            if(character.effects[effect].turns === 0){
                character.effects[effect] = {points: 0, turns:0}
            }
            return character
        })

        if(character.extraArmor.turns > 0){
            character.extraArmor.turns -= 1
        }
        if(character.extraArmor.turns === 0){
            character.extraArmor.points = 0
        }
        updateCharacter(character)
    }

    const handleEffect = (type,quantity,turn) => {
        character.effects[type].turns = turn
        character.effects[type].points = quantity
        updateCharacter(character)
    }

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
        setCharacter(characterArray[0])
        console.log(characterArray[0])
    };

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
                            </StatContainer>
                            {character?.currentHP > 0 ?
                            <>
                                <CurrentStatContainer>
                                    <CharacterStat statValue={character?.currentHP} statType={"Vida Atual"} type2></CharacterStat>
                                    <CharacterStat statValue={character?.currentArmor} statType={"Armadura"} type2 blueSchema></CharacterStat>
                                    <ExtraStat statValue={character?.extraArmor.points} statType={"Extra"} blueSchema></ExtraStat>
                                </CurrentStatContainer>
                                    <PAWrapper>

                                        <PATitle>PA Atual</PATitle>
                                        <CurrentStatContainer>
                                            {PAs.map(index =>{
                                                return <PA key={index} PAvalue={index} used={atualPA} handleValue={handleValue}></PA>
                                            })}
                                        </CurrentStatContainer>
                                    </PAWrapper>
                            </> :
                            <h2>morreu</h2>
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
                                <Button color={'--green'} size={'medium'} onClickFunc = {handleNextTurn}>Inicio de turno</Button>
                            </TurnWrapper>
                            <EffectsWrapper>
                                <Button whiteSchema size={'medium'} onClickFunc={() => setIsEffectModalVisible(!isEffectModalVisible)}>Efeitos</Button>
                            </EffectsWrapper>
                            
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
