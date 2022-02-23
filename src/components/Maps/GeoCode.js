import { setSelectionRange } from "@testing-library/user-event/dist/utils";

import axios from "axios";
import { useState, useEffect } from "react";

const GeoCode = ({ address }) => {
  const testAddress = "Wätjenstraße, Bremen, 28213, Germany";

  const [geo, setGeo] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const geoCodeURL = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${address}&format=json&limit=1`;

  const fetchCoordinates = async () => {
    await axios
      .get(geoCodeURL)
      .then((response) => {
        // console.log(response.data.lat);
        setGeo(response.data[0]);
        console.log("Geo code response");
        console.log(response.data[0]);
        console.log(`latitude : ${response.data[0].lat}`);
        console.log(`longitude : ${response.data[0].lon}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  return (
    <div>
      <h1>GeoCodeTest</h1>
      {/* <p>{geo.lat}</p> */}
    </div>
  );
};

export default GeoCode;
