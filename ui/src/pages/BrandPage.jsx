import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function BrandPage() {
    const { slug } = useParams();
    const [brand, setBrand] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/brands/${slug}`)
            .then(r => {
                if (!r.ok) throw new Error('Not found');
                return r.json();
            })
            .then(data => { setBrand(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
                <div style={{ textAlign: 'center', color: '#777' }}>
                    <i className="fas fa-spinner fa-spin" style={{ fontSize: '32px', marginBottom: '15px', display: 'block' }}></i>
                    Loading...
                </div>
            </div>
        );
    }

    if (!brand) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2>Brand not found</h2>
                <p style={{ color: '#777', marginTop: '10px' }}>The brand you're looking for doesn't exist.</p>
                <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Go Home</Link>
            </div>
        );
    }

    return (
        <>
            {/* Brand Banner */}
            <section className="brand-banner">
                <div className="banner-bg" style={{
                    background: brand.banner_image
                        ? `url('${brand.banner_image}') center/cover`
                        : 'linear-gradient(135deg, rgba(0,174,239,0.1) 0%, rgba(200,230,250,0.3) 50%, rgba(0,174,239,0.1) 100%)'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=60') center/cover", opacity: 0.15 }}></div>
                </div>
                <div className="banner-content">
                    {brand.logo_url ? (
                        <img src={brand.logo_url} alt={brand.name} style={{ maxHeight: '60px', marginBottom: '15px' }} />
                    ) : (
                        <h1 style={{ color: 'var(--primary)', fontSize: '42px', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{brand.name}</h1>
                    )}
                </div>
            </section>

            {/* Brand Content */}
            <section className="brand-content-section">
                <div className="container">
                    {/* Intro */}
                    {(brand.intro_title || brand.intro_text) && (
                        <div className="brand-content-block">
                            {brand.intro_title && <h2>{brand.intro_title}</h2>}
                            {brand.intro_text && <p>{brand.intro_text}</p>}
                        </div>
                    )}

                    {/* Sections */}
                    {brand.sections.map((section) => {
                        if (section.layout === 'full') {
                            return (
                                <div key={section.id} className="brand-content-block">
                                    <h2>{section.title}</h2>
                                    <p>{section.text}</p>
                                </div>
                            );
                        }
                        return (
                            <div key={section.id} className={`brand-content-row${section.layout === 'right' ? ' reverse' : ''}`}>
                                {section.image_url && (
                                    <div className="brand-img">
                                        <img src={section.image_url} alt={section.title} />
                                    </div>
                                )}
                                <div className="brand-text">
                                    <h3>{section.title}</h3>
                                    <p>{section.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Bar */}
            <section className="cta-bar">
                <div className="container">
                    <div>
                        <h3>Email us with any questions or enquiries</h3>
                        <p>We would be happy to answer your questions!</p>
                    </div>
                    <Link to="/contact" className="btn-outline">CONTACT US</Link>
                </div>
            </section>
        </>
    );
}

export default BrandPage;
