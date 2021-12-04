import { countryConst } from "./constants";

const initialstate = {
  countries: [],
  country: {
    Country: "",
    TotalConfirmed: "",
    TotalDeath: "",
    TotalRecovered: "",
  },
  advancedSearch:{
   searchStr:"",
   orderBy:""
  },
  loading: false,
  error: null,
};

export const boardReducer = (state = initialstate, action) => {
  switch (action.type) {
    case countryConst.FETCH_COUNTRIES.REQUEST:
      return { ...state, loading: true };
    case countryConst.FIND_COUNTRY.SUCCESS:
      return{...state, advancedSearch:{...state.advancedSearch, ...action.payload} }
    case countryConst.FETCH_COUNTRIES.SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case countryConst.FETCH_COUNTRY.SUCCESS:
      return { ...state, country: action.payload };
    case countryConst.FETCH_COUNTRIES.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
