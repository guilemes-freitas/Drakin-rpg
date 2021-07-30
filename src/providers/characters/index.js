import { createContext, useContext, useState } from "react";
export const CharacterContext = createContext([]);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || []);
  const [preCharacter, setPreCharacter] = useState(JSON.parse(localStorage.getItem(`@Drakin:PreCharacter`)) || {});

  const addCharacter = (newCharacter) => {
    const list = JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || [];
    newCharacter && list.push(newCharacter);
    localStorage.setItem(`@Drakin:Characters`, JSON.stringify(list));
    localStorage.removeItem(`@Drakin:PreCharacter`);
    setPreCharacter({});
    setCharacters(list);
  };

  const removeCharacter = (deletedCharacter) =>{
    const list = characters.filter((filtered) => filtered.id !== deletedCharacter.id);
    localStorage.setItem(`@Drakin:Characters`, JSON.stringify(list));
    setCharacters(list);
  };

  const savePreCharacter = (data) =>{
    let alreadyHave = false
    localStorage.setItem(`@Drakin:PreCharacter`, JSON.stringify(data));
    const list = JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || [];
    const nameList = list.map((character)=>{
      return character.name
    })
    if(!nameList.includes(data.name)){
      setPreCharacter(data);
    } else{
      alreadyHave = true
    }
    return alreadyHave
  };

  return (
    <CharacterContext.Provider
      value={{ characters, addCharacter, removeCharacter, preCharacter, savePreCharacter}}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => useContext(CharacterContext);