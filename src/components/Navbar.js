import React from 'react'
import '../style/Navbar.scss'
import logo from '../images/logo.svg'

function Navbar() {
    return (
        <nav>
            <div className="container1">
                <div className="navbar">
                    <div className="navbar-left">
                        <a className="logo-wrapper" href="#">
                            <img src={logo} alt="Logo not found" />
                        </a>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar