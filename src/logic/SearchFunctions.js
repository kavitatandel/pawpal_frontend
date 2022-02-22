import axios from 'axios';

export const searchDogByCity = (city) => {
    return axios.get(`http://localhost:5000/searchdog/${city}`)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}