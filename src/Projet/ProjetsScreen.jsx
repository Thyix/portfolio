import React from "react";
import { Link } from "react-router-dom";

const ProjetsScreen = () => {
  return (
    <>
      <h1>Projets</h1>

      <Link to="/projet/ajout">Ajout</Link>
      <Link to="/projet/list">Liste</Link>
    </>
  );
};

export default ProjetsScreen;
