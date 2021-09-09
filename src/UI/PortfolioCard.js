import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  actions: { display: "flex", justifyContent: "flex-end" },
  tagBlock: { marginBottom: "1rem" },
  tags: { margin: "0.1rem" },
});

function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea href={props.link}>
          <CardMedia
            component="img"
            alt={props.titel}
            width="100%"
            height="auto"
            image={props.screenshot}
            title={props.titel}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {props.title}
            </Typography>
            <div className={classes.tagBlock}>
              {props.tags &&
                props.tags.map((item) => (
                  <Chip
                    key={item}
                    size="small"
                    label={item}
                    className={classes.tags}
                  />
                ))}
            </div>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              gutterBottom
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button href={props.link} size="small" color="primary">
            {props.buttonText}
          </Button>
          {props.gitHub && (
            <Button href={props.gitHub} size="small" color="primary">
              Git Repo
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PortfolioCard;
