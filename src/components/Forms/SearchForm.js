import { UserContext } from "../../context/UserContext";
import { useEffect, useState, useCallback, useContext } from "react";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import TopBgImg from "components/Blocks/TopBgImg";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "../../styles/Map.css";

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

const SearchForm = () => {
  const [user, setUser] = useContext(UserContext);
  //set location to show markers on map
  const [locations, setLocations] = useState([]);
  //const [locations, setLocations] = useState(data);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  //added to check if user has searched dog or not
  const [isSearched, setIsSearched] = useState(false);

  //handle search click event
  const handleSearch = (e) => {
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
            setIsSearched(false);
            setLocations([]);
          }
        } else {
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
    //setLocations(user);
    // }, [locations]);
  }, []);

  //if (loading) return <h1>Loading......</h1>
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
          style={{
            position: "relative",
            borderRadius: "2rem",
            // glass effect
            background: "rgba( 255, 255, 255, 0.7 )",
            boxShadow: "12px 30px 40px 0 rgba(255, 61, 46, 0.5)",
            backdropFilter: "blur( 12px )",
            padding: "0",
            // border: "2px solid blue",
          }}
          sx={{
            // BREAKPOINTS:
            // xs: 0,
            // sm: 576,
            // md: 768,
            // lg: 992,
            // xl: 1200,
            // xxl: 1400,
            // xxxl: 1800,
            width: {
              xs: "95%",
              lg: "90%",
            },
            maxWidth: "2000px",
            height: "auto",
            mt: 20,
            mx: { xs: 2, lg: 3 },
            position: "relative",
            mb: 18,
          }}
        >
          {/* Top Search Bar Area */}
          <Grid container>
            <Grid item xs={12} style={{ padding: "1rem" }}>
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
                  }}
                >
                  Search
                </MKButton>
              </form>
            </Grid>
          </Grid>
          {/* Section below the search area */}
          <Grid
            container
            mx={0}
            style={{
              borderRadius: "0 0 30px 30px",
            }}
            display="flex"
            justifyContent="center"
            overflow="hidden"
          >
            {/* **************** SEARCH RESULTS */}
            <div
              className="container-fluid"
              style={{
                width: "100%",
              }}
            >
              <div
                className="mapbox"
                style={{
                  width: "100%",
                  diplay: "flex",
                  flexDirection: "column",

                  // border: "2px solid green",
                }}
              >
                <div className="row-fluid some" id="map">
                  <LeafletMap
                    locations={locations}
                    style={{ width: "100%", position: "absolute" }}
                    isSearched={isSearched}
                  />
                </div>
                <MKBox
                  className="row-fluid overlay"
                  sx={{
                    width: {
                      md: "50%",
                      lg: "45%",
                      xl: "40%",
                      xxxl: "35%",
                    },
                  }}
                >
                  <MKBox
                    id="results"
                    style={{
                      height: "auto",
                      // backgroundColor: "rgba(255, 41, 41, 0.4)",
                    }}
                  >
                    {isSearched && locations.length > 0 ? (
                      <SearchedDog
                        locations={locations}
                        setLocations={setLocations}
                      />
                    ) : (
                      <MKTypography>No Dogs Found</MKTypography>
                    )}
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
