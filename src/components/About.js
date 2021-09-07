import { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import MyAvatar from "../images/avatar.jpg";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "8rem;",
    [theme.breakpoints.down(485)]: { paddingTop: "11rem" },
  },
  about: {
    display: "flex",
    flexDirection: "row",
    "align-items": "center",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: "2rem",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography
          id="about"
          variant="h5"
          className={classes.title}
          gutterBottom
        >
          About me
        </Typography>
        <Box className={classes.about}>
          <Box>
            <Avatar
              alt="Maksim Shpakov"
              src={MyAvatar}
              className={classes.large}
            />
          </Box>
          <Box>
            <p>Hi there!</p>
            <p>
              My name is Maksim Shpakov, and I am a software and web developer
              from Germany currently working as an intern on AI and Deep
              Learning projects at DFKI (German Research Center for Artificial
              Intelligence). You can learn more about me from my{" "}
              <Link href="https://www.linkedin.com/in/mshpakov/">
                LinkedIn profile
              </Link>
              .
            </p>
            <p>Thanks for your interest and welcome to my portfolio page!</p>
          </Box>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default About;
