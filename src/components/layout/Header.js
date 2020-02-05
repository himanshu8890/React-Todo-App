import React from 'react';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header style={headerStyle}>
            <h3>{appTitle}</h3>
            <center>
                <Link style={links}
                    to="/">Home</Link>
                |
                <Link style={links}
                    to="/about">About Us</Link>
            </center>


        </header>
    )
}
const appTitle = "Todo App";
const headerStyle = {
    background: "#000",
    color: "#fff",
    padding: "5px 5px"
}
const links = {
    color: "#fff",
    paddingLeft: "10 %"


}

export default Header;
