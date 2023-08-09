import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                    <ReorderIcon /> 
                </button>
            </div>
            <div className="links">
                <NavLink to="/" activeClassName="active"> Home </NavLink>
                <NavLink to="/projects" activeClassName="active"> Projects </NavLink>
                <NavLink to="/experience" activeClassName="active"> Experience </NavLink>
                <NavLink to="/education" activeClassName="active"> Education </NavLink>
            </div>
        </div>
    );
}

export default Navbar