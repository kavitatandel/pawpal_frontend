import axios from "axios";

export const searchDogByCity = (city) => {
  return axios
    .get(`https://pawpal-backend.herokuapp.com/searchdog/${city}`)
    .then((res) => {
      //console.log("Got Data")
      //console.log(res.data);
      //const dogData = res.data;
      // console.log("after putting into variable")
      // console.log(dogData)
      // return res.data;
      return res.data;
    })
    .catch((err) => console.log(err));
};
