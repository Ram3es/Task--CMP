import { Divider } from "@mui/material";
import useStyles from "./styles";
import { SelectVariants } from "../SelectVariants";

const Board = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar}>
        <label className={classes.numeric}>
          <h3>№</h3>
        </label>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <div className={classes.label}>
          <h3>Country</h3>
          <SelectVariants />
        </div>
        <div></div>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <div className={classes.label}>
          <h3>Total Confirmed</h3>
          <SelectVariants />
        </div>
      </div>
    </div>
  );
};

export default Board;
