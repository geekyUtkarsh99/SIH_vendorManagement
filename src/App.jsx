import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Auth from './components/Auth';
import TempSNB from './components/TempSNB';
import Licenses from './pages/Licenses'
import Feedback from './pages/Feedback'
import Certification from './pages/Certification'
import Schemes from './pages/Schemes'
import NavBar from './components/NavBar'
// import Auth from './components/Auth';
// import Register from './components/Register';
// import NavigationBar from './partials/Nav';


function App() {
	return (
		// <div className="App">
		// 	<NavigationBar/>
        //     <Container className='vh-100 pt-5 w-25'>
        //         {/* <Auth /> */}
		// 		<Register/>
        //     </Container>
		// </div>
		//<SideNavBar/>
		<>
		<Router>
		<NavBar/>
		<TempSNB/>
			<Routes>
 					<Route exact path='/Licences' element={<Licenses/>}/>
					<Route exact path='/certification' element={<Certification/>}/>
					<Route exact path='/schemes' element={<Schemes/>}/>
					<Route exact path='/feedback' element={<Feedback/>}/>
			</Routes>
		</Router>
		
		</>

	);
}

export default App;
