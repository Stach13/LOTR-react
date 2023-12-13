import React from "react";
import { NavLink as NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {

    const [Home, setHome] = useState('Home');
    const [Methods, setMethods] = useState('Network')

    const handleClickNetwork = () => {
        setHome('Network')
    }

    const handleClickMethods = () => {
        setMethods('Methods')
    }



    return (
        <>
            <div className="header-img">
                <h1>{ [Home || Methods]}</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="Home.js"><span className="button"><NavLink to="/">Home</NavLink></span></a></li>
                    <li><a href="network.js"><span className="button"><NavLink to='/network' onClick={handleClickNetwork}>Network</NavLink></span></a></li>
                    <li><a href="Analysis.html"><span className="button"><NavLink to='/Analysis'>Analysis</NavLink></span></a></li>
                    <li><a href="method.js"><span className="button"><NavLink to='/method'onClick={handleClickMethods}>Methods</NavLink></span></a></li>
                </ul>
            </nav>
        </>
    );
}

