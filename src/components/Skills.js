import React from "react";
import { loadCSS } from "fg-loadcss";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Skill from "../UI/Skill";
import SkillSVG from "../UI/SkillSVG";
import PsIcon from "../images/ps-logo.svg";
import MatUI from "../images/matui.svg";
import WebSoc from "../images/websocket.svg";
import Arduino from "../images/arduino.svg";
import Postgre from "../images/postgresql.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "8rem",
    [theme.breakpoints.down(485)]: { paddingTop: "11rem" },
  },

  "main-skills": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  "secondary-skills": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  skillName: { "text-align": "center" },
}));

const Skills = () => {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography
        variant="h5"
        className={classes.title}
        id="skills"
        gutterBottom
      >
        My Skill Set
      </Typography>

      <div className={classes["main-skills"]}>
        <Skill
          title="Python"
          fontSize="6rem"
          color="#4B8BBE"
          className="fab fa-python"
        />
        <Skill
          title="JavaScript"
          fontSize="6rem"
          color="#f0db4f"
          className="fab fa-js"
        />
        <Skill
          title="React"
          fontSize="6rem"
          color="#61DBFB"
          className="fab fa-react"
        />
        <Skill
          title="HTML5"
          fontSize="6rem"
          color="#e34c26"
          className="fab fa-html5"
        />
      </div>

      <div className={classes["secondary-skills"]}>
        <Skill
          title="Java"
          fontSize="2rem"
          className="fab fa-java"
          color="#f89820"
        />
        <Skill
          title="Node.js"
          fontSize="2rem"
          className="fab fa-node"
          color="#303030"
        />
        <Skill
          title="PHP"
          fontSize="2rem"
          className="fab fa-php"
          color="#8993be"
        />
        <Skill
          title="CSS"
          fontSize="2rem"
          className="fab fa-css3-alt"
          color="#264de4"
        />
        <Skill
          title="Bootstrap"
          fontSize="2rem"
          className="fab fa-bootstrap"
          color="#563d7c"
        />
        <Skill
          title="WordPress"
          fontSize="2rem"
          className="fab fa-wordpress"
          color="#21759b"
        />{" "}
        <Skill
          title="Git"
          fontSize="2rem"
          className="fab fa-git"
          color="#303030"
        />
        <SkillSVG title="Material-UI" icon={MatUI} />
        <SkillSVG title="Websocket API" icon={WebSoc} />
        <SkillSVG title="Arduino" icon={Arduino} />
        <SkillSVG title="PostgreSQL" icon={Postgre} />
        <SkillSVG title="Photoshop" icon={PsIcon} />
      </div>
    </Grid>
  );
};

export default Skills;
