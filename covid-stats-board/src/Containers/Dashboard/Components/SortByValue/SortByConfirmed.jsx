import { useState } from "react";
import { SelectVariantsHOC } from "../SelectVariants";

import useStyles from "./style";

const SortByCountry = ({ sort }) => {
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();

  return (
    <div
      onClick={() => {
        sort("TotalConfirmed");
        setToggle(!toggle);
      }}
      className={classes.container}
    >
      {!toggle ? (
        <img className={classes.arrow} nane="test" src="./assets/icons/arrowUp.png" alt="arrow" />
      ) : (
        <img className={classes.arrow} src="./assets/icons/arrowDown.png" alt="arrow" />
      )}
    </div>
  );
};
export default SelectVariantsHOC(SortByCountry);
