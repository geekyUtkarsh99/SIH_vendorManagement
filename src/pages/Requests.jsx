import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";


export default function Requests() {
    const [apiData, setApiData] = useState(undefined);
    const navigate = useNavigate();
    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/get_all_certificate";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                let tempApiData = await response.json();
                setApiData(tempApiData);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const handleclick = () => {
        navigate("Details", { replace: true });
    };
    return (
        <div className="container w-100 h-100" style={{ position: "relative" }}>
            {apiData !== undefined
                ? apiData.map((data) => (
                    <Row className="my-2" key={data.vendorId}>
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
                                    <Card.Title>{data.details.name}</Card.Title>
                                    <Card.Text>
                                        VendorId : {data.vendorId}
                                        <br />
                                        Status : {data.status.label}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col className='position-absolute top-0 end-0 mx-2'>
                                <MdKeyboardArrowDown onClick={handleclick} style={{background: '#ebe4e4'}} />

                            </Col>
                        </Card>
                    </Row>
                ))
                : "loading"}
        </div>
    );
}
