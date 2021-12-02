import { useMemo } from "react";
import { CountryItem } from "../CountryItem";
import { useSelector } from "react-redux";
import { getAllCountries } from "../../store"


const Countries = () =>{
    const countryList = useSelector(getAllCountries())

    const renderCountry = useMemo(()=> {
        return countryList?.map( (item, idx) => <CountryItem key={item.Slug} {...item} idx={idx} />)
    },[countryList])

 return <div>{renderCountry}</div>
}
export default Countries