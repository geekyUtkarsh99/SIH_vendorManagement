import React from 'react'
import {Card,Col,Table} from 'react-bootstrap'
import { MdArrowBack } from "react-icons/md";
export default function Detailcard() {
  return (
    <>
    <Card style={{ borderBottom:"none"}}>
     <Card.Header className="d-flex justify-content-between pt-2" style={{alignItems:"center",flexDirection:"row"}}>
    <div>
     <MdArrowBack/> <b> Vendor Name</b>
     </div>
     <div className='text-muted'>#1234abcd</div>
     </Card.Header>
     
          <Col>
      <Card.Img style={{ width: '14rem' }} className="p-2"  variant="left" src="https://www.pngitem.com/pimgs/m/75-754636_icon-marketer-person-businessman-sales-business-business-man.png" />
      </Col>
      <Col >
      
      <Table striped bordered hover size="lg" className="w-100">
      <thead>
        <tr>
          <th>Details</th>
          <th>Location History</th>
          <th>Licences</th>
          <th>Certification</th>
          <th></th>
        </tr>
      </thead>
      </Table>
     
      </Col>
      </Card>
      
    </>
  )
}
