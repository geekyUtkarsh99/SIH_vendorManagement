import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Feedback() {
  return (
    <div className="w-100 h-100 position-relative">
      <Row className="my-0">
        <Card style={{ flexDirection: "row" }}>
          <Col className="col-10">
            <div className="px-2">
              <div className="d-flex mb-2">
                <div className="mx-4 text-muted">
                  <b>vendorId</b>
                  <br />
                  vid
                </div>
                <div className="mx-4 text-muted">
                  <b>Sanitation</b>
                  <br />
                  sat
                </div>
                <div className="mx-4 text-muted">
                  <b>Services</b>
                  <br />
                  ser
                </div>
              </div>
              <div className="mx-4 mt-4 ">
                <h6 className="text-muted">Description</h6>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Col>
        </Card>
      </Row>
    </div>
  );
}
