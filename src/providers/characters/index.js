import { createContext, useContext, useState } from "react";
export const CharacterContext = createContext([]);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || []);
  const [preCharacter, setPreCharacter] = useState(JSON.parse(localStorage.getItem(`@Drakin:PreCharacter`)) || {});
  const [character, setCharacter] = useState(false);

  const addCharacter = (newCharacter) => {
    let list = JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || [];
    // Ordenando a lista para os ids ficarem em ordem crescente
    list.sort((a,b)=>{
      return a.id - b.id
    })
    newCharacter && list.push(newCharacter);
    localStorage.setItem(`@Drakin:Characters`, JSON.stringify(list));
    localStorage.removeItem(`@Drakin:PreCharacter`);
    setPreCharacter({});
    setCharacters(list);
  };

  const removeCharacter = (deletedCharacter) =>{
    let list = characters.filter((filtered) => filtered.id !== deletedCharacter.id);
    // Ordenando a lista para os ids ficarem em ordem crescente
    list.sort((a,b)=>{
      return a.id - b.id
    })
    localStorage.setItem(`@Drakin:Characters`, JSON.stringify(list));
    setCharacters(list);
  };

  const savePreCharacter = (data) =>{
    let alreadyHave = false
    localStorage.setItem(`@Drakin:PreCharacter`, JSON.stringify(data));
    let list = JSON.parse(localStorage.getItem(`@Drakin:Characters`)) || [];
    list.sort((a,b)=>{
      return a.id - b.id
    })
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

  const updateCharacter = (data) =>{
    let list = characters.filter((filtered) => filtered.id !== data.id);
    data && list.push(data);
    list.sort((a,b)=>{
      return a.id - b.id
    })
    localStorage.setItem(`@Drakin:Characters`, JSON.stringify(list));
    setCharacters(list);
    setCharacter(data);
  }

  return (
    <CharacterContext.Provider
      value={{ characters, addCharacter, removeCharacter, preCharacter, updateCharacter, savePreCharacter,character,setCharacter}}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => useContext(CharacterContext);