import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Notifications = () => {
  const [apiData, setApiData] = useState(undefined);
  const navigate = useNavigate();
  const handleclick = (e) => {
    navigate("post");
  };
  useEffect(() => {
    const url = " http://localhost:8000/api/admin/getschemes";
    // console.log(params.id);
    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          type: 0,
          admin_id: "dbjPm4b7zYWhX95x",
          city: "bhopal",
        }),
      })
        .then((response) => response.json())
        .then((data) => setApiData(data));
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  console.log(apiData);
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          size="sm"
          className="justify-content-end"
          onClick={handleclick}
        >
          Add Post
        </Button>
      </div>
      {apiData !== undefined
        ? apiData.map((data) => (
            <Row className="my-2">
              <Card style={{ flexDirection: "row" }}>
                <Col className="col-12">
                  <Card.Body className="px-2">
                    <div className="main d-flex justify-content-between">
                      <div className="sub">
                        <div className="title text-muted">
                          <b>{data.title}</b>
                          <br />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis, cupiditate.
                          </p>
                        </div>
                        <div className="title text-muted">
                          <b>Posted on</b>
                          <br />
                          Date
                        </div>
                      </div>
                      <div
                        className="sub d-flex"
                        style={{ flexDirection: "column" }}
                      >
                        <Button variant="primary my-2">Edit</Button>
                        <Button variant="danger">Primary</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          ))
        : "loading"}
      ;
    </>
  );
};

export default Notifications;
