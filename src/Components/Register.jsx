import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'


const Register = () => {
	const[credential,setCredential]=useState({"username":"","password":"","date":"","city":"","state":"","area":""});
	const Onchange =(e)=>{
			e.preventDefault();
			setCredential({...credential,[e.target.name]:e.target.value});

	}
	
		const [validated, setValidated] = useState(false);
	  
		const handleSubmit = async(event) => {
			event.preventDefault();
		  const form = event.currentTarget;
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
	  setValidated(true);
	  const response=await fetch(`http://localhost:8000/api/admin/register`,{
		method : 'POST',
		  headers : {
			 'Content-Type':'application/json'
	 },
	 body:JSON.stringify({username:credential.username,password:credential.password,date:credential.date,city:credential.city,state:credential.state,area:credential.area})
 });
	
	 console.log(response);
	 
		};
	  
  return (
    <>
            <h3 className='mb-4 text-center' >Register</h3>
		    <Form noValidate validated={validated} onSubmit={handleSubmit}>
		    	<Form.Group className="mb-3" controlId="formBasicEmail">
		    		<Form.Control type="text" name="username" value={credential.username} onChange={Onchange} placeholder="Enter username" required />
					<Form.Control.Feedback type="invalid">
            Please Enter Username.
          </Form.Control.Feedback>
		    	</Form.Group>

		    	<Form.Group className="mb-3" controlId="formBasicPassword">
		    		<Form.Control type="password"  name="password" value={credential.password} onChange={Onchange} placeholder="Enter Password" required/>
					<Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
		    		<Form.Control type="date" name="date" value={credential.date} onChange={Onchange} placeholder="Enter date" required />
				
		    	</Form.Group>
				<Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Control type="text" placeholder="Enter City" value={credential.city} onChange={Onchange}  name="city"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
		<Form.Group className="mb-3" controlId="validationCustom031">
		<Form.Control type="text" placeholder="Enter State" value={credential.state} onChange={Onchange}  name="state"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
		<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" value={credential.area} onChange={Onchange} placeholder='Enter line address' name="area" required />
      </Form.Group>
		    	<Form.Group  controlId="formBasicCheckbox">
		    		<Form.Check type="checkbox" label="Remember me" />
		    	</Form.Group>
              <Button className="mb-3 text-center" variant="success" w-100 size ="sm" type="submit" >
                    Submit
                </Button>
              </Form>
        </>
  );
}

export default Register