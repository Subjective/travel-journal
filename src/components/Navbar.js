import React from "react";
import globe_icon from "../images/globe-icon.svg";

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <img src={globe_icon} className="nav--globe"/>
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    );
}