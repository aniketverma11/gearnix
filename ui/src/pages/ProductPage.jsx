import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/products/${slug}`)
            .then(r => {
                if (!r.ok) throw new Error('Not found');
                return r.json();
            })
            .then(data => { setProduct(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [slug]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        e.target.reset();
    };

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

    if (!product) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2>Product not found</h2>
                <p style={{ color: '#777', marginTop: '10px' }}>The product you're looking for doesn't exist.</p>
                <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Go Home</Link>
            </div>
        );
    }

    return (
        <>
            {/* Product Banner */}
            <section className="product-banner">
                <div className="banner-bg" style={{
                    background: product.banner_image
                        ? `url('${product.banner_image}') center/cover`
                        : 'linear-gradient(135deg, #e8edf2 0%, #f0f4f8 30%, #dce3ea 60%, #e8edf2 100%)'
                }}></div>
                <div className="product-label">{product.name}</div>
            </section>

            {/* Product Description */}
            <section className="product-description">
                <div className="container">
                    <h2>{product.name}</h2>
                    {product.description.split('\n').filter(p => p.trim()).map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="product-quote-section">
                <div className="container">
                    <div className="quote-info">
                        <h3>Please Contact Us For Further Enquires.</h3>
                        <p>Wholesale supplier which offers quality and reliable solutions</p>
                        <ul className="quote-features">
                            <li><i className="fas fa-cog"></i> Complete solution</li>
                            <li><i className="fas fa-cog"></i> Easy to Customize</li>
                            <li><i className="fas fa-cog"></i> Premium Quality Products</li>
                            <li><i className="fas fa-cog"></i> Powerful Performance</li>
                        </ul>
                    </div>
                    <div className="quote-form">
                        <h4>It would be great to hear from you.</h4>
                        {submitted && (
                            <div style={{ padding: '10px', background: 'rgba(212,237,218,0.3)', color: '#d4edda', borderRadius: '4px', marginBottom: '15px' }}>
                                Thank you! We'll contact you shortly.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input type="text" className="form-field" placeholder="Name*" required />
                                <input type="email" className="form-field" placeholder="Email*" required />
                                <input type="tel" className="form-field" placeholder="Phone*" required />
                            </div>
                            <textarea className="form-field" placeholder="Message*" required></textarea>
                            <div style={{ marginTop: '15px' }}>
                                <button type="submit" className="btn-primary"><i className="fas fa-paper-plane"></i> Send message</button>
                            </div>
                        </form>
                    </div>
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

export default ProductPage;
