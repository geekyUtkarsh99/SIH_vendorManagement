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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route path="vendor" element={<VendorLookup />} />
          <Route path="requests" element={<Requests />} />
          <Route path="areas" element={<AreaAllocator />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="Details" element={<Details />} />
          <Route path="*" element={<Navigate to="vendor" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
