import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
// import NavBar from "./Components/NavBar";
// import SideBar from "./partials/SideBar";
// import { Col, Container, Row } from "react-bootstrap";
import Main from "./Main";
import Auth from "./Components/Auth";
// import Register from './Components/Register';
// import NavigationBar from './partials/Nav';

function App() {
  return (
    <>
      {/*<Auth /> */}
      <Main />
    </>
  );
}

export default App;
