import { useDispatch } from "react-redux";
import { A_FetchCountySuccess } from "../../store";
import useStyles from "./styles";
import { Divider } from "@mui/material";

const CountryItem = ({ Country, idx, TotalConfirmed, TotalDeaths, TotalRecovered, openModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleInput = () => {
    openModal(true);

    dispatch(A_FetchCountySuccess({ Country, TotalConfirmed, TotalDeaths, TotalRecovered }));
  };

  return (
    <div>
      <div className={classes.toolbar} onClick={handleInput}>
        <label className={classes.numeric}>{idx + 1}</label>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <label className={classes.label}>{Country}</label>
        <Divider classes={{ root: classes.divider }} orientation="vertical" variant="fullWidth" flexItem />
        <label className={classes.label}>{TotalConfirmed}</label>
      </div>
    </div>
  );
};

export default CountryItem;
