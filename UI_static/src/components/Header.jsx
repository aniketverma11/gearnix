import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

    const products = [
        { name: 'Cat6 Cable', slug: 'cat6-cable' },
        { name: 'Cat6a Cable', slug: 'cat6a-cable' },
        { name: 'Cat7 Cable', slug: 'cat7-cable' },
        { name: 'Cat8 Cable', slug: 'cat8-cable' },
        { name: 'Fiber Optic Cable', slug: 'fiber-optic-cable' },
        { name: 'Audio Cable', slug: 'audio-cable' },
        { name: 'Speaker Cable', slug: 'speaker-cable' },
        { name: 'Laptops', slug: 'laptops' },
        { name: 'Desktops', slug: 'desktops' },
        { name: 'Network Cabinets', slug: 'network-cabinets' },
        { name: 'PDU', slug: 'pdu' },
        { name: 'Routers', slug: 'routers' },
        { name: 'Network Switches', slug: 'network-switches' },
        { name: 'IP Phones', slug: 'ip-phones' },
        { name: 'IP PBX', slug: 'ip-pbx' },
        { name: 'Media Convertors', slug: 'media-convertors' },
    ];

    const brands = [
        { name: 'Cisco', slug: 'cisco' },
        { name: 'HP', slug: 'hp' },
        { name: 'Dell', slug: 'dell' },
        { name: 'Fortinet', slug: 'fortinet' },
        { name: 'Hikvision', slug: 'hikvision' },
        { name: 'APC', slug: 'apc' },
        { name: 'Aruba', slug: 'aruba' },
        { name: 'Belden', slug: 'belden' },
        { name: 'Mikrotik', slug: 'mikrotik' },
        { name: 'Ubiquiti', slug: 'ubiquiti' },
        { name: 'Synology', slug: 'synology' },
        { name: 'Qnap', slug: 'qnap' },
        { name: 'Yealink', slug: 'yealink' },
        { name: 'TP-Link', slug: 'tp-link' },
        { name: 'D-Link', slug: 'd-link' },
        { name: 'SonicWALL', slug: 'sonicwall' },
    ];

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const isActive = (path) => location.pathname.startsWith(path);

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
                    <span className="gearnix-logo">Gearnix</span>
                </Link>
                <button className="menu-toggle" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`nav-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}></div>
                <nav className={`nav${menuOpen ? ' open' : ''}`}>
                    <ul className="nav-list">
                        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Us</Link></li>
                        <li className={isActive('/product') ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleDropdownToggle('products', e)}>
                                Products <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className={`dropdown${openDropdown === 'products' ? ' open' : ''}`}>
                                {products.map(item => (
                                    <li key={item.slug}><Link to={`/product/${item.slug}`}>{item.name}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li className={isActive('/brand') ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleDropdownToggle('brands', e)}>
                                Brands <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className={`dropdown${openDropdown === 'brands' ? ' open' : ''}`}>
                                {brands.map(item => (
                                    <li key={item.slug}><Link to={`/brand/${item.slug}`}>{item.name}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
