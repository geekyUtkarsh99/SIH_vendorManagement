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
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100wh" }}>
      <LoadScript googleMapsApiKey="AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <Marker
              onLoad={onLoad}
              position={{
                lat: center.lat,
                lng: center.lng,
              }}
            />
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
