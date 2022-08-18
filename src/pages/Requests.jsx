import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


export default function Requests() {
    const [apiData, setApiData] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/get_all_certificate";
        try {
            fetch(url).then(response => response.json()).then(data => setApiData(data));
        } catch (error) {
            console.log("error", error);
        }
    }, []);

    const handleclick = (id) => {
        navigate(`./${id}`);
    };

    return (
        <Container fluid>
            <Row className="mt-2">
            {apiData !== undefined
                ? apiData.map((data) => (
                        <Card className="flex-row" key={data.vendorId}>
                            <Col className="col-md-auto">
                                <Card.Img
                                    style={{ width: "8rem" }}
                                    className="p-2"
                                    variant="left"
                                    src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png"
                                />
                            </Col>
                            <Col className="flex-fill">
                                <Card.Body className="px-2">
                                    <Card.Title>{data.details.name}</Card.Title>
                                    <Card.Text>
                                        VendorId : {data.vendorId}
                                        <br />
                                        Status : {data.status.label}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col className="py-2 col-md-auto">
                                <Button onClick={() => handleclick(data.vendorId)}>See details</Button>
                            </Col>
                        </Card>
                ))
                : "loading"}
            </Row>
        </Container>
    );
}
