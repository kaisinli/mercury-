import React, { Component } from 'react';
import { Link } from "react-router";
import Login from './Login'
import WhoAmI from './WhoAmI'

// Ensure that we have (almost) always have a user ID, by creating
// an anonymous user if nobody is signed in.

export default function Navbar({ handleClick }) {
    return (
        <nav className="navbar navbar-inverse   navbar-fixed-top topnav " role="navigation">
            <div className="container topnav">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link id="home" to="/home">Home</Link></li>
                        <li><Link id="link" to="/link">Link Accounts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}