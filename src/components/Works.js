import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Fragment } from "react";
import PortfolioCard from "../UI/PortfolioCard";
import ShopListImage from "../images/shoplist.png";
import DevZoneImage from "../images/devzone.png";
import InfMario from "../images/str-ext.png";
import PortfolioScr from "../images/portfolio.png";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "8rem",
    [theme.breakpoints.down(485)]: { paddingTop: "11rem" },

    //   title: {
    //     paddingTop: "9rem",
    //     ["@media (min-height:465px)"]: { paddingTop: "12rem" },
    //   },
  },
}));
const Works = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography
          id="work"
          variant="h5"
          className={classes.title}
          gutterBottom
        >
          Some of my latest works
        </Typography>
      </Grid>

      <PortfolioCard
        title="Smart ShopList"
        screenshot={ShopListImage}
        link="https://wh1tetiger.github.io/shoplist/"
        gitHub="https://github.com/wh1tetiger/shoplist"
        buttonText="View App"
        description="Adaptive web application made with React. Why is it smart? Try to add items like 'paint', 'screws' or 'cement'. Depending on the input, application suggests additional input fields."
        tags={[
          "React",
          "HTML5",
          "CSS",
          "FlexBox",
          "JavaScript",
          "Firebase",
          "JSON",
        ]}
      />
      <PortfolioCard
        title="DevZone Website"
        screenshot={DevZoneImage}
        link="https://devzone.uber.space/"
        buttonText="Visit Page"
        description="Adaptive Wordpress template for a landing website, made using Bootstrap."
        tags={["WordPress", "PHP", "HTML5", "CSS", "Bootstrap"]}
      />
      <PortfolioCard
        title="Infinite Mario Bros. for Twitch"
        screenshot={InfMario}
        description="As a part of my bachelor thesis, I extended an open-source HTML5/JavaScript game to give the stream audience (on Twitch.tv) the possibility to influence the gameplay."
        link="https://drive.google.com/file/d/1hy39ph-xwW7OVmxS3AxM0leWP0q9uQ3s/view"
        buttonText="View Trailer"
        tags={[
          "JavaScript",
          "HTML5",
          "CSS3",
          "Node.js",
          "Twitch API",
          "Socket.io",
        ]}
      />
      <PortfolioCard
        title="Portfolio Page"
        screenshot={PortfolioScr}
        description="Adaptive web application, built with React and Material-UI frameworks."
        gitHub="https://github.com/wh1tetiger/shoplist"
        tags={["React", "JavaScript", "Material-UI", "HTML", "CSS", "Grid"]}
      />
    </Fragment>
  );
};

export default Works;
