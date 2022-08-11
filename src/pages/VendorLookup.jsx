import React from 'react'
import { Form} from 'react-bootstrap';
import Cards from '../partials/Cards'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import './VendorLookup.css'

export default function VendorLookup() {

    //fiterButton Code 

    function FilterButton() {
        function SortByItems() {
          return (
            <div className="container">
              <div className="row">
        
                <div className="border border-secondary rounded-3 col-sm m-2">
                  <Form>
                    <div key="checkbox" className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                </div>
        
                <div className="border border-secondary rounded-3 col-sm m-2">
                  <Form>
                    <div key="checkbox" className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                </div>
        
                <div className="border border-secondary rounded-3 col-sm m-2">
                  <Form>
                    <div key="checkbox" className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                  <Form>
                    <div key="checkbox" className="mb-3 ">
                      <Form.Check
                        type="checkbox"
                        id="defalt-checkbox"
                        label="Recently joined"
                      />
                    </div>
                  </Form>
                </div>
        
              </div>
            </div>
          );
        }
        return (
          <>
            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-bottom" style={{
                  'max-width': '600px',
                  'width':' auto',
                  'margin': '10px',
                  'padding': '10px'
                }}>
                  <Popover.Header className="bg-light border-bottom-0" >Sort by</Popover.Header>
                  <Popover.Body>
                    <SortByItems/>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="outline-dark">Filter</Button>
            </OverlayTrigger>
          </>
        );
      }

      //Code of the searchBar with filter button
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
