/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";

import { boardReducer } from "../../Containers";

export default (history) => {
  const rootReducer = combineReducers({
    boardReducer,
  });

  return (state, action) => {
    return rootReducer(state, action);
  };
};
