import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ListeProjetApi from "../Liste/api/ListeProjetApi";

const AjoutProjetScreen = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [article, setArticle] = useState("");
  return (
    <div>
      <TextField
        label="Nom"
        fullWidth
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Image"
        fullWidth
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label="Article"
        fullWidth
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />

      <Button
        onClick={() =>
          ListeProjetApi.ajouterProjet({ nom, description, image, article })
        }
      >
        Sauvegarder
      </Button>
    </div>
  );
};

export default AjoutProjetScreen;
