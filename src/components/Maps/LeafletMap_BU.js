import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "../../styles/Map.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { userIcon, dogIcon } from "./Markers";
import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import UserInfo from "pages/UserInfoKavita";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";
import MKAvatar from "components/MKAvatar";
import MKBox from "components/MKBox";

// Fixes Leaflet Error loading Icons
const icon = new Icon({
  iconUrl: markerIconPng,
  iconSize: [12, 20],
  iconAnchor: [12, 41],
});

const LeafletMap = ({ locations, isSearched }) => {
  const [user, setUser] = useContext(UserContext);
  // Check if data from user is received
  const [isData, setIsData] = useState(false);
  // Set current location of User
  const [userLocation, setUserLocation] = useState();
  // Sets the mapCenter slightly to the right of the Searched Dogs List
  // const [offset, setOffset] = useState(); //commented by kavita - 7/3/2022
  const [offset, setOffset] = useState([]);

  const [loadingUserLocation, setLoadingUserLocation] = useState(true);

  // StartPosition is just the coordinates for center point of germany
  // const startPosition = [51.0647, 12.0128];

  const sleep = (ms) => {
    new Promise((userLocation) => {
      console.log(`waiting 2sec`);
      setTimeout(userLocation, ms);
    });
  };

  useEffect(() => {
    console.log(user); // getting only latitude and longitude inside user

    const getCoords = async () => {
      // await console.log(user);
      // await sleep(2000);
      // await console.log(user);
      // await setOffset([user.latitude - 0.005, user.longitude - 1]);
      // await sleep(2000);
      // await setIsData(true);

      //added by kavita
      await console.log(user);
      await sleep(2000);
      await console.log(user);
      if (isSearched) {
        setOffset([locations[0].latitude - 0.005, locations[0].longitude - 1]);
      } else {
        setOffset([user.latitude - 0.005, user.longitude - 1]);
      }

      await sleep(2000);
      await setIsData(true);
    };

    getCoords()
      .then(() => console.log(offset))
      .catch((err) => console.log(err));
  }, [isSearched, locations, user]);

  // console.log(user.latitude, user.longitude);
  // console.log(offset);
  // console.log(isData);

  return (
    <>
      {!isData ? (
        ""
      ) : (
        <MapContainer
          // zoomControl={false}
          center={[offset[0], offset[1]]}
          zoom={8}
          style={{
            height: "60vh",
            width: "100%",
            position: "absolute !important",
            boxSizing: "border-box",
            zindex: 0,
            // border: "6px dotted rgba(0,0,0)",
          }}
        >
          <ZoomControl position="topright" />
          {/* added for if user city and search city is different */}

          <Marker position={[user.latitude, user.longitude]} icon={userIcon} />

          {/* <Marker position={[user.latitude, user.longitude]} icon={userIcon} /> */}
          {locations ? (
            locations.map((point, index) => (
              <Marker
                position={[point.latitude, point.longitude]}
                icon={dogIcon}
                key={point.dogs_info._id}
              >
                <Popup style={{ width: "200px" }}>
                  {/* commented to add Avatar */}
                  {/* <img
                    src={point.dogs_info.profile_photo}
                    alt={`${point.dogs_info.name}`}
                    style={{ width: "20px", height: "20px" }}
                  /> */}
                  <MKBox
                    className="Avatar"
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center" },
                      alignItems: "center",
                      mb: "0.5rem", //commented by kavita
                    }}
                  >
                    <MKAvatar
                      zindex={2}
                      src={`${point.dogs_info.profile_photo}`}
                      alt={`${point.dogs_info.name}`}
                      shadow="xl"
                      // sx={{ width: "10rem", height: "10rem" }} //commented by kavita
                      sx={{ width: "4rem", height: "4rem" }}
                      style={{
                        border: "0.3rem solid #ff9a85",
                        background: "linear-gradient(145deg, #FFFFFF, #C1C3C6)",
                        borderRadius: "100%",
                        boxShadow:
                          "14.11px 14.11px 24px #D9DADE, -14.11px -14.11px 24px #FFFFFF",
                      }}
                    >
                      <img
                        src={DogAvatar}
                        alt="avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </MKAvatar>
                  </MKBox>
                  <MKBox
                    className="Avatar"
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center" },
                      alignItems: "center",
                      mb: "0.5rem", //commented by kavita
                    }}
                  >
                    <Link
                      to={`/doginfo/${point.dogs_info._id}`}
                      style={{ color: "#ff3d47" }}
                    >
                      <h3>{point.dogs_info.name}</h3>
                    </Link>
                  </MKBox>
                </Popup>
              </Marker>
            ))
          ) : (
            <h1>Nothing Found</h1>
          )}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )}
    </>
  );
};
export default LeafletMap;
