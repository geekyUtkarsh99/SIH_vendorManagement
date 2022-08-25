import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import VendorLookup from "./pages/VendorLookup";
import AreaAllocator from "./pages/AreaAllocator";
import Requests from "./pages/Requests";
import Feedback from "./pages/Feedback";
import Details from "./pages/Details";
import Main from "./Main";
import Auth from "./Components/Auth";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact path="../main" element={<Main />} />
          <Route path="vendor" element={<VendorLookup />} />
          <Route path="requests">
            <Route index element={<Requests />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="areas" element={<AreaAllocator />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="Details" element={<Details />} />
          <Route path="login" element={<Auth />} />

          <Route path="/" element={<Navigate to="vendor" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
