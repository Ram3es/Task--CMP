import { createActionTypes } from "react-redux-jedi";

const CONST_TYPES = ["FETCH_COUNTRIES", "FETCH_COUNTRY", "FIND_COUNTRY", "SORT_LIST"];
const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];

export const countryConst = createActionTypes(CONST_TYPES, TYPES);
