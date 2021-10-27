import { Progress } from "antd";
import { useCharacters } from "../../providers/characters"
import Button from "../../components/Button";
import {Container} from "./styles"
import { useHistory } from "react-router";

const LevelUp = ({character}) =>{
    const {updateCharacter,setCharacter} = useCharacters();

    const history = useHistory();
    const handleExperience = () =>{
        character.experience += 1; 
        if (character.experience >= character.level+1){
            // character.level +=1;
            // character.experience = 0; 
            setCharacter(character)
            history.push("/levelup")
        }else {
            updateCharacter(character);
        }
        
    }

    return(
        <Container>
            <h3>{`Level ${character.level}`}</h3>
            <Progress steps={character.level+1} percent={Math.floor((character.experience/(character.level+1))*100)} strokeColor="#31C95E" showInfo={false}/>
            <Button color={"--green"} onClickFunc={handleExperience}>+ Exp</Button>
        </Container>
    )
}

export default LevelUp