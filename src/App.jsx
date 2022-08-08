import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Auth from './components/Auth';
import TempSNB from './Components/TempSNB';
import Header from "./Components/Header";
import AreaAllocator from "./pages/AreaAllocator";
import Requests from "./pages/Requests";
import VendorLookup from "./pages/VendorLookup";
import Feedback from "./pages/Feedback";
import NavBar from './Components/NavBar'

// import Auth from './components/Auth';
// import Register from './components/Register';
// import NavigationBar from './partials/Nav';

//import react pro sidebar components
import {
	ProSidebar,
	Menu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent
  } from "react-pro-sidebar";

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
		// <>
		// <Router>
		// <NavBar/>
		// <TempSNB/>
		// 	<Routes>
 		// 			<Route exact path='/Licences' element={<Licenses/>}/>
		// 			<Route exact path='/certification' element={<Certification/>}/>
		// 			<Route exact path='/schemes' element={<Schemes/>}/>
		// 			<Route exact path='/feedback' element={<Feedback/>}/>
		// 	</Routes>
		// </Router>
		
		// </>
		<div className="App">
      <Router>
	  <NavBar/>
      <Header />
        <Routes>
          <Route  path = "/" element= {<VendorLookup/>}/>
          <Route  path = "/page2" element= {<Requests/>}/>
          <Route  path = "/page3" element= {<AreaAllocator/>}/>
          <Route  path = "/page4" element= {<Feedback/>}/>
        </Routes>
      </Router>
    </div>
	);
}

export default App;
