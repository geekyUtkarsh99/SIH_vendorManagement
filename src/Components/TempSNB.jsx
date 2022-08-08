import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import * as GrIcons from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import React from 'react'
import './TempSNB.css'

export default function TempSNB() {
    
  return (
    <div>
      <SideNav id="sdb">
                <Toggle />
                <SideNav.Nav defaultSelected="/licence">
                    <NavItem eventKey="licence" >
                        <NavIcon>
                            <Link to="/Licences" className='lk'>{<GrIcons.GrLicense/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="/Licences" className='lk1'>Licences</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="certifications" >
                        <NavIcon>
                            <Link to="/certification" className='lk'>{<GrIcons.GrCertificate/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="/certification" className='lk1'>Certifications</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="schemes" >
                        <NavIcon>
                            <Link to="/schemes" className='lk'>{<GrIcons.GrProjects/>}</Link> 
                        </NavIcon>
                        <NavText >
                            <Link to="/schemes" className='lk1'>Schemes</Link> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="feedback" >
                        <NavIcon>
                            <Link to="/feedback" className='lk'>{<GrIcons.GrLike/>}</Link> 
                        </NavIcon>
                        <NavText>
                            <Link to="/feedback" className='lk1'>Feedback</Link> 
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    </div>
  )
}
