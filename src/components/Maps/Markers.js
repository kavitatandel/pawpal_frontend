import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: require("../../assets/markers/greenMarker.png"),
  iconRetinaUrl: require("../../assets/markers/greenMarker.png"),
  backgroundColor: "transparent",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 60),
  className: "icon",
});

export { userIcon };

const dogIcon = new L.Icon({
  iconUrl: require("../../assets/markers/pinkMarker.png"),
  iconRetinaUrl: require("../../assets/markers/pinkMarker.png"),
  backgroundColor: "transparent",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "icon",
});

export { dogIcon };
