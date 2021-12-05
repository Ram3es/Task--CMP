import React, { useEffect } from "react";
import { BoardContainers } from "./Containers";
import { useDispatch } from "react-redux";
import { A_FetchCountriesRequest } from "./Containers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(A_FetchCountriesRequest());
  }, [dispatch]);

  return <BoardContainers />;
};

export default App;
