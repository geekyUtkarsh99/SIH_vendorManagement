import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import * as GrIcons from 'react-icons/gr';
import { Link } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import React from 'react'
import './TempSNB.css'

export default function TempSNB() {
    
  return (
    <div>
      <SideNav id="sdb">
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="licence">
                    <NavItem eventKey="licence" >
                        <NavIcon>
                            <Link to="/ " id = "lk1">{<GrIcons.GrLicense/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="/" id = "lk1">Licence</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="certifications" >
                        <NavIcon>
                            <Link to="certification" id = "lk2">{<GrIcons.GrCertificate/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="certification" id = "lk2">Certifications</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="schemes" >
                        <NavIcon>
                            <Link to="schemes" id = "lk3">{<GrIcons.GrProjects/>}</Link> 
                        </NavIcon>
                        <NavText >
                            <Link to="schemes" id = "lk3">Schemes</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="feedback" >
                        <NavIcon>
                            <Link to="feedback" id = "lk4">{<GrIcons.GrLike/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="feedback" id = "lk4">Feedback</Link> 
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    </div>
  )
}
