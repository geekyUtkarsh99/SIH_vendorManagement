//import useState hook to create menu collapse state
import React, { useState } from "react";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';
import * as VscIcons from 'react-icons/vsc';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,

    SidebarContent
} from "react-pro-sidebar";


import {
    MdClose,
    MdViewList
} from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext" onClick={menuIconClick}>
                            <p>{menuCollapse ? <MdViewList className="w-100" /> : "svas"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? "" : <MdClose />}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<RiIcons.RiUserSearchLine />}>
                                <Link to="/">Vendor Lookup</Link>
                            </MenuItem>
                            <MenuItem icon={<IoIcons.IoMdHelpCircleOutline />}>
                                <Link to="/page2">Requests</Link>
                            </MenuItem>
                            <MenuItem icon={<GoIcons.GoLocation />}>
                                <Link to="/page3">Area Allocation</Link>
                            </MenuItem>
                            <MenuItem icon={<VscIcons.VscFeedback />}>
                                <Link to="/page4">Feedback & Complaints</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;
