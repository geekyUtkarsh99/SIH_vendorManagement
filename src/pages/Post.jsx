import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
const Post = () => {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  const navigate = useNavigate();
  return (
    <>
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
          <Button variant="primary ">Submit</Button>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Some Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Banner</Form.Label>
              <div>
                <input type="file" onChange={onImageChange} />
                <img src={img} alt="" style={{width:"100px"}}/>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Body is here" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
