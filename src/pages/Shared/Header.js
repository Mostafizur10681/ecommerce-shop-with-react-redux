import React from 'react';
import { NavLink } from "react-router-dom";
import Cart from '../Login/Cart';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import './Header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white fw-bold mx-auto" to="/">Motor Bike</NavLink>
                    <button className="navbar-toggler bg-white me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 me-2 py-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-white active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                    <Login></Login>
                    <Signup></Signup>
                    <Cart></Cart>
                </div>
            </nav>
        </>
    );
};

export default Header;