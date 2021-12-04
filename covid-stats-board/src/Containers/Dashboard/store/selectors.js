import { createSelector } from "reselect";
import { capitalizeFirstLetter } from "../../../utils";
import { orderBy } from "lodash";

const selectCountries = (state) => state.boardReducer;
const selectSerch = (state) => state.boardReducer.advancedSearch;
const selectCountriesContry = (state) => state.boardReducer.countries;

export const getAllCountries = () => createSelector(selectCountries, (state) => state.countries);
export const getCountryVavue = () => createSelector(selectCountries, (state) => state.country);

export const getFindedCountry = () =>
  createSelector([selectCountriesContry, selectSerch], (contry, state) => {
    const list = contry.filter(({ Country }) => Country.startsWith(capitalizeFirstLetter(state.searchStr)));

    return orderBy(list, ["Country"], [state.orderBy]);
  });
