import axios from "axios";
import { useEffect, useState } from "react";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

//for map
import Map from "components/Maps/Map";
import {
    // existing imports
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

<Map />;

const MapWrapped = withScriptjs(withGoogleMap(Map));

const SearchForm = () => {
    return (
        <>
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
                    minHeight="80vh"
                    top={0}
                    width="100%"
                //   style={{ border: "3px solid red" }}
                //   style={{ border: "3px solid green" }}
                >
                    {/* Container for body area below featured img */}
                    <MKBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        minHeight="80vh"
                        top={0}
                        width="100%"
                    //   style={{ border: "3px solid red" }}
                    //   style={{ border: "3px solid green" }}
                    >
                        <Card
                            // zIndex={0}
                            style={{ position: "relative" }}
                            sx={{
                                width: "90%",
                                height: "80%",
                                p: 2,
                                mt: -2,
                                mx: { xs: 2, lg: 3 },
                                position: "relative",
                                mb: 4,
                                backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                                    rgba(white.main, 0.8),
                                backdropFilter: "saturate(200%) blur(30px)",
                                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            }}
                        >
                            <Container>
                                <MKBox pt={4} pb={3} px={3} float="left" >
                                    <MKTypography
                                        variant="h3"
                                        fontWeight="large"
                                        color="dark"
                                        textAlign="center"
                                    >
                                        {/* {`${user.first_name} ${user.last_name}`} */}
                                        User Name
                                    </MKTypography>
                                    <MKInput
                                        label="Search by City"
                                        fullWidth
                                        type="text"
                                        name="searchCity"

                                    />
                                </MKBox>
                                {/* Box to show searched Dogs */}
                                <MKBox pt={4} pb={3} px={3} float="left" >
                                    <MKTypography>
                                        Searched Dogs Goes Here
                                    </MKTypography>
                                </MKBox>
                                {/* Box to display map */}
                                <MKBox pt={4} pb={3} px={3} >
                                    <MKTypography>
                                        Map goes here

                                    </MKTypography>

                                    <div style={{ width: "100vw", height: "100vh" }}>
                                        <MapWrapped
                                            //googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAQpCCsxnsWyctLl_hcwnW0mv1g9TrgVS8`}
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `100%` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </div>

                                </MKBox>
                            </Container>
                        </Card>
                    </MKBox>
                </MKBox>
            </MKBox>
        </>
    )
}

export default SearchForm;
