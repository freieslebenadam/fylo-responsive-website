import React from 'react'
import '../style/Footer.scss'
import logo from '../images/logo.svg'

function Footer() {
    return (
        <div className="container1">
            <div className="footer">
                <img src={logo} alt="Picture not available" />
                <div className="footer-sections">
                    <div className="footer-sections-section1">
                        <div className="footer-item">
                            <p><i className="fas fa-map-marker-alt"></i></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="footer-sections-section2">
                        <div className="footer-item">
                            <p><i className="fas fa-phone-alt"></i></p>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className="footer-item">
                            <p><i className="fas fa-envelope"></i></p>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <div className="footer-sections-section3">
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Jobs</a></li>
                            <li><a>Press</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-sections-section4">
                        <ul>
                            <li><a>Contact Us</a></li>
                            <li><a>Terms</a></li>
                            <li><a>Privacy</a></li>
                        </ul>
                    </div>
                    <div className="footer-sections-section5">
                        <a><i className="fab fa-facebook-f"></i></a>
                        <a><i className="fab fa-twitter"></i></a>
                        <a><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer