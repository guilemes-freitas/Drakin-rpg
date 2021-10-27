import { Route, Switch } from "react-router";
import Characters from "../pages/Characters";
import CreateCharacter from "../pages/CreateCharacter";
import CreateStats from "../pages/CreateStats";
import Dashboard from "../pages/Dashboard";
import LevelUpCharacter from "../pages/LevelUpCharacter";

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/">
            <Dashboard></Dashboard>
        </Route>
        <Route path="/characters">
            <Characters></Characters>
        </Route>
        <Route path="/newCharacter">
            <CreateCharacter></CreateCharacter>
        </Route>
        <Route path="/stats">
            <CreateStats></CreateStats>
        </Route>
        <Route path="/levelup">
            <LevelUpCharacter></LevelUpCharacter>
        </Route>
    </Switch>
  );
};

export default Routes;