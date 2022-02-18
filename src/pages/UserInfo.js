import { MapContainer, TileLayer } from 'react-leaflet'
import Geocode from 'react-geocode';

const UserInfo = () => {

    //using google map API KEY
    Geocode.setApiKey(''); //pass here google api_key
    Geocode.fromAddress('Eiffel Tower').then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        error => {
            console.error(error);
        },
    );

    return (
        <>
            <h1>Welcome to User Info</h1>
            <h2>Eiffle Tower</h2>
            {/* <h3>lat: {lat} , lng:{lng}</h3> */}
        </>
    )
}

export default UserInfo;