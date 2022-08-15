import React from 'react';
import './App.css';
import {  Outlet } from 'react-router-dom'
// import Auth from './components/Auth';

import NavBar from './Components/NavBar'
import SideBar from './partials/SideBar';

// import Auth from './components/Auth';
// import Register from './Components/Register';
// import NavigationBar from './partials/Nav';

function App() {
    return (
        <div className="d-flex vh-100">
            <SideBar />
            <div style={{flex: 1}}>
                <NavBar/>
                <div className='container'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default App;
