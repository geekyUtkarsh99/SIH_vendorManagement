import React, { useEffect, useState } from "react";
// import Detailcard from '../partials/Detailcard'
import { Card, Col, Table, Row, Button } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";

export default function Requests() {
  const [apiData, setApiData] = useState("");
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/get_certificate";
    const Data = {
      vendorId: "62ef50d4d7038a7c8ea4c3c5",
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(Data),
        });
        let tempApiData = await response.json();
        setApiData(tempApiData);
        console.log(apiData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  });

  return (
    <div
      className="container w-100 h-100"
      style={{ position: "relative" }}
    ></div>
  );
}
