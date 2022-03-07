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
  const [offset, setOffset] = useState();

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
      await console.log(user);
      await sleep(2000);
      await console.log(user);
      await setOffset([user.latitude - 0.005, user.longitude - 1]);
      await sleep(2000);
      await setIsData(true);
    };

    getCoords()
      .then(() => console.log(offset))
      .catch((err) => console.log(err));
  }, []);

  // console.log(user.latitude, user.longitude);
  // console.log(offset);
  // console.log(isData);

  return (
    <>
      {!isData ? (
        <h1>Loading User Location....</h1>
      ) : (
        <MapContainer
          // zoomControl={false}
          center={[offset[0], offset[1]]}
          zoom={8}
          style={{
            width: "100%",

            minHeight: "80vh",
            position: "absolute !important",
          }}
        >
          <ZoomControl position="topright" />
          <Marker position={[user.latitude, user.longitude]} icon={userIcon} />
          {locations ? (
            locations.map((point, index) => (
              <Marker
                position={[point.latitude, point.longitude]}
                icon={dogIcon}
                key={point.dogs_info._id}
              >
                <Popup style={{ width: "200px" }}>
                  <img
                    src={point.dogs_info.profile_photo}
                    alt={`${point.dogs_info.name}`}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Link to={`/doginfo/${point.dogs_info._id}`}>
                    <h3>{point.dogs_info.name}</h3>
                  </Link>
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
