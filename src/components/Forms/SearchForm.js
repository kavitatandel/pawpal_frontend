import { UserContext } from "../../context/UserContext";
import { useEffect, useState, useCallback, useContext } from "react";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

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
    searchDogByCity(search).then((res) => {
      console.log("Inside searcg dog by city")
      console.log(res);
      if (res) {
        if (res.length !== 0) {
          setLoading(false);
          setLocations(res);
          console.log(locations.length);
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
      .catch(err => {
        setIsSearched(false);
        console.log(err)
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
            zindex: "-2",
            border: "3px solid green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            minHeight: "85vh",
            top: "0",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              alignItems: "right",
              marginTop: "10px",
            }}
          >
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
                }}
              >
                Search
              </MKButton>
            </form>
          </div>
          {/* <Container display="flex" flexDirection="row" style={{ minWidth: "90%", minHeight: "90%", border: "3px solid yellow" }}> */}
          <div
            style={{
              minWidth: "90%",
              minHeight: "90%",
              // border: "3px solid yellow",
              display: "flex",
              flexDirection: "row",
              zindex: "0",
            }}
          >
            {/* Box to show searched Dogs */}
            <MKBox
              px={0}
              width="45%"
              top={10}
              height="auto"
              mx="auto"
              mr={0}
              ml={0}
              position="relative"
              zindex={1}
              sx={{ padding: "0" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              style={{
                // border: "3px solid blue",
                backgroundColor: "rgba(39, 46, 245, 0.2)",
              }}
              float="left"
              minheight="80vh"
            >
              {(isSearched && locations.length > 0) ?

                <SearchedDog locations={locations} setLocations={setLocations} />
                : <MKTypography>No Dogs Found</MKTypography>
              }
            </MKBox>
            <MKBox
              pt={0}
              pb={0}
              px={0}
              px={0}
              width="55%"
              top={10}
              mx="auto"
              mr={0}
              ml={0}
              position="relative"
              zindex={1}
              sx={{ padding: "0" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              style={{
                // border: "3px solid red",
                backgroundColor: "rgba(39, 46, 245, 0.2)",
              }}
              float="right"
              minheight="80vh"
            >
              <LeafletMap
                locations={locations}
                style={{ width: "100%" }}
                isSearched={isSearched}
              />
            </MKBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
