import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function Auth() {
  const [credential, setCredential] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const Onchange = (e) => {
    e.preventDefault();
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // const history=useNavigate();

    const response = await fetch(
      `http://localhost:8000/api/admin/login?uname=${credential.username}&pwd=${credential.password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok === true) {
      console.log(response.ok);
      navigate("main");
    } else {
      alert("Invalid credentials or register first");
    }
  };
  return (
    <>
      <Container style={{ width: "30em" }}>
        <h3 className=" my-4 text-center">Login</h3>
        <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="username"
              value={credential.username}
              onChange={Onchange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={credential.password}
               onChange={Onchange}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="danger" className="my-2 w-100" type="submit">
            Login
          </Button>
        </Form>
        <Button
          variant="info"
          className="my-2 w-100"
          onClick={() => {
            navigate("register");
          }}
        >
          Register
        </Button>
      </Container>
    </>
  );
}

export default Auth;
