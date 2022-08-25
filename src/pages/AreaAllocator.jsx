// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
import React, { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 28.656158,
  lng: 77.24102,
};

export default function AreaAllocator() {
  const [markers, setMarkers] = useState([]);

  const mapOnClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const [selectedMarker, setSelectedMarker] = React.useState(null);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100wh" }}>
      <LoadScript googleMapsApiKey="AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={mapOnClick}
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
                  scaledSize: new window.google.maps.Size(70, 70),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                }}
                onClick={() => {
                  setSelectedMarker(marker);
                }}
              />
            ))}
            {selectedMarker ? (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
              >
                <div>
                  <h6>Vendor position</h6>
                  <p> Longitude = {selectedMarker.lat}</p>
                  <p> Latitude = {selectedMarker.lng}</p>
                </div>
              </InfoWindow>
            ) : null}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
