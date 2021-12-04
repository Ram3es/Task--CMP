import { countryConst } from "./constants";

import { fetchCoutriesRequest } from "./service";

export const A_FetchCountriesRequest = () => {
  return async (dispatch) => {
    try {
      const { Countries } = await fetchCoutriesRequest();
      console.log(Countries);

      dispatch({ type: countryConst.FETCH_COUNTRIES.SUCCESS, payload: Countries });
    } catch (error) {
      dispatch({ type: countryConst.FETCH_COUNTRIES.FAILURE, payload: error });
    }
  };
};

export const A_FetchCountySuccess = (payload) => ({ type: countryConst.FETCH_COUNTRY.SUCCESS, payload });
