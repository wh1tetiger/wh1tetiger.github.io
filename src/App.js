import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import NavBar from "./UI/NavBar";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Works from "./components/Works";
import About from "./components/About";
import Skills from "./components/Skills";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    borderTop: "1px solid lightgray",
    display: "flex",
    justifyContent: "flex-end",
    margin: "auto",
    width: "98%",
    marginTop: "2rem",
  },
  "foot-link": {
    color: "gray",
    margin: "0.5rem",
    "font-size": "small",
  },
  tabs: { height: "400px" },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <NavBar component="header" value={value} onChange={handleChange}></NavBar>
      <Container component="main">
        <Grid container spacing={3} className={classes.root}>
          <About />
          <Skills />
          <Works />
        </Grid>
      </Container>
      <Box component="footer" className={classes.footer}>
        <Box component="span" className={classes["foot-link"]}>
          &copy; 2021&nbsp;
          <Link href="https://wh1tetiger.github.io/">WH1TETIGER.GITHUB.IO</Link>
        </Box>
      </Box>
    </Fragment>
  );
};

export default App;
