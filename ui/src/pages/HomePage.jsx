import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
        title: 'Exclusive Networking Solutions!',
        text: 'Premium IT infrastructure for your business',
    },
    {
        bg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80',
        title: 'Complete IT Solutions Provider',
        text: 'Trusted wholesale supplier in Dubai, UAE',
    },
    {
        bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
        title: 'Premium Quality Products',
        text: 'Partner of all major brands worldwide',
    },
];

const aboutImages = [
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
];

function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-slider">
            {heroSlides.map((slide, i) => (
                <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
                    <div className="slide-bg" style={{ backgroundImage: `url('${slide.bg}')` }}></div>
                    <div className="slide-overlay"></div>
                    <div className="slide-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.text}</p>
                    </div>
                </div>
            ))}
            <button className="slider-arrow prev" onClick={() => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-arrow next" onClick={() => setCurrent(c => (c + 1) % heroSlides.length)}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </section>
    );
}

function AboutImageSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(c => (c + 1) % aboutImages.length), 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="about-image-slider">
            {aboutImages.map((src, i) => (
                <div key={i} className={`about-slide${i === current ? ' active' : ''}`}>
                    <img src={src} alt="IT Solutions" />
                </div>
            ))}
            <button className="about-slider-btn prev" onClick={() => setCurrent(c => (c - 1 + aboutImages.length) % aboutImages.length)}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="about-slider-btn next" onClick={() => setCurrent(c => (c + 1) % aboutImages.length)}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

function StatsCounter({ target, label, icon }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) {
                setStarted(true);
                let current = 0;
                const increment = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setCount(current);
                }, 30);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, started]);

    return (
        <div className="stat-item" ref={ref}>
            <i className={icon}></i>
            <span className="stat-number">{count}+</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

function HomePage() {
    return (
        <>
            <HeroSlider />

            {/* About Preview */}
            <section className="about-preview">
                <div className="container">
                    <div className="about-preview-text">
                        <p className="label">EXPERIENCED DEALER</p>
                        <h2>Gearnix Trading LLC</h2>
                        <p>Gearnix Trading LLC is a UAE Based Wholesale Supplier which offers quality and reliable solutions in the areas of Computer Hardware, CCTV Systems, Networking Devices, Security Devices, IP Telephony, etc. We are the Trusted partner of all major brands like Cisco, Fortinet, SonicWALL, Ubiquiti, Aruba, Linksys, Dlink, TP Link, Belden, ExTell USA, Schneider, 3M/Corning, Panduit, Optema, Norden, Dconnect, Molex, Kuwes, Techlogiks Canada, Toten, APC, Eaton etc. We offer the widest range of premium wires and cables for various residential, commercial, industrial and infrastructure purposes.</p>
                        <Link to="/about" className="btn-primary">READ MORE</Link>
                    </div>
                    <div className="about-preview-image">
                        <AboutImageSlider />
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section>
                <div className="container">
                    <div className="features-row">
                        <div className="feature-item"><i className="fas fa-desktop"></i><span>Fair Pricing</span></div>
                        <div className="feature-item"><i className="fas fa-award"></i><span>Premium Quality Products</span></div>
                        <div className="feature-item"><i className="fas fa-heart"></i><span>Expert Sales Team</span></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <StatsCounter target={850} label="Projects Delivered" icon="fas fa-project-diagram" />
                        <StatsCounter target={500} label="Happy Clients" icon="fas fa-smile" />
                        <StatsCounter target={50} label="Experienced Staff" icon="fas fa-users" />
                        <StatsCounter target={15} label="Years Experience" icon="fas fa-calendar-check" />
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <p className="subtitle">We're Good At</p>
                        <h2>Our Services</h2>
                        <p>Gearnix Trading LLC is Truly multi-purpose &amp; outstanding performance with Many Features.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon-circle"><i className="fas fa-laptop-code"></i></div>
                            <h3>Unique Experiences</h3>
                            <p>Our experienced team of experts strives to service every inquiry, quote, and often exceeding customers expectations.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-circle"><i className="fas fa-shield-alt"></i></div>
                            <h3>Powerful Performance</h3>
                            <p>We are committed to continuously enhance, improve and exceed expectations.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-circle"><i className="fas fa-tools"></i></div>
                            <h3>Build Quality</h3>
                            <p>We have a solution tailored just for you which help in expanding your businesses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Products */}
            <section className="products-section">
                <div className="container">
                    <h2>Our Products</h2>
                    <p>We Provide Structured and Powerful Products</p>
                    <div className="products-grid">
                        <div className="product-card">
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80" alt="Complete Solution" />
                            <div className="card-overlay"></div>
                            <div className="card-icon"><i className="fas fa-laptop"></i></div>
                            <div className="card-label">Complete solution</div>
                        </div>
                        <div className="product-card">
                            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80" alt="Flexible" />
                            <div className="card-overlay"></div>
                            <div className="card-icon"><i className="fas fa-plus"></i></div>
                            <div className="card-label">Flexible</div>
                        </div>
                        <div className="product-card">
                            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80" alt="Quality Products" />
                            <div className="card-overlay"></div>
                            <div className="card-icon"><i className="fas fa-heart"></i></div>
                            <div className="card-label">Quality Products</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Logo Slider */}
            <section className="brand-slider-section">
                <div className="container">
                    <div className="brand-slider">
                        <svg className="brand-logo" viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#333">AXIS</text>
                            <polygon points="120,10 140,45 100,45" fill="#FFB300" />
                            <text x="10" y="55" fontFamily="Arial" fontSize="8" fill="#666" letterSpacing="3">COMMUNICATIONS</text>
                        </svg>
                        <svg className="brand-logo" viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="38" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#DA291C">F</text>
                            <rect x="22" y="18" width="4" height="26" fill="#DA291C" />
                            <rect x="28" y="18" width="4" height="26" fill="#DA291C" />
                            <text x="35" y="38" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#DA291C">RTINET</text>
                        </svg>
                        <svg className="brand-logo" viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg">
                            <text x="30" y="18" fontFamily="Arial" fontSize="10" fill="#049fd9" letterSpacing="2">ılılı.</text>
                            <text x="22" y="42" fontFamily="Arial" fontWeight="bold" fontSize="26" fill="#049fd9">CISCO</text>
                        </svg>
                        <svg className="brand-logo" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="40" fontFamily="Arial" fontWeight="bold" fontSize="24" fill="#DA291C" fontStyle="italic">HIKVISION</text>
                        </svg>
                        <svg className="brand-logo" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="42" fontFamily="Arial" fontWeight="900" fontSize="32" fill="#DA291C">APC</text>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
