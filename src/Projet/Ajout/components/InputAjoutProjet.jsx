import React from "react";
import Button from "../../../main/components/Button";

class InputAjoutProjet extends React.Component {
  state = {
    nomDeProjet: "",
  };

  changerValeurNomDeProjet = (event) => {
    const { value } = event.target;

    this.setState({ nomDeProjet: value });
  };

  sauvegarde = (event) => {
    event.preventDefault();

    const { ajouterUnProjet } = this.props;

    ajouterUnProjet(this.state.nomDeProjet);

    this.setState({ nomDeProjet: "" });
  };

  render() {
    return (
      <form onSubmit={this.sauvegarde}>
        <h1>Nom de projet</h1>

        <input
          type="text"
          value={this.state.nomDeProjet}
          onChange={this.changerValeurNomDeProjet}
        />

        <Button type="submit">Sauvegarder un projet</Button>
      </form>
    );
  }
}

export default InputAjoutProjet;
