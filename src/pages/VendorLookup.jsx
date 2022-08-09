import React from 'react'
import { Form, Button } from 'react-bootstrap';
import Cards from '../partials/Cards'
export default function VendorLookup() {
    return (
        <>
            <div className="container w-100 h-100" style={{ position: "relative" }}>
                <Form className=" v-100 d-flex my-2 p-0">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-dark">filters</Button>
                </Form>
                {
                    [1, 2, 3, 4, 5].map((e, i) => (
                        <Cards key={i} />
                    ))
                }
            </div>
        </>
    )
}
