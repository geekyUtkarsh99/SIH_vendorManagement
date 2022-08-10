import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function SortByItems() {
  

  return (
    <div className="container">
      <div className="row">

        <div className="border border-secondary rounded-3 col-sm m-2">
          <Form>
            <div key="radio" className="mb-3">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
        </div>

        <div className="border border-secondary rounded-3 col-sm m-2">
          <Form>
            <div key="radio" className="mb-3">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
        </div>

        <div className="border border-secondary rounded-3 col-sm m-2">
          <Form>
            <div key="radio" className="mb-3">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
          <Form>
            <div key="radio" className="mb-3 ">
              <Form.Check
                type="radio"
                id="defalt-radio"
                label="Recently joined"
              />
            </div>
          </Form>
        </div>

      </div>
    </div>
  );
}
