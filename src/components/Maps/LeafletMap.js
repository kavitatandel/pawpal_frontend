import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../../styles/Map.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

// Fixes Leaflet Error loading Icons
const icon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [12, 20],
    iconAnchor: [12, 41],
});


const LeafletMap = ({ locations, setLocations }) => {
    const startPosition = [51.0647, 12.0128];
    return (
        <MapContainer center={[startPosition[0], startPosition[1]]} zoom={5}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((point, index) => {
                return (
                    <>
                        {/* <Marker position={[point.lat, point.lng]} icon={icon} key={index}>
                            <Popup key={index}>I am a pop-up!</Popup>
                        </Marker> */}
                        <Marker position={[point.latitude, point.longitude]} icon={icon} key={index}>
                            <Popup key={index}>I am a pop-up!</Popup>
                        </Marker>
                    </>
                );
            })}
        </MapContainer>
    );
};

export default LeafletMap;
