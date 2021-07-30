
import { Container, Content, Return, SectionTitle, } from "./styles";
import PageBorder from "../../components/PageBorder";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CharacterSelect from "../../components/CharacterSelect";

const Characters = () => {
    const [characterName, setCharacterName] = useState("");
    const handleSelect = (e) => {
        setCharacterName(e.target.value);
    };

    const history = useHistory();
    return (
        <Container>
            <PageBorder>
                <Content>
                    <SectionTitle>Jubirisclei</SectionTitle>
                    <CharacterSelect handleSelect={ handleSelect} characterName={characterName}></CharacterSelect>
                    <Return onClick={() => history.push("/")}>Retornar</Return>
                </Content>
            </PageBorder>
        </Container>
    );
};

export default Characters;
