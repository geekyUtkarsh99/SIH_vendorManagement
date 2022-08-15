// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
// install packages -- npm i @iconify/icons-mdi,@iconify/react
// 
import React from "react";
import GoogleMapReact from "google-map-react";
import { MapPin } from "react-feather";

const AnyReactComponent = ({ text }) => (
    <div className="pin">
        {/*<Icon icon={locationIcon} className="pin-icon" />*/}
        <MapPin className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
);

export default function AreaAllocator() {
    const defaultProps = {
        center: {
            lat: 28.70406,
            lng: 77.102493,
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "80%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={28.70406} lng={77.102493} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}
