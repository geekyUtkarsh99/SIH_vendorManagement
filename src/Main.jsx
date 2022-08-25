import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'
// import Auth from './components/Auth';

import NavBar from './Components/NavBar'
import SideBar from './partials/SideBar';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
  return (
    
        <div className='d-flex flex-row'>
                <SideBar/>
                <div className='d-flex flex-column w-100'>
                    <NavBar />
                    <Container style={{marginTop:"64px"}}>
                        <main>
                            <Outlet />
                        </main>
                    </Container>
                </div>
            </div>
    
  )
}

export default Main