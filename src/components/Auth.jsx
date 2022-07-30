import React from 'react';
import Form from 'react-bootstrap/Form';

function Auth() {
	return (
        <>
            <h3 className='mb-4'>Login</h3>
		    <Form>
		    	<Form.Group className="mb-3" controlId="formBasicEmail">
		    		<Form.Control type="email" placeholder="Enter username" />
		    	</Form.Group>

		    	<Form.Group className="mb-3" controlId="formBasicPassword">
		    		<Form.Control type="password" placeholder="Password" />
		    	</Form.Group>

		    	<Form.Group controlId="formBasicCheckbox">
		    		<Form.Check type="checkbox" label="Remember me" />
		    	</Form.Group>
		    </Form>
        </>
	);
}

export default Auth;
