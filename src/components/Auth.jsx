import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';


function Login(props) {
	const navigate = useNavigate()
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => navigate("/register")}>
					Register
				</Button>
				<Button variant="primary" onClick={props.handleClose}>
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	)

}

function Register(props) {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Register</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Re-Type Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={props.handleClose}>
					Register
				</Button>
			</Modal.Footer>
		</Modal>
	)

}

function Auth() {
	const [show, setShow] = useState(false);

	const navigate = useNavigate()
	const handleClose = () => {
		setShow(false)
		navigate("../")
	};
	const handleShow = () => {
		setShow(true)
		navigate("/login")
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="ms-4">
				Login / Register
			</Button>
			<Routes>
				<Route path='/login' index element={<Login show={show} handleClose={handleClose} />} />
				<Route path='/register' element={<Register show={show} handleClose={handleClose} />} />
			</Routes>
			<Outlet />
		</>
	);
}

export default Auth;
