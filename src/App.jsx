import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
// import Auth from './components/Auth';

import NavBar from './Components/NavBar'
import SideBar from './partials/SideBar';
import { Col, Container, Row } from 'react-bootstrap';

// import Auth from './components/Auth';
// import Register from './Components/Register';
// import NavigationBar from './partials/Nav';

function App() {
    return (
        <>
            <div className='d-flex flex-row'>
                <SideBar />
                <div className='d-flex flex-column w-100'>
                    <NavBar />
                    <Container fluid>
                        <main>
                            <Outlet />
                        </main>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default App;
