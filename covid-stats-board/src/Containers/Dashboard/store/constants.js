import { createActionTypes } from "react-redux-jedi"

const CONST_TYPES = ["FETCH_COUNTRIES"]
const TYPES = ["REQUEST","SUCCESS","FAILURE"]

export const countryConst = createActionTypes(CONST_TYPES,TYPES)

