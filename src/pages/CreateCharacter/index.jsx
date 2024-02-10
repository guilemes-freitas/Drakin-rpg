import Input from "../../components/Input";
import {
  Container,
  FormContainer,
  ButtonWrapperRight,
  Content,
  RaceTitle,
  RaceImage,
  Benefits,
  Description,
} from "./styles";
import { Return } from "../Characters/styles";
import { useState } from "react";
import raceStatus from "../../utils/raceStatus";
import ArrowButton from "../../components/ArrowButton";
import RaceSelect from "../../components/RaceSelect";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useCharacters } from "../../providers/characters";

const CreateCharacter = () => {
  const [race, setRace] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [disadvantages, setDisadvantages] = useState(false);
  const [raceInfo, setRaceInfo] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const {savePreCharacter} = useCharacters()
  const [display,setDisplay] = useState(false)

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

  const history = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const character = {name: name,
    race: race}
    if(!name || !race){
      setError(true)
    }else{
      const alreadyHave = savePreCharacter(character)
      alreadyHave ? setError(true) : history("/stats")
    }
  };

  return (
    <Container>
      <RaceImage image={raceInfo && raceInfo.image}></RaceImage>
      <Button onClickFunc={() => setDisplay(!display)} color={"--blue"} size={"small"}>{display ? "Status" : "Descrição"}</Button>
      <Benefits display={!display}>{raceInfo && benefits.map((benefit,index) => {return <span key={index}>{benefit}</span>})}
      {disadvantages && disadvantages.map((disadvantage,index) => {return <span key={index} className="disadvantage">{disadvantage}</span>})}</Benefits>
      
      {raceInfo && <Description display={display}>{raceInfo.description}</Description>}
      <FormContainer onSubmit={onSubmitFunction}>
        <RaceTitle>{raceInfo && raceInfo.race}</RaceTitle>
        <Content>
          <Return onClick={() => history.push("/")}>RETORNAR</Return>
          <Input
            name="name"
            label=""
            placeholder={raceInfo && raceInfo.race}
            onChange={handleName}
            error={error}
          ></Input>
        </Content>
        <ButtonWrapperRight>
          <ArrowButton type="submit"></ArrowButton>
        </ButtonWrapperRight>
        <RaceSelect handleSelect={handleSelect} race={race}></RaceSelect>
      </FormContainer>
    </Container>
  );
};

export default CreateCharacter;
