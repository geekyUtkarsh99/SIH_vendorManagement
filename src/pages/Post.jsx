import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
const Post = () => {
  const [img, setImg] = useState();
  const [credential, setCredential] = useState({
    title: "",
    description: "",
    image: "",
  });
  const Onchange = (e) => {
    e.preventDefault();
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  const navigate = useNavigate();
  const handleclick = async (e) => {
    const response = await fetch(
      `http://localhost:8000/api/admin/uploadscheme`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: credential.title,
          description: credential.description,
          image: credential.image,
        }),
      }
    );
    console.log(response);
  };

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
          <Button variant="primary " onClick={handleclick}>
            Submit
          </Button>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={credential.title}
                onChange={Onchange}
                placeholder="Enter Some Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Banner</Form.Label>
              <div>
                <input
                  type="file"
                  name="image"
                  onChange={onImageChange}
                  value={credential.image}
                />
                <img src={img} alt="" style={{ width: "100px" }} />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={5}
                value={credential.description}
                onChange={Onchange}
                placeholder="Body is here"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
