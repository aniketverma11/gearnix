import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { brandsData } from '../data';

function BrandPage() {
    const { slug } = useParams();

    // Get brand from hardcoded data or use a fallback
    const brand = brandsData[slug] || {
        name: slug.toUpperCase(),
        intro_title: `${slug.toUpperCase()} Dealer in Dubai, UAE`,
        intro_text: `Gearnix Trading is a trusted supplier of ${slug.toUpperCase()} products in the UAE. We provide a wide range of solutions delivered directly to your doorstep.`,
        sections: []
    };

    return (
        <>
            {/* Brand Banner */}
            <section className="brand-banner">
                <div className="banner-bg" style={{
                    background: 'linear-gradient(135deg, rgba(0,174,239,0.1) 0%, rgba(200,230,250,0.3) 50%, rgba(0,174,239,0.1) 100%)'
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
