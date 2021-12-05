import axios from "axios";

export const fetchCoutriesRequest = (_) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
