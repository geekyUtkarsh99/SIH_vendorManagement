import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
// import { useNavigate } from 'react-router';

function Auth() {
	const[credential,setCredential]=useState({"username":"","password":""});
	const Onchange =(e)=>{
			e.preventDefault();
			setCredential({...credential,[e.target.name]:e.target.value});

	}

	const HandleSubmit= async (e)=>{
		e.preventDefault();
		// const history=useNavigate();
		
			const response=await fetch(`http://localhost:8000/api/admin/login?uname=${credential.username}&pwd=${credential.password}`,{
			   method : 'GET',
				 headers : {
					'Content-Type':'application/json'
			}
			
		});
		// console.log("success");
			console.log(response);
			
			
	}
	return (
        <>
            <h3 className='mb-4 text-center' >Login</h3>
		    <Form onSubmit={HandleSubmit}>
		    	<Form.Group className="mb-3" controlId="formBasicEmail">
		    		<Form.Control type="text" name="username"  value={credential.username} onChange={Onchange} placeholder="Enter username" />
		    	</Form.Group>

		    	<Form.Group className="mb-3" controlId="formBasicPassword">
		    		<Form.Control type="password"  name="password" value={credential.password} onChange={Onchange} placeholder="Password" />
		    	</Form.Group>

		    	<Form.Group controlId="formBasicCheckbox">
		    		<Form.Check type="checkbox" label="Remember me" />
		    	</Form.Group>
				<Button variant="success" w-100 size ="sm" type="submit" >
                    Submit
                </Button>
		    </Form>
        </>
	);
}

export default Auth;
