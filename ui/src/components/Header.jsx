import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Fetch nav items from API
    useEffect(() => {
        fetch('/api/products').then(r => r.json()).then(setProducts).catch(() => { });
        fetch('/api/brands').then(r => r.json()).then(setBrands).catch(() => { });
    }, []);

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
