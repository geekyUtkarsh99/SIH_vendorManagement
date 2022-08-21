// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
import React from "react";

import {
  GoogleMap,
  LoadScript,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  height: "100vh",
  width: "80%",
};

const center = {
  lat: 28.656158,
  lng: 77.24102,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};

export default function AreaAllocator() {
  const [markers, setMarkers] = React.useState([]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100wh" }}>
      <LoadScript googleMapsApiKey="AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={(e) => {
              setMarkers((current) => [
                ...current,
                {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                  time: new Date(),
                },
              ]);

          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            {markers.map((marker) => (
              <Marker
              key={marker.time.toISOString()}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                icon={{
                  url: "/vendor_ico.svg",
                  scaledSize: new window.google.maps.Size(70,70),
                  origin: new window.google.maps.Point(0,0),
                  anchor: new window.google.maps.Point(15, 15),
                }}
              />
            ))}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
