import React from "react";
import CarteDeProjet from "./components/CarteDeProjet";
import useListeProjet from "./hooks/useListeProjet";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  exemple: {
    color: theme.palette.primary.main,
  },
}));

const ListeProjetScreen = () => {
  const classes = useStyle();
  const { listeProjets, loading } = useListeProjet();
  console.log(listeProjets);

  return (
    <>
      <h1 className={classes.exemple}>Liste de projets</h1>

      {listeProjets.map((projet) => (
        <CarteDeProjet projet={projet} key={Math.random()} />
      ))}
    </>
  );
};

export default ListeProjetScreen;
