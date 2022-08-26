// api key=AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";
import axios from "axios";

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
  const [newArea, setNewArea] = useState(null);

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
    zIndex: 1,
  };

  const mapOnClick = React.useCallback((e) => {
    console.log("map clicked");
    setNewArea({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      radius: 100,

      limit: 50,
      name: "",
    });
  }, []);

  const [selectedMarker, setSelectedMarker] = React.useState(-1);

  function OffCanvasExampleAdd(props) {
    const [show, setShow] = useState(props.show);
    const onInput = (e) => {
        let updatedArea = newArea;
        updatedArea.radius = parseInt(e.target.value);
        setNewArea(updatedArea);
      },
      onInputLimit = (e) => {
        let updatedArea = newArea;
        updatedArea.radius = parseInt(e.target.value);
        setNewArea(updatedArea);
      },
      onFormSubmit = (e) => {
        setMarkers((current) => [...current, newArea]);
      };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //RETURN OF OFFCANVAS
    return (
      <>
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn btn-outline position-absolute bittom-0 end-0 m-2"
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
                <Form.Control
                  type="text"
                  value={newArea.radius}
                  onChange={onInput}
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Limit</Form.Label>
                <Form.Control
                  type="text"
                  value={newArea.limit}
                  onChange={onInputLimit}
                  autoComplete="off"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="btn btn-primary mx-2"
                onClick={() => {
                  onFormSubmit();
                  setNewArea(null);
                  axios.post("http://127.0.0.1:8000/api/admin/addarea", {
                    area_id: "213123",
                    lat: selectedMarker.lat,
                    long: selectedMarker.lng,
                    name: "Hatwara vegetable market",
                    radius: newArea.radius,
                    city: "jaipur",
                    ven_no: [],
                    ven_limit: newArea.limit,
                  });
                }}
              >
                Add Area
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  //For OffCanvas while adding the location and setting the limits and radius
  function OffCanvasExample(props) {
    const [show, setShow] = useState(props.show);
    const onInput = (e) => {
        e.preventDefault();
        const updatedArray = [...markers];
        markers[selectedMarker].radius = parseInt(e.target.value);
        setMarkers(updatedArray);
      },
      onFormSubmit = (e) => {};
    const onInputLimit = (e) => {
      const updatedArray = [...markers];
      markers[selectedMarker].limit = parseInt(e.target.value);
      setMarkers(updatedArray);
    };
    const handleClose = () => {
      setShow(false);
      setSelectedMarker(-1);
    };
    const handleShow = () => setShow(true);

    //RETURN OF OFFCANVAS
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Locate Me</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Radius</Form.Label>
                <Form.Control
                  type="text"
                  value={markers[selectedMarker].radius}
                  onChange={onInput}
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Limit</Form.Label>
                <Form.Control
                  type="text"
                  value={markers[selectedMarker].limit}
                  onChange={onInputLimit}
                  autoComplete="off"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="btn btn-primary mx-2"
                onClick={() => {
                  onFormSubmit();
                }}
              >
                Update Area
              </Button>
              <Button
                variant="primary"
                className="btn btn-danger"
                onClick={(e) => {
                  setMarkers([
                    ...markers.slice(0, selectedMarker),
                    ...markers.slice(selectedMarker + 1),
                  ]);
                  setSelectedMarker(-1);
                }}
              >
                Delete Area
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  //MAIN RETURN
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100wh" }}>
      <LoadScript googleMapsApiKey="AIzaSyCxdc58Bj4jL2Q_v9IxN5fvcDbqbxOD8Ag">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onClick={mapOnClick}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            {markers.map((marker, index) => (
              <React.Fragment key={index}>
                <Marker
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  onClick={() => {
                    console.log("selected index", index);
                    setSelectedMarker(index);
                  }}
                />
                <Circle
                  center={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  options={{ ...options, radius: marker.radius }}
                />
              </React.Fragment>
            ))}
            {selectedMarker >= 0 ? (
              <>
                <OffCanvasExample
                  show={true}
                  lat={markers[selectedMarker].lat}
                  lng={markers[selectedMarker].lng}
                  radius={markers[selectedMarker].radius}
                  limit={markers[selectedMarker].limit}
                />
                {/*<InfoWindow
                                position={{ lat: markers[selectedMarker].lat, lng: markers[selectedMarker].lng }}
                                onCloseClick={() => {
                                    setSelectedMarker(null);
                                }}
                            >
                                <div className="container p-4">
                                    <h6>Vendor position</h6>
                                    <p> Longitude = {selectedMarker.lat}</p>
                                    <p> Latitude = {selectedMarker.lng}</p>
                                    <OffCanvasExample lat={selectedMarker.lat} lng={selectedMarker.lng} />
                                </div>
                            </InfoWindow>*/}
              </>
            ) : null}
            {newArea ? (
              <InfoWindow
                position={{ lat: newArea.lat, lng: newArea.lng }}
                onCloseClick={() => {
                  setNewArea(null);
                }}
              >
                <div className="container p-4 m-3">
                  <h6>Vendor position</h6>
                  <p> Longitude = {newArea.lat}</p>
                  <p> Latitude = {newArea.lng}</p>
                  <OffCanvasExampleAdd lat={newArea.lat} lng={newArea.lng} />
                </div>
              </InfoWindow>
            ) : null}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
