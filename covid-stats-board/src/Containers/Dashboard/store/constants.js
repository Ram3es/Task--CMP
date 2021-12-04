import { createActionTypes } from "react-redux-jedi";

const CONST_TYPES = ["FETCH_COUNTRIES", "FETCH_COUNTRY"];
const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];

export const countryConst = createActionTypes(CONST_TYPES, TYPES);
