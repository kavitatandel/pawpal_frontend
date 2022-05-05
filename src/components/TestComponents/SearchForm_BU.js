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
import "../../styles/searchbarStyle.css";
import { glassStyle } from "../../styles/CustomStyles";
import ClearIcon from "@mui/icons-material/Clear";

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

  const clearSearch = {
    transform: "scale(6)",
    marginLeft: "50px",
  };
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
    setSearch(user.city);
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
            zindex: 3,
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
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              style={{
                zindex: 4,
                padding: "0.6rem",
                background:
                  "linear-gradient(146deg, #ff9a85 21%, rgba(255, 61, 71, 0.8) 75%)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
              height="6.5rem"
            >
              <form
                onSubmit={handleSearch}
                autocomplete="off"
                style={{
                  // marginTop: "-100px",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  style={{
                    padding: "1rem",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={10}
                    style={{
                      display: "flex",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <div id="cover">
                      <div className="tb">
                        <div className="td">
                          <input
                            id="styleinpt"
                            type="text"
                            name="searchCity"
                            // placeholder={search}
                            placeholder="Enter city to search...."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required
                          />
                        </div>
                        <div className="td" id="s-cover">
                          <button id="submit-btn" onClick={handleClearSearch}>
                            <ClearIcon style={clearSearch} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div id="searchMoved">
                      <div className="td" id="s-cover">
                        <button id="submit-btn" type="submit">
                          <div id="s-circle"></div>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>

          <Grid
            container
            mx={0}
            display="flex"
            justifyContent="center"
            height="auto"
            // border="7px dashed purple !important"
          >
            {/* **************** SEARCH RESULTS */}
            {/* _______________________________________PARENT CONTAINER */}
            <div
              className="container-fluid"
              style={{
                width: "100%",
                borderRadius: "0 0 30px 30px",
                // border: "7px solid yellow",
                backgroundColor: "rgb(255,255,0.5)",
              }}
            >
              {/* _______________________________________BACKGROUND CONTAINER OF PARENT */}
              <div
                className="mapbox"
                overflow="auto"
                style={{
                  width: "100%",
                  diplay: "flex",
                  flexDirection: "column",
                  // border: "7px solid rgb(0,255,0)",
                  // backgroundColor: "rgb(0,255,0,0.5)",
                }}
              >
                <LeafletMap
                  locations={locations}
                  isSearched={isSearched}
                  style={
                    {
                      // border: "7px solid rgba(0,255,255)",
                      // backgroundColor: "rgb(0,255,255,0.5)",
                    }
                  }
                />
                {/* </div> */}
                <MKBox
                  className="row-fluid overlay"
                  id="scrollStyle"
                  style={{
                    height: "100%",
                    overflow: "scroll",
                    margin: "0",
                    padding: "1rem 0",

                    // border: "7px solid rgba(255,0,255)",
                    // backgroundColor: "rgb(255,0,255,0.5)",
                  }}
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
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      // margin: "1rem",
                      // border: "7px solid rgba(75,0,130)",
                      // backgroundColor: "rgb(75,0,130,0.5)",
                    }}
                  >
                    <SearchedDog
                      locations={locations}
                      setLocations={setLocations}
                      isSearched={isSearched}
                      // style={{
                      //   border: "7px solid rgba(255,0,0)",
                      //   backgroundColor: "rgb(255,0,0,0.5)",
                      // }}
                    />
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
