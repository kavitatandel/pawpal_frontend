import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import * as dogLocData from "../../data/GermanyData.json";

const Map = () => {
  return (
    // NEW REACT MAPS
    <GoogleMap
      onLoad={(Map) => {
        const bounds = new window.google.maps.LatLngBounds();
        Map.fitBounds(bounds);
      }}
      onUnmount={(Map) => {
        // do your stuff before map is unmounted
      }}
    />

    // OLD REACT MAPS
    // <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.4211, lng: -75.6903 }}>
    //   {/* We will render our data here */}
    //   {dogLocData.map((dogLoc, index) => (
    //     <Marker
    //       key={index}
    //       position={{
    //         lat: dogLoc.latitude,
    //         lng: dogLoc.longitude,
    //       }}
    //       icon={{
    //         url: `https://picsum.photos/id/237/200/300`,
    //         scaledSize: new window.google.maps.Size(25, 25),
    //       }}
    //     />
    //   ))}
    // </GoogleMap>
  );
};

export default Map;
