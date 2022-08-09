import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
// import Auth from './components/Auth';

import NavBar from './Components/NavBar'
import SideBar from './partials/SideBar';

// import Auth from './components/Auth';
// import Register from './components/Register';
// import NavigationBar from './partials/Nav';

function App() {
    return (
        <div className="d-flex vh-100">
            <SideBar />
            <div style={{flex: 1}}>
                <NavBar/>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
