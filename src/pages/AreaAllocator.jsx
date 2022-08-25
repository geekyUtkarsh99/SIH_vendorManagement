// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from 'react-bootstrap/Form';

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
  strokeColor: "#96948f",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#c4c1b9",
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function OffCanvasExample({ ...props }) {
    return (
      <>
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn btn-outline position-absolute bottom-0 end-0 m-2"
        >
          Add Area
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Locate Me</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Radius</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Limit</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Button variant="primary"  className="btn btn-primary mx-2" type="submit">
                Update Area
              </Button>
              <Button variant="primary" className="btn btn-danger" type="submit">
                Delete Area
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

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
                <Circle
                  center={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  options={options}
                />
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
                  <OffCanvasExample />
                </div>
              </InfoWindow>
            ) : null}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
