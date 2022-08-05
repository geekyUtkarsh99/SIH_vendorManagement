import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
// import Auth from './components/Auth';
import Register from './components/Register';
import NavigationBar from './partials/Nav';

function App() {
	return (
		<div className="App">
			<NavigationBar/>
            <Container className='vh-100 pt-5 w-25'>
                {/* <Auth /> */}
				<Register/>
            </Container>
		</div>
	);
}

export default App;
