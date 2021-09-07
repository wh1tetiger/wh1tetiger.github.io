import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LogoIcon from "./LogoIcon";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import Background from "../images/at.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import _findIndex from "lodash.findindex";
import useScrollSpy from "../hooks/useScrollSpy";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 1rem 0",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    position: "fixed",
    top: 0,
  },

  "nav-head": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginBottom: "0.5rem",
    flexWrap: "nowrap",
    marginLeft: "auto",
  },
  logotype: { display: "flex", flexDirection: "row" },
  "icon-git": { fontSize: 25, color: "#fff", "&:hover": { color: "#808080" } },
  "icon-ln": { fontSize: 30, color: "#fff", "&:hover": { color: "#0a66c2" } },
  "icon-inst": { fontSize: 28, color: "#fff", "&:hover": { color: "#fbad50" } },
  "icon-logo": {
    "vertical-align": "middle",
    fontSize: 50,
    color: "#fff",
    "&:hover": { color: "#fbad50" },
    marginRight: "1rem",
  },
  tabs: { alignSelf: "flex-end" },
  webname: {
    fontFamily: "Covered By Your Grace",
    fontStyle: "cursive",
    fontSize: "1.8rem",
    cursor: "default",
  },
}));

const items = [
  { hash: "about", label: "About me" },
  { hash: "skills", label: "Skills" },
  { hash: "work", label: "Works" },
];

const NavBar = (props) => {
  const classes = useStyles();
  const active = useScrollSpy({ items });

  const activeIndex = active ? _findIndex(items, ["hash", active]) : false;

  const tabsHTML = items.map(({ hash, label }, index) => (
    <Tab href={`#${hash}`} key={index} label={label} />
  ));

  return (
    <AppBar position="static" className={classes.navbar}>
      <div className={classes["nav-head"]}>
        <div className={classes.logotype}>
          <LogoIcon className={classes["icon-logo"]} />
          <Typography className={classes.webname}>
            WH1TETIGER.GITHUB.IO
          </Typography>
        </div>

        <div className={classes.buttons}>
          <IconButton aria-label="GitHub" href="https://github.com/wh1tetiger">
            <GitHubIcon className={classes["icon-git"]} />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/mshpakov/"
          >
            <LinkedInIcon className={classes["icon-ln"]} />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com/msphotofan/"
          >
            <InstagramIcon className={classes["icon-inst"]} />
          </IconButton>
        </div>
      </div>
      <Tabs value={activeIndex} className={classes.tabs}>
        {tabsHTML}
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
