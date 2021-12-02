import { createSelector } from "reselect";

const selectCountries = ( state ) => state.boardReducer

export const getAllCountries = () => createSelector(selectCountries, (state)=>state.countries)