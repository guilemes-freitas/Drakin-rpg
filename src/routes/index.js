import { Route, Routes } from "react-router";
import Characters from "../pages/Characters";
import CreateCharacter from "../pages/CreateCharacter";
import CreateStats from "../pages/CreateStats";
import Dashboard from "../pages/Dashboard";
import LevelUpCharacter from "../pages/LevelUpCharacter";
import Rules from "../pages/Rules";

const RoutesDefiner = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/newCharacter" element={<CreateCharacter/>}/>
        <Route path="/stats" element={<CreateStats/>}/>
        <Route path="/levelup" element={<LevelUpCharacter/>}/>
        <Route path="/rules" element={<Rules/>}/>
    </Routes>
  );
};

export default RoutesDefiner;