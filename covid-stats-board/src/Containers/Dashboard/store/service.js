import axios from "axios";

export const fetchCoutriesRequest = (_) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const fetchStatusByCountries = (payload) => {
  const arrCounries = payload.map((item) => item.Country.toLowerCase());

  let arrPromises = [];
  // for(let key of arrCounries ){
  //     arrPromises.push( new Promise((resolve, reject)=>{
  //         axios.get(`https://api.covid19api.com/live/country/${key}/status/confirmed/date/2021-12-01T13:13:30Z`)
  //         .then(res => resolve(res.data))
  //         .catch(error => reject(error))
  //     }))

  // }

  console.log(arrPromises);
};
