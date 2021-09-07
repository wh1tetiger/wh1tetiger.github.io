import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  skill: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  skillName: { "text-align": "center" },
}));

const Skill = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <Icon
        className={props.className}
        style={{
          padding: "2rem 2rem 1rem",
          fontSize: props.fontSize,
          color: props.color,
          textAlign: "center",
        }}
      />
      <Typography className={classes.skillName}>{props.title}</Typography>
    </div>
  );
};

export default Skill;
