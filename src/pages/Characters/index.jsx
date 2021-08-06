
import { ButtonWrapper, Container, Content, CurrentStatContainer, PATitle, PAWrapper, Return, SectionTitle, StatContainer, StatWrapper, } from "./styles";
import PageBorder from "../../components/PageBorder";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CharacterSelect from "../../components/CharacterSelect";
import { useCharacters } from "../../providers/characters";
import CharacterStat from "../../components/CharacterStat";
import PA from "../../components/PA";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Characters = () => {
    const [isDamageVisible, setIsDamageVisible] = useState(false);
    const [isCureVisible, setIsCureVisible] = useState(false);
    const [isArmorVisible, setIsArmorVisible] = useState(false);
    const {characters, updateCharacter} = useCharacters();
    const [characterName, setCharacterName] = useState("");
    const [character, setCharacter] = useState(false)
    const [PAs, setPAs] = useState([])
    const [atualPA, setAtualPA] = useState(3)

    const handleValue = (value) =>{
        value >= atualPA ? setAtualPA(value+1) : setAtualPA(value)
    }

    const handleDamage = (damage) =>{
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
        } else if (damage < character.currentArmor){
            character.currentArmor -= damage 
        }
        updateCharacter(character)
    }

    const handleCure = (cure) =>{
        if (cure > character.maxHP || character.currentHP === character.maxHP){
            character.currentHP = character.maxHP
        } else {
            character.currentHP += cure 
        }
        updateCharacter(character)
    }

    const handleRecoverArmor = (armor) =>{
        if (armor > character.maxArmor || character.currentArmor === character.maxArmor){
            character.currentArmor = character.maxArmor
        } else {
            character.currentArmor += armor 
        }
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
                                </CurrentStatContainer>
                                    <PAWrapper>

                                        <PATitle>PA Atual</PATitle>
                                        <CurrentStatContainer>
                                            {PAs.map(index =>{
                                                return <PA PAvalue={index} used={atualPA} handleValue={handleValue}></PA>
                                            })}
                                        </CurrentStatContainer>
                                    </PAWrapper>
                            </> :
                            <h2>morreu</h2>
                            }
                            <ButtonWrapper>
                                <Button color={'--red'} onClickFunc = {() =>setIsDamageVisible(!isDamageVisible)}>Receber dano</Button>
                                <Button color={'--green'} onClickFunc = {() =>setIsCureVisible(!isCureVisible)}>Receber cura</Button>
                                <Button color={'--blue'} onClickFunc = {() =>setIsArmorVisible(!isArmorVisible)}>Recuperar armadura</Button>
                            </ButtonWrapper>
                            
                        </>
                    }
                    <Modal
                      isModalVisible={isDamageVisible}
                      setIsModalVisible={setIsDamageVisible}
                      handleDamage={handleDamage}
                      text={'Quantidade de dano'}
                      title={'Dano'}
                      color={'--red'}
                    ></Modal>
                    <Modal
                      isModalVisible={isCureVisible}
                      setIsModalVisible={setIsCureVisible}
                      handleDamage={handleCure}
                      text={'Quantidade de cura'}
                      title={'Cura'}
                      color={'--green'}
                    ></Modal>
                    <Modal
                      isModalVisible={isArmorVisible}
                      setIsModalVisible={setIsArmorVisible}
                      handleDamage={handleRecoverArmor}
                      text={'Quantidade de armadura'}
                      title={'Armadura'}
                      color={'--blue'}
                    ></Modal>
                    <CharacterSelect handleSelect={ handleSelect} characterName={characterName}></CharacterSelect>
                </Content>
            </PageBorder>
        </Container>
    );
};

export default Characters;
