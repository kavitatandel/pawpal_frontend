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
  width: "100vw",
  height: "85vh",
  zIndex: -2,
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
      <div
        className="masterContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* // Map Container */}

        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <>
              <Marker position={center}></Marker>
            </>
          </GoogleMap>
        ) : (
          <>
            <h1>There is a problem</h1>
          </>
        )}
        {/* <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="85vh"
          top={0}
          width="100%" */}
        {/* //   style={{ border: "3px solid red" }}
          //   style={{ border: "3px solid green" }}
        > */}
        {/* Container for body area below featured img */}
        {/* <MKBox
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            minHeight="80vh"
            top={0}
            width="100%" */}
        {/* //   style={{ border: "3px solid red" }}
            //   style={{ border: "3px solid green" }}
          > */}
        {/* <Card
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
                backgroundColor: ({
                  palette: { white },
                  functions: { rgba },
                }) => rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
              }}
            > */}

        {/* Container for overlay over map */}
        <MKBox
          px={1}
          width="80%"
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
        >
          <MKBox pt={4} pb={3} px={3} float="left">
            <MKTypography>Searched Dogs Goes Here</MKTypography>
          </MKBox>
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
            type="text"
            name="searchCity"
            style={{ backgroundColor: "white" }}
          />
        </MKBox>
        {/* Box to show searched Dogs */}

        {/* <MKBox pt={4} pb={3} px={3}>
            <MKTypography>Map goes here</MKTypography>
            {/* <div style={{ width: "100vw", height: "100vh" }}> */}

        {/* </div> */}
        {/* </MKBox>  */}

        {/* </Card> */}

        {/* </MKBox> */}
        {/* </MKBox> */}
      </div>
    </>
  );
};

export default SearchForm;
