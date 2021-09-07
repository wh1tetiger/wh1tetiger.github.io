import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  skill: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  imgContainer: {
    textAlign: "center",
    display: "block",
  },
  icon: { padding: "2rem 2rem 1rem" },
  skillName: { textAlign: "center" },
}));

const SkillSVG = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <span className={classes.imgContainer}>
        <img
          src={props.icon}
          width="32px"
          height="32px"
          className={classes.icon}
          alt={props.title}
        />
      </span>
      <Typography className={classes.skillName}>{props.title}</Typography>
    </div>
  );
};

export default SkillSVG;
