import { countryConst } from "./constants";

import { fetchCoutriesRequest, fetchStatusByCountries } from "./service";

export const A_FetchCountryRequest = () => {
  return async (dispatch) => {
    try {
      const response = await fetchCoutriesRequest();
      const cutResponse = response.filter((_, idx) => idx < 100);
      dispatch({ type: countryConst.FETCH_COUNTRIES.SUCCESS, payload: cutResponse });
    } catch (error) {
      dispatch({ type: countryConst.FETCH_COUNTRIES.FAILURE, payload: error });
    }
  };
};
