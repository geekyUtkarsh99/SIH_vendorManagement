import React from "react";
import { Col, Form } from "react-bootstrap";
import Cards from "../partials/Cards";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function VendorLookup() {
  //fiterButton Code

  function FilterButton() {
    function SortByItems() {
      return (
        <div className="container">
          <div className="row">
            <div className="border border-secondary rounded-3 col-sm m-2 p-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
            </div>
            <div className="border border-secondary rounded-3 col-sm m-2 p-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
            </div>
            <div className="border border-secondary rounded-3 col-sm m-2 p-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ borderRadius: "20px" }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recently joined
                </label>
              </div>
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
            <Popover
              id="popover-positioned-bottom"
              style={{
                maxWidth: "600px",
                width: " auto",
                margin: "10px",
                padding: "10px",
                position: "fixed",
              }}
            >
              <Popover.Header className="bg-light border-bottom-0">
                Sort by
              </Popover.Header>
              <Popover.Body>
                <SortByItems />
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
      <Form className="w-100 d-flex p-0 my-2">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
        />
     
        <FilterButton />
      </Form>
      <div className="container">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((e, i) => (
          <Col lg={12}>
            <Cards key={i} />
          </Col>
        ))}
      </div>
    </>
  );
}
