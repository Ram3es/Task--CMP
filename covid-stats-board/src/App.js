import React, { useEffect } from "react";
import { BoardContainers } from "./Containers";
import { useDispatch } from "react-redux";
import { A_FetchCountryRequest } from "./Containers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(A_FetchCountryRequest());
  }, [dispatch]);

  return <BoardContainers />;
};

export default App;
