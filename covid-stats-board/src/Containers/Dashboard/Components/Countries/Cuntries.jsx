import { useMemo } from "react";
import { CountryItem } from "../CountryItem";
import { useSelector } from "react-redux";
import { getAllCountries, getFindedCountry } from "../../store";
import useStyles from "./styles";

const Countries = (props) => {
  const countryList = useSelector(getFindedCountry());
  const classes = useStyles();

  const renderCountry = useMemo(() => {
    return countryList?.map((item, idx) => <CountryItem key={item.ID} {...item} idx={idx} {...props} />);
  }, [countryList]);

  return <div className={classes.item}>{renderCountry}</div>;
};
export default Countries;
