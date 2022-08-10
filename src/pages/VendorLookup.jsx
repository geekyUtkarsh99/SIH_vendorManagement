import React from 'react'
import { Form} from 'react-bootstrap';
import Cards from '../partials/Cards'
import FilterButton from '../Components/FilterButton';

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
                    {/* <Button variant="outline-dark">filters</Button> */}

                    {/* Component for the filter button  */}
                    <FilterButton/>
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
