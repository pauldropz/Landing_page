import React from "react";
import "./Navbar.css"



export function Navbar () {
    return(
        <>
            <ul className="Nav-bar">
                <li className="Lizt">Product</li>
                <li className="Lizt">Use Cases</li>
                <li className="Lizt">Developers</li>
                <li className="Lizt">Pricing</li>
                <li className="Lizt">Resources</li>
                <li className="Lizt">Company</li><br/>
            </ul>
        </>
    );
}