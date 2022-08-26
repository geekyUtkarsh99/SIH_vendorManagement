import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Notifications = () => {
  const navigate = useNavigate();
  const handleclick = (e) => {
    navigate("post");
  };
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
      <Row className="my-2">
        <Card style={{ flexDirection: "row" }}>
          <Col className="col-12">
            <Card.Body className="px-2">
              <div className="main d-flex justify-content-between">
                <div className="sub">
                  <div className="title text-muted">
                    <b>Title</b>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, cupiditate.
                    </p>
                  </div>
                  <div className="title text-muted">
                    <b>Posted on</b>
                    <br />
                    Date
                  </div>
                </div>
                <div className="sub d-flex" style={{ flexDirection: "column" }}>
                  <Button variant="primary my-2">Edit</Button>
                  <Button variant="danger">Primary</Button>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Card>
      </Row>
    </>
  );
};

export default Notifications;
