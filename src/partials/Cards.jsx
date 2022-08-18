import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import {
    MdKeyboardArrowDown
} from "react-icons/md";
export default function Cards() {
    return (
        <>
            <Row className='my-2'>
                <Card style={{ flexDirection: "row" }}>
                    <Col className="col-2">
                        <Card.Img style={{ width: '8rem' }} className="p-2" variant="left" src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png" />
                    </Col>
                    <Col className="col-10">
                        <Card.Body className="px-2">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col className='position-absolute top-0 end-0 mx-2'>
                        <MdKeyboardArrowDown style={{background: '#ebe4e4'}}/>
                    </Col>
                </Card>
            </Row>
        </>
    )
}
