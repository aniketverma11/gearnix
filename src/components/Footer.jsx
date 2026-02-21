import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col footer-about">
                        <Link to="/" className="logo">
                            <span className="it">IT</span><span className="world" style={{ color: '#fff' }}>WORLD</span>
                        </Link>
                        <p>ITWorld Trading LLC is a UAE Based Wholesale Supplier which offers quality and reliable solutions in the areas of Computer Hardware, CCTV Systems, Networking Devices, Security Devices, IP Telephony, etc. We are committed to continuously enhance, improve and exceed expectations.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <div className="footer-contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Dubai, UAE</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+97145538728">+971 4553 8728</a>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fab fa-whatsapp"></i>
                            <a href="https://wa.me/971526547058">+971 52 65 47058</a>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@itworlduae.com">info@itworlduae.com</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>About</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="#">Services</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    &copy; 2026 IT WORLD TRADING LLC. ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
}

export default Footer;
