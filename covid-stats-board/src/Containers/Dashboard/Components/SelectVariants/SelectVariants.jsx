import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { A_SortList } from "../../store";
import useStyles from "./style";

const SelectVariants = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const orderBy = toggle ? "desc" : "asc";
    dispatch(A_SortList({ orderBy }));
  });

  const handleLabel = () => {
    setToggle((state) => !state);
  };

  return (
    <div onClick={handleLabel} className={classes.container}>
      {toggle ? (
        <img className={classes.arrow} src="./assets/icons/arrowUp.png" alt="arrow" />
      ) : (
        <img className={classes.arrow} src="./assets/icons/arrowDown.png" alt="arrow" />
      )}
    </div>
  );
};

export default SelectVariants;
