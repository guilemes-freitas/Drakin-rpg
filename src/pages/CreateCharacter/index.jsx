import Input from "../../components/Input";
import {
  Container,
  FormContainer,
  SectionTitle,
  ButtonWrapperRight,
  ButtonWrapperLeft,
  Content,
  RaceTitle,
  RaceImage,
  Benefits,
  Description,
} from "./styles";
import { useState } from "react";
import raceStatus from "../../utils/raceStatus";
import ArrowButton from "../../components/ArrowButton";
import PageBorder from "../../components/PageBorder";
import RaceSelect from "../../components/RaceSelect";
import { useHistory } from "react-router-dom";
import { useCharacters } from "../../providers/characters";

const CreateCharacter = () => {
  const [race, setRace] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [disadvantages, setDisadvantages] = useState(false);
  const [raceInfo, setRaceInfo] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const {savePreCharacter} = useCharacters()

  const handleSelect = (e) => {
    const newRaceInfo = raceStatus.filter((raceInfo) => {
      return raceInfo.race === e.target.value;
    })
    setRaceInfo(newRaceInfo[0]);
    setBenefits(newRaceInfo[0].benefits)
    newRaceInfo[0].disadvantages ?  setDisadvantages(newRaceInfo[0].disadvantages) : setDisadvantages(false)
    setRace(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value)
  };

  const history = useHistory();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const character = {name: name,
    race: race}
    if(!name || !race){
      setError(true)
    }else{
      const alreadyHave = savePreCharacter(character)
      alreadyHave ? setError(true) : history.push("/stats")
    }
  };

  return (
    <Container>
      <RaceImage image={raceInfo && raceInfo.image}></RaceImage>
      <Benefits>{raceInfo && benefits.map((benefit,index) => {return <span key={index}>{benefit}</span>})}
      {disadvantages && disadvantages.map((disadvantage,index) => {return <span key={index} className="disadvantage">{disadvantage}</span>})}</Benefits>
        {raceInfo && <Description>{raceInfo.description}</Description>}
      
      <PageBorder>
          <FormContainer onSubmit={onSubmitFunction}>
            <SectionTitle>Selecione uma raça</SectionTitle>
            <RaceTitle>{raceInfo && raceInfo.race}</RaceTitle>
            <Content>
              <Input
                name="name"
                label="Nome do personagem"
                placeholder=""
                onChange={handleName}
                error={error}
              ></Input>
              <RaceSelect handleSelect={handleSelect} race={race}></RaceSelect>
            </Content>
            <ButtonWrapperRight>
              <ArrowButton type="submit"></ArrowButton>
            </ButtonWrapperRight>
            <ButtonWrapperLeft>
              <ArrowButton onClickFunc={() => history.push("/")} isLeft></ArrowButton>
            </ButtonWrapperLeft>
          </FormContainer>
        </PageBorder>
    </Container>
  );
};

export default CreateCharacter;
