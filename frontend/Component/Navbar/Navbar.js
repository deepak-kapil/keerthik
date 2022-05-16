import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact to="/List">List</NavLink>
                            <NavLink className="nav-link" exact to="/Save">Add User</NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;