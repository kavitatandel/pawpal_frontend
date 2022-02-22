import axios from 'axios';
import react, { useEffect } from 'react';

const SearchLocation = () => {
    console.log("inside getdata")
    const getData = () => {
        console.log("inside getdata")
        axios.get(`"https://nominatim.openstreetmap.org/search?q=New York City&limit=2&format=json"`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    useEffect(() => {
        getData();
    })

    return (
        <>
            Hello
        </>
    )

}

export default SearchLocation;