import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: require("../../assets/markers/blueMarker.png"),
  iconRetinaUrl: require("../../assets/markers/blueMarker.png"),
  backgroundColor: "transparent",
  iconAnchor: [24, 24],
  popupAnchor: [24, 24],
  // shadowUrl: [24, 24],
  // shadowSize: null,
  shadowAnchor: [24, 24],
  iconSize: new L.Point(60, 60),
  className: "icon",
});

export { userIcon };

const dogIcon = new L.Icon({
  iconUrl: require("../../assets/markers/pinkMarker.png"),
  iconRetinaUrl: require("../../assets/markers/pinkMarker.png"),
  backgroundColor: "transparent",
  iconAnchor: [24, 24],
  popupAnchor: [24, 24],
  // shadowUrl: null,
  // shadowSize: null,
  // shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "icon",
});

export { dogIcon };
