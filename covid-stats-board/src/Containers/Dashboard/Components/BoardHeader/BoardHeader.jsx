import { Divider } from "@mui/material";
import useStyles from "./styles";
import { SortByCountry, SortByConfirmed } from "../SortByValue";

const BoardHeader = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.numeric}>
          <label>
            <h3>№</h3>
          </label>
        </div>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <div className={classes.label}>
          <h3>Country</h3>
          <SortByCountry />
        </div>
        <div></div>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <div className={classes.label}>
          <h3>Total Confirmed</h3>
          <SortByConfirmed />
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
