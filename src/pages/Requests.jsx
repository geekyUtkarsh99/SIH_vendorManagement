import React from "react";
// import Detailcard from '../partials/Detailcard'
import { Card, Col, Table, Row, Button } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";

export default function Requests() {
  return (
    <div className="container w-100 h-100" style={{ position: "relative" }}>
      <Card style={{ borderBottom: "none" }}>
        <Card.Header
          className="d-flex justify-content-between pt-2"
          style={{ alignItems: "center", flexDirection: "row" }}
        >
          <div>
            <MdArrowBack /> <b> Details</b>
          </div>
          <div className="text-muted">#CertificateRrequestID</div>
        </Card.Header>
        <Row className="col-12">
          <div className=" d-flex justify-content-between">
            <div className="d-flex">
              <Card.Img
                style={{ width: "10em" }}
                className="p-2"
                variant="left"
                src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png"
              />
              <div>
                <div>
                  <b>Vendor Name</b>
                </div>
                <div className="text-muted d-flex ">
                  <div> Gender</div>
                  <div className="mx-2"> Age</div>
                  <div className="mx-2"> VendorId</div>
                </div>
              </div>
            </div>

            <div style={{ width: "10em" }}>
              <div className="d-grid gap-2 my-3">
                <Button variant="primary" size="sm">
                  Certify
                </Button>
                <Button variant="danger" size="sm">
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </Row>

        <Table striped bordered hover size="lg" className="w-100">
          <thead>
            <tr>
              <th>Details</th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Col className="col-6">
          
            <div className=" d-flex ">
              <div className=" mx-5 my-1 me-5"><b>Adhar</b></div>
              <div>Adhar number</div>
            </div>
            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5"><b>Address</b></div>
              <div>
              <p className="p-0 m-0">some street some place some address</p>
              <p className="p-0 m-0">some street some place some address</p>
              <p className="p-0 m-0">some street some place some address</p>
              </div>
             
            </div>
            <div className=" mx-5 my-2"><b>Nominee Details</b></div>

            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5" ><b>Nominee 1</b></div>
              <div>Nominee 1 Name</div>
            </div>
            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5"><b>Adhar</b></div>
              <div>Nominee1 Adhar</div>
            </div>
           <br></br>
            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5" ><b>Nominee 2</b></div>
              <div>Nominee 2 Name</div>
            </div>
            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5 "><b>Adhar</b></div>
              <div>Nominee2 Adhar</div>
            </div>
            <div className=" mx-5 my-2"><b>Business Details</b></div>
            <div className=" d-flex">
              <div className=" mx-5 my-1 me-5"><b>Type</b></div>
              <div>Food</div>
            </div><div className=" d-flex">
              <div className=" mx-5 my-1 me-5"><b>Name</b></div>
              <div>Some Name</div>
            </div>

          </Col>
          <Col className="col-6">
            <b>Photos</b>

            <div className="ml-auto mr-auto d-flex">
              <div>
                {[1, 2].map((e) => (
                  <div>
                    <Card.Img
                      style={{ width: "9rem" }}
                      className="p-1"
                      variant="left"
                      src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png"
                    />
                  </div>
                ))}
              </div>
              <div>
                {[1, 2].map((e) => (
                  <div>
                    <Card.Img
                      style={{ width: "9rem" }}
                      className="p-1"
                      variant="left"
                      src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
