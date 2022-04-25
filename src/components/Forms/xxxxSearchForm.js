import { UserContext } from "../../context/UserContext";
import { useEffect, useState, useCallback, useContext } from "react";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import Card from "@mui/material/Card";
import TopBgImg from "components/Blocks/TopBgImg";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "../../styles/Map.css";
import { glassStyle } from "../../styles/CustomStyles";

//Leaflet Map
import LeafletMap from "../Maps/LeafletMap";
import "../../styles/Map.css";
// import data from "../../data/germanCities"; //was working
//import GeoCodeTest from "./components/GeoCodeTest.js";

//dog data from db
import data from "../../data/dogFromDB";

//get searchDogByCity
import { searchDogByCity } from "../../logic/SearchFunctions.js";

//get searched dog component
import SearchedDog from "./SearchedDog";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";

const SearchForm = () => {
  const [user, setUser] = useContext(UserContext);
  //set location to show markers on map
  const [locations, setLocations] = useState([]);
  //const [locations, setLocations] = useState(data);
  const [search, setSearch] = useState("");
  const [autoSearch, setAutoSearch] = useState();
  // const [loading, setLoading] = useState(false); //commented on 07/03/2022
  const [loading, setLoading] = useState(true);

  //added to check if user has searched dog or not
  const [isSearched, setIsSearched] = useState(false);

  let [color, setColor] = useState("#ff3d47");

  //use state for search and no data
  const [noData, setNoData] = useState(false);

  const sleep = (ms) => {
    new Promise((userLocation) => {
      console.log(`waiting 2sec`);
      setTimeout(userLocation, ms);
    });
  };

  // Handle search for user's default city
  const handleDefaultCity = () => {
    searchDogByCity(user.city)
      .then((res) => {
        console.log(res);
        if (res) {
          setLocations(res);

          //added on 07/03/2022
          setLoading(false);
        } else {
          console.log(`Problem.`);
        }
      })
      .then(() => {
        console.log(locations);
        setIsSearched(true);

        //added for loading on page load
      })
      .catch((err) => {
        setIsSearched(false);
        console.log(err);
      });
  };

  // find dogs according to user city
  const runFunctions = async () => {
    if (user) {
      await handleDefaultCity();
      await sleep(2000);
      await console.log(locations);
    } else console.log(`no user?`);
  };

  // check location of user
  useEffect(() => {
    console.log(user);
    runFunctions();
  }, [user]);

  const handleClearSearch = async (e) => {
    e.preventDefault();
    //find the search input
    const searchCityInput = document.getElementsByName("searchCity")[0];
    searchCityInput.innerHTML = "";
    searchCityInput.value = "";
    setSearch("");
    await runFunctions();
  };

  //handle search click event
  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    searchDogByCity(search)
      .then((res) => {
        console.log("Inside search dog by city");
        console.log(res);
        if (res) {
          if (res.length !== 0) {
            setLoading(false);
            setLocations(res);
            // console.log(locations.length);
            //set isSearched true
            setIsSearched(true);
          } else {
            //commented on 7/3/2022
            setIsSearched(false);
            setLocations([]);
            setLoading(false);

            // setIsSearched(true);
            // setLocations([]);
            // setLoading(false);

            setNoData(true);
          }
        } else {
          setLoading(false);
          alert("Please enter city to search");
        }
      })
      .catch((err) => {
        setIsSearched(false);
        console.log(err);
      });
  };

  //let dogData = [];
  useEffect(() => {
    console.log(user); // getting only latitude and longitude inside user
    // setUserLocation([user.latitude, user.longitude]);
  }, []);

  if (loading)
    return (
      <RiseLoader color={color} loading={loading} css={override} size={40} />
    );
  return (
    <>
      {/* Entire Page Container (without footer) */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        minHeight="100%"
        mx="auto"
        mr={0}
        ml={0}
        position="relative"
        zindex={-1}
        // sx={{ padding: "0", border: "2px solid blue" }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Paper
          className="neuCard"
          elevation={24}
          sx={{
            // BREAKPOINTS:
            // xs: 0,
            // sm: 576,
            // md: 768,
            // lg: 992,
            // xl: 1200,
            // xxl: 1400,
            // xxxl: 1800,
            zIndex: 3,
            position: "relative",

            // glass effect
            background: "rgba( 255, 255, 255, 0.7 )",
            boxShadow: "12px 30px 40px 0 rgba(255, 61, 46, 0.5)",
            backdropFilter: "blur( 12px )",
            padding: "0",
            borderRadius: "2rem !important",
            overflow: "hidden !important",
            width: {
              xs: "90%",
              lg: "85%",
            },
            maxWidth: "2000px",
            height: "auto",
            maxHeight: "100vh",
            mt: 20,
            mx: { xs: 2, lg: 3 },

            mb: 10,
          }}
        >
          {/* Top Search Bar Area */}
          <Grid container>
            <Grid item xs={12} style={{ padding: "1rem" }}>
              <form onSubmit={handleSearch}>
                <MKBox
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "0rem",
                    pb: "0rem",
                  }}
                >
                  <MKInput
                    style={{ width: "17rem" }}
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
                    }}
                  >
                    Search
                  </MKButton>
                  <MKButton
                    size="large"
                    variant="gradient"
                    color="info"
                    style={{
                      marginLeft: "1.5rem",
                      width: "11rem",
                      minWidth: "120px",
                    }}
                    onClick={handleClearSearch}
                  >
                    Clear Search
                  </MKButton>
                </MKBox>
              </form>
            </Grid>
          </Grid>
          {/* Section below the search area */}
          {/* <Grid
            container
            mx={0}
            display="flex"
            justifyContent="center"
            height="80%"
            minHeight="400px"
            border="7px dashed purple !important"
          > */}
          {/* Section below the search area */}
          <Grid
            container
            mx={0}
            display="flex"
            justifyContent="center"
            height="auto"
          // border="7px dashed purple !important"
          >
            {/* **************** SEARCH RESULTS */}
            <div
              className="container-fluid"
              style={{
                width: "100%",
                borderRadius: "0 0 30px 30px",
              }}
            >
              <div
                className="mapbox"
                overflow="auto"
                style={{
                  width: "100%",
                  diplay: "flex",
                  flexDirection: "column",

                  // border: "2px solid green",
                }}
              >
                <div
                  className="row-fluid some"
                  id="map"
                  style={{
                    border: "2px solid orange",
                    borderRadius: "0 0 30px 30px",
                  }}
                >
                  <LeafletMap locations={locations} isSearched={isSearched} />
                </div>
                <MKBox
                  className="row-fluid overlay"
                  sx={{
                    // flexWrap: "wrap",
                    width: {
                      sm: "35%",
                      md: "50%",
                      lg: "50%",
                      xl: "45%",
                      xxl: "40%",
                      xxxl: "35%",
                    },
                  }}
                >
                  {/* This is important to block the hand cursor from the map over this section */}
                  <MKBox
                    id="results"
                    style={{
                      height: "auto",
                      margin: "1rem",
                      // overflow: "scroll",
                      // backgroundColor: "rgba(255, 41, 41, 0.4)",
                    }}
                  >
                    {/* commented to check loading when page loads */}
                    <SearchedDog
                      locations={locations}
                      setLocations={setLocations}
                      isSearched={isSearched}
                    />
                    {/* {locations.length < 1 && isSearched === false ? "" :
                      locations.length < 1 && noData === true ? "No Dogs Found" :
                      <SearchedDog
                        locations={locations}
                        setLocations={setLocations}
                        isSearched={isSearched}
                        noData={noData}
                      />
                    } */}

                    {/* {isSearched && locations.length > 0 ? (
                    
                      <SearchedDog
                        locations={locations}
                        setLocations={setLocations}
                      />
                    ) : (
                      <MKBox>
                        <Card style={glassStyle}>
                          <MKBox
                            className="mainContainer"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignContent: "center",
                              padding: "0rem",
                            }}
                          >
                            <MKBox
                              className="DogName"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "25%",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                fontWeight="medium"
                                style={{ fontSize: "0.90rem" }}
                              >
                                No dogs found
                              </MKTypography>
                            </MKBox>
                          </MKBox>
                        </Card>
                      </MKBox>
                    )} */}
                  </MKBox>
                </MKBox>
              </div>
            </div>
          </Grid>
        </Paper>
      </MKBox>
    </>
  );
};

export default SearchForm;
