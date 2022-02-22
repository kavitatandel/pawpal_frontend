import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
// NEW GOOGLE MAP API
//import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// NEW GOOGLE MAP API
// const mapContainerStyle = {
//     width: "100%",
//     height: "100%",
//     zIndex: 0,
//     border: "5px solid red",
// };
// const center = {
//     lat: 51.0647,
//     lng: 12.0128,
// };

//Leaflet Map
import LeafletMap from "../Maps/LeafletMap";
import "../../styles/Map.css";
// import data from "../../data/germanCities"; //was working
//import GeoCodeTest from "./components/GeoCodeTest.js";

//dog data from db
import data from "../../data/dogFromDB";

//get searchDogByCity
import { searchDogByCity } from '../../logic/SearchFunctions.js'

//get searched dog component
import SearchedDog from './SearchedDog'

const SearchForm = () => {

    //set location to show markers on map
    //const [locations, setLocations] = useState([]);
    const [locations, setLocations] = useState(data);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    // const { isLoaded } = useJsApiLoader({
    //     id: "google-map-script",
    //     googleMapsApiKey: "AIzaSyAQpCCsxnsWyctLl_hcwnW0mv1g9TrgVS8",
    // });
    // const [map, setMap] = useState(null);

    // const onLoad = useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map);
    // }, []);

    // const onUnmount = useCallback(function callback(map) {
    //     setMap(null);
    // }, []);

    //handle search click event
    const handleSearch = (e) => {
        e.preventDefault();
        //getSearchResult(search);
        console.log('search click event occured');
        //getSearchResult('weilimdorf')
        console.log(`search text ${search}`);
        searchDogByCity(search).then((res) => {
            // searchDogByCity('weilimdorf').then((res) => {
            if (res) {
                // console.log('calling search dog after');
                // console.log(res);
                if (dogData !== undefined) {
                    setLoading(false);
                    //setLocations(dogData);
                    setLocations(res);
                    console.log(locations)
                }
            }
            else {
                alert('No search result found')
            }
        });
    }


    let dogData = [];
    useEffect(() => {
        // getSearchResult('weilimdorf')
        //     .then((res) => {
        //         console.log("inside response search form")
        //         if (res) {
        //             console.log('calling search dog after');
        //             setLocations(dogData);
        //             console.log(dogData);
        //             if (dogData !== undefined) {
        //                 setLoading(false);
        //             }
        //         }
        //     });
    }, [])


    //if (loading) return <h1>Loading......</h1>
    return (
        <>
            {/* Container between top & Footer */}
            <div>
                {/* Container for top background Image */}
                <MKBox
                    minHeight="20vh"
                    width="100%"
                    //   style={{ border: "3px solid green" }}
                    sx={{
                        backgroundImage: ({
                            functions: { linearGradient, rgba },
                            palette: { gradients },
                        }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.2),
                                rgba(gradients.dark.state, 0.2)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                />

                {/* Container for body area below featured img */}
                <div

                    style={{
                        border: "3px solid green",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        minHeight: "85vh",
                        top: "0",
                        width: "100%"
                    }}
                >
                    <div>
                        {/* search input container */}
                        <form onSubmit={handleSearch}>
                            <MKInput
                                label="Search by City"
                                type="text"
                                name="searchCity"
                                placeholder={search}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <MKButton
                                size="large"
                                type="submit"
                                variant="gradient"
                                color="info"
                                style={{
                                    marginLeft: "1.5rem",
                                    width: "8rem",
                                    minWidth: "120px",
                                }} >
                                Search
                            </MKButton>
                        </form>
                    </div>
                    {/* <Container display="flex" flexDirection="row" style={{ minWidth: "90%", minHeight: "90%", border: "3px solid yellow" }}> */}
                    <div style={{ minWidth: "90%", minHeight: "90%", border: "3px solid yellow", display: "flex", flexDirection: "row" }}>

                        {/* Box to show searched Dogs */}
                        <MKBox
                            px={0}
                            width="25%"
                            top={10}
                            height="auto"
                            mx="auto"
                            mr={0}
                            ml={0}
                            position="relative"
                            zIndex={-1}
                            sx={{ padding: "0" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            style={{
                                border: "3px solid blue",
                                backgroundColor: "rgba(39, 46, 245, 0.2)",
                            }}
                            float="left"
                            minheight="80vh">
                            <SearchedDog locations={locations} setLocations={setLocations} />
                            {/* <MKTypography>Searched Dogs Goes Here</MKTypography> */}
                        </MKBox>
                        <MKBox pt={0} pb={0} px={0}
                            px={0}
                            width="75%"
                            top={10}
                            mx="auto"
                            mr={0}
                            ml={0}
                            position="relative"
                            zIndex={-1}
                            sx={{ padding: "0" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            style={{
                                border: "3px solid red",
                                backgroundColor: "rgba(39, 46, 245, 0.2)",
                            }}
                            float="right"
                            minheight="80vh">

                            {/* added code to display may using leaflet */}
                            {
                                // (loading)
                                //     ? <h1>Loading Map.....</h1>
                                //     :
                                <LeafletMap locations={locations} setLocations={setLocations} style={{ width: "100%" }} />
                            }
                        </MKBox>
                    </div>
                    {/* </Card> */}

                </div>

            </div>
        </>
    );
};

export default SearchForm;
