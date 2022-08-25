// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
import React, { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 5000,
  zIndex: 1,
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
              <>
                <Marker
                  key={marker.time.toISOString()}
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
                <Circle center={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }} options={options} />
              </>
            ))}
            {selectedMarker ? (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
              >
                <div className="container p-4">
                  <h6>Vendor position</h6>
                  <p> Longitude = {selectedMarker.lat}</p>
                  <p> Latitude = {selectedMarker.lng}</p>
                  <button type="button" className="btn btn-outline-primary position-absolute bottom-0 end-0 m-2 ">Primary</button>
                </div>
              </InfoWindow>
            ) : null}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
