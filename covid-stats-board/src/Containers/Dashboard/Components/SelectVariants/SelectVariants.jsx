import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { A_SortList } from "../../store";

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrapedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
      const orderBy = toggle ? "desc" : "asc";
      dispatch(A_SortList({ orderBy, sortBy }));
    }, [toggle, sortBy, dispatch]);

    function handleLabel(name) {
      setSortBy(name);
      setToggle((state) => !state);
    }

    return <WrapedComponent {...props} sort={handleLabel} toggle={toggle} />;
  };
};
