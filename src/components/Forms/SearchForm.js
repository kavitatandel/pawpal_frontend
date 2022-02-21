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
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// NEW GOOGLE MAP API

const mapContainerStyle = {
    width: "100%",
    height: "100%",
    zIndex: 0,
    border: "5px solid red",
};
const center = {
    lat: 51.0647,
    lng: 12.0128,
};

const SearchForm = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAQpCCsxnsWyctLl_hcwnW0mv1g9TrgVS8",
    });
    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <>

            {/* // Map Container */}
            {/* {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={7}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <>
                            <Marker position={center}></Marker>
                        </>
                    </GoogleMap>
                ) : (
                    <>
                        <h1>There is a problem</h1>
                    </>
                )} */}
            {/* Container between top & Footer */}
            <MKBox
                px={1}
                width="100%"
                top={0}
                height="85vh"
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
            >
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
                <MKBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    minHeight="85vh"
                    top={0}
                    width="100%"
                    style={{ border: "3px solid green" }}
                //   style={{ border: "3px solid green" }}
                >
                    <Card
                        // zIndex={0}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ position: "relative" }}
                        sx={{
                            width: "90%",
                            minHeight: "85vh",
                            p: 2,
                            mt: -2,
                            mx: { xs: 2, lg: 3 },
                            position: "relative",
                            mb: 4,
                            backgroundColor: ({
                                palette: { white },
                                functions: { rgba },
                            }) => rgba(white.main, 0.8),
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                        }}
                    >
                        {/* search input container */}
                        <MKBox style={{ width: "100%", height: "10%", border: "3px solid green" }} display="flex" alignItems="center" justifyContent="flex-end">
                            <MKInput

                                label="Search by City"
                                type="text"
                                name="searchCity"
                                style={{ backgroundColor: "white" }}
                            />
                        </MKBox>
                        <Container style={{ minWidth: "100%", height: "90%", border: "3px solid violet" }}>
                            {/* Box to show searched Dogs */}
                            <MKBox
                                px={1}
                                width="20%"
                                top={100}
                                height="auto"
                                mx="auto"
                                mr={0}
                                ml={0}
                                position="fixed"
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
                                pt={4} pb={3} float="left">
                                <MKTypography>Searched Dogs Goes Here</MKTypography>
                            </MKBox>
                            <MKBox pt={4} pb={3} px={3} height="100%">
                                <MKTypography>Map goes here</MKTypography>
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={center}
                                        zoom={7}
                                        onLoad={onLoad}
                                        onUnmount={onUnmount}
                                    >
                                        <>
                                            <Marker position={center}></Marker>
                                        </>
                                    </GoogleMap>
                                ) : (
                                    <>
                                        <h1>There is a problem</h1>
                                    </>
                                )}

                            </MKBox>
                        </Container>
                    </Card>

                </MKBox>

            </MKBox >
        </>
    );
};

export default SearchForm;
