import { countryConst } from "./constants"

import { fetchCoutriesRequest } from "./service";

export const A_FetchCountryRequest = () =>{
  return async(dispatch)=>{
      try {
          const response = await fetchCoutriesRequest()
          console.log(response);
          dispatch({type:countryConst.FETCH_COUNTRIES.SUCCESS,payload: response})
      } catch (error) {
        dispatch({type:countryConst.FETCH_COUNTRIES.FAILURE,payload: error})
      }
  }
}