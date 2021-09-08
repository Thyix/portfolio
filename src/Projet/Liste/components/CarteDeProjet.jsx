import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const CarteDeProjet = ({ projet }) => {
  const classes = useStyles();
  console.log(projet);
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{projet.nom}</Typography>
        <Typography variant="h6">{projet.description}</Typography>
      </CardContent>

      <CardMedia className={classes.media} image={projet.image} />

      <CardActions>
        <Button onClick={() => window.location.replace(projet.article)}>
          Aller vers l'article
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarteDeProjet;
