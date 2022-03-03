import axios from 'axios';

export const fetchCoordinates = async (address) => {
    const geoCodeURL = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${address}&format=json&limit=1`;
    return await axios
        .get(geoCodeURL)
        .then((response) => {
            console.log(response.data.lat);
            //setGeo(response.data[0]);
            console.log('Geo code response')
            console.log(response.data[0]);
            console.log(`latitude : ${response.data[0].lat}`);
            console.log(`longitude : ${response.data[0].lon}`);
            return response.data[0];
        })
        .catch((err) => console.log(err));
};