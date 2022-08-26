import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowDown } from "react-icons/md";
export default function Cards(props) {
  const navigate = useNavigate();
  const handleclick = (id) => {
    navigate(`./${id}`);
  };

  return (
    <>
      <Row className="my-2">
        <Card style={{ flexDirection: "row" }}>
          <Col className="col-2">
            <Card.Img
              style={{ width: "8rem" }}
              className="p-2"
              variant="left"
              src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png"
            />
          </Col>
          <Col className="col-10">
            <Card.Body className="px-2">
              <Card.Title>{props.dataArray.details.name}</Card.Title>
              <Card.Text>
                Certificate Status <br /> {props.dataArray.status.label}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="position-absolute top-0 end-0 mx-2">
            <MdKeyboardArrowDown
              style={{ background: "#ebe4e4" }}
              onClick={() => handleclick(props.dataArray.vendorId)}
            />
            {console.log(props.dataArray.vendorId)}
          </Col>
        </Card>
      </Row>
    </>
  );
}
