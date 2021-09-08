import React from "react";
import { Switch, Route } from "react-router-dom";
import AjoutProjetScreen from "../Ajout/AjoutProjetScreen";
import ListeProjetScreen from "../Liste/ListeProjetScreen";
import ProjetsScreen from "../ProjetsScreen";

class ProjectNavigator extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/projet">
          <ProjetsScreen />
        </Route>

        <Route path="/projet/ajout">
          <AjoutProjetScreen />
        </Route>

        <Route path="/projet/list">
          <ListeProjetScreen />
        </Route>
      </Switch>
    );
  }
}

export default ProjectNavigator;
