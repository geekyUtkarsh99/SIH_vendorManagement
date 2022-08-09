import { useState } from "react";
import { Image, Nav } from "react-bootstrap";
import { Menu, Search, X, FileText, Map, User } from "react-feather";
import { NavLink } from "react-router-dom";
import logo from "../images/svas_dark.png"

function SideBar() {
    const [open, setOpen] = useState(true)
    return (
        <div style={{ width: open ? "280px" : "80px" }} className={"d-flex flex-column flex-shrink-0 bg-white h-100 border border-right collapsing"}>
            <div className="d-flex justify-content-between">
                {open ?
                    <>
                        <div className="p-3"><Image src={logo} height={12} /></div>
                        <div className="p-3" onClick={() => setOpen(!open)}>
                            <X />
                        </div>
                    </> : <div className="p-3 w-100 text-center" onClick={() => setOpen(!open)}><Menu /></div>}
            </div>
            <Nav variant="pills" className="flex-column mb-auto">
                <Nav.Item>
                    <NavLink to="vendor" style={{ height: "40px" }} className={({ isActive }) => `${isActive ? "active" : ""} py-2 overflow-hidden nav-link rounded-0 ${!open ? "text-center" : ""}`}><Search className={`mb-1 ${open ? "me-2" : ""}`} size={18} /> {open ? "Vendor Lookup" : ""}</NavLink>
                    <NavLink to="requests" style={{ height: "40px" }} className={({ isActive }) => `${isActive ? "active" : ""} py-2 overflow-hidden nav-link rounded-0 ${!open ? "text-center" : ""}`}><FileText className={`mb-1 ${open ? "me-2" : ""}`} size={18} /> {open ? "Requests" : ""}</NavLink>
                    <NavLink to="areas" style={{ height: "40px" }} className={({ isActive }) => `${isActive ? "active" : ""} py-2 overflow-hidden nav-link rounded-0 ${!open ? "text-center" : ""}`}><Map className={`mb-1 ${open ? "me-2" : ""}`} size={18} /> {open ? "Area Allocation" : ""}</NavLink>
                    <NavLink to="feedback" style={{ height: "40px" }} className={({ isActive }) => `${isActive ? "active" : ""} py-2 overflow-hidden nav-link rounded-0 ${!open ? "text-center" : ""}`}><User className={`mb-1 ${open ? "me-2" : ""}`} size={18} /> {open ? "Feedback and Complaints" : ""}</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SideBar;
