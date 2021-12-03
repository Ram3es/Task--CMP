import { useMemo } from "react";
import { CountryItem } from "../CountryItem";
import { useSelector } from "react-redux";
import { getAllCountries } from "../../store"
import useStyles from "./styles"

const Countries = (props) =>{
    const countryList = useSelector(getAllCountries())
    const classes = useStyles()

    const renderCountry = useMemo(()=> {
        return countryList?.map( (item, idx) => <CountryItem key={item.Slug} {...item } idx={idx} {...props}/>)
    },[countryList, props])

 return <div className={classes.item}>{renderCountry}</div>
}
export default Countries