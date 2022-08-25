import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";

const Details = () => {
  const [apiData, setApiData] = useState(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/get_certificate";
    console.log(params.id);
    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ vendorId: params.id }),
      })
        .then((response) => response.json())
        .then((data) => setApiData(data));
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  const Getcertify = async (e) => {
    e.preventDefault();
    // const history=useNavigate();

    const response = await fetch(`http://localhost:8000/api/sign_certificate`, {
      method: "POST",
      body: JSON.stringify({
        admin_id: "dbjPm4b7zYWhX95x",
        certificate_id: "630723d6302a5f336899c462",
      }),
    });
    if (response.status === 200) {
      alert("certified");
      setButtonDisabled(true); // <-- disable the button here
    e.preventDefault();
    }
  };
  return (
    <div className="container w-100 h-100" style={{ position: "relative" }}>
      {apiData !== undefined ? (
        <Card style={{ borderBottom: "none" }}>
          <Card.Header
            className="d-flex justify-content-between pt-2"
            style={{ alignItems: "center", flexDirection: "row" }}
          >
            <div>
              <MdArrowBack
                onClick={() => {
                  navigate(-1);
                }}
              />
              <b> Details</b>
            </div>
            <div className="text-muted">#{apiData.vendorId}</div>
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
              </div>

              <div>
                <div>
                  <b>{apiData.details.name}</b>
                </div>
                <div className="text-muted d-flex ">
                  <div> Gender</div>
                  <div className="mx-2"> Age</div>
                  <div className="mx-2"> {apiData.vendorId}</div>
                </div>
              </div>

              <div style={{ width: "10em" }}>
                <div className="d-grid gap-2 my-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={Getcertify}
                    disable={buttonDisabled}
                  >
                    Certify
                  </Button>
                  <Button variant="danger" size="sm">
                    Reject
                  </Button>
                </div>
              </div>
            </div>

            <hr className="ml-3" />
            <Row>
              <Col className="col-6">
                <div className=" d-flex ">
                  <div className=" mx-5 my-1 me-5">
                    <b>{apiData.document.verType}</b>
                  </div>
                  <div>{apiData.document.verId}</div>
                </div>
                <div className=" d-flex">
                  <div className=" mx-5 my-1 me-5">
                    <b>Address</b>
                  </div>
                  <div>
                    <p className="p-0 m-0">{apiData.details.address}</p>
                  </div>
                </div>
                <div className=" mx-5 my-2">
                  <b>Nominee Details</b>
                </div>

                <div className=" d-flex">
                  <div className=" mx-5 my-1 me-5">
                    <b>Nominee 1</b>
                  </div>
                  <div>{apiData.nominees.nominee1.name}</div>
                </div>
                <div className=" d-flex">
                  <div className=" mx-5 my-1 me-5">
                    <b>Relation</b>
                  </div>
                  <div>{apiData.nominees.nominee1.relation}</div>
                </div>
                <br></br>
                <div className=" d-flex">
                  <div className=" mx-5 my-1 me-5">
                    <b>Nominee 2</b>
                  </div>
                  <div>{apiData.nominees.nominee2.name}</div>
                </div>
                <div className=" d-flex">
                  <div className=" mx-5 my-1 me-5 ">
                    <b>Relation</b>
                  </div>
                  <div>{apiData.nominees.nominee2.relation}</div>
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
          </Row>
        </Card>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Details;
