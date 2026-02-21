import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const productItems = [
    'Cat6 Cable', 'Cat6a Cable', 'Cat7 Cable', 'Cat8 Cable',
    'Fiber Optic Cable', 'Audio Cable', 'Speaker Cable', 'Laptops',
    'Desktops', 'Network Cabinets', 'PDU', 'Routers',
    'Network Switches', 'IP Phones', 'IP PBX', 'Media Convertors',
];

const brandItems = [
    'Cisco', 'HP', 'Dell', 'Fortinet', 'Hikvision', 'APC',
    'Aruba', 'Belden', 'Mikrotik', 'Ubiquiti', 'Synology',
    'Qnap', 'Yealink', 'TP-Link', 'D-Link', 'SonicWALL',
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    const handleDropdownToggle = (name, e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setOpenDropdown(openDropdown === name ? null : name);
        }
    };

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    <span className="it">IT</span><span className="world">WORLD</span>
                </Link>
                <button className="menu-toggle" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`nav-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}></div>
                <nav className={`nav${menuOpen ? ' open' : ''}`}>
                    <ul className="nav-list">
                        <li className={isActive('/') ? 'active' : ''}><Link to="/">Home</Link></li>
                        <li className={isActive('/about') ? 'active' : ''}><Link to="/about">About Us</Link></li>
                        <li className={isActive('/product') ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleDropdownToggle('products', e)}>
                                Products <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className={`dropdown${openDropdown === 'products' ? ' open' : ''}`}>
                                {productItems.map(item => (
                                    <li key={item}><Link to="/product">{item}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li className={isActive('/brand') ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleDropdownToggle('brands', e)}>
                                Brands <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className={`dropdown${openDropdown === 'brands' ? ' open' : ''}`}>
                                {brandItems.map(item => (
                                    <li key={item}><Link to="/brand">{item}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li className={isActive('/contact') ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
