import React from "react";
import { NavLink as NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="Home.js"><span className="button"><NavLink to="/">Home</NavLink></span></a></li>
                    <li><a href="network.js"><span className="button"><NavLink to='/network'>Network</NavLink></span></a></li>
                    <li><a href="Analysis.html"><span className="button"><NavLink to='/Analysis'>Analysis</NavLink></span></a></li>
                    <li><a href="method.js"><span className="button"><NavLink to='/method'>Methods</NavLink></span></a></li>
                </ul>
                <div className="quotes">
                    <p id="line1"></p>
                </div>
            </nav>
        </>
    );
}

