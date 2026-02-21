import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        e.target.reset();
    };

    return (
        <>
            {/* Product Banner */}
            <section className="product-banner">
                <div className="banner-bg" style={{ background: 'linear-gradient(135deg, #e8edf2 0%, #f0f4f8 30%, #dce3ea 60%, #e8edf2 100%)' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '55%', transform: 'translate(-50%,-50%)', width: '400px', height: '300px', background: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80') center/contain no-repeat", opacity: 0.6 }}></div>
                </div>
                <div className="product-label">CAT6 CABLE</div>
            </section>

            {/* Product Description */}
            <section className="product-description">
                <div className="container">
                    <h2>CAT6 CABLE</h2>
                    <p>In Dubai, UAE, Gearnix Trading is the best Cat6 Cable Dealer. A 4 twisted pair sheathed copper wire cable called category 6—also referred to as a network, LAN, or Ethernet Data Cable—can sustain data transfer rates of up to 1 gigabit per second (1,000 megabits). Large files can be transferred quickly across an office network because of this increased bandwidth. A Cat6 cable is typically used to link a computer to a hub, router, or switch so that files can be shared across a network or to access the Internet. It can also be used for incoming and outgoing LAN connections on patch panels, as well as for connecting PCs to a group of other devices like printers or scanners.</p>
                    <p>Twisted pair cable is the industry standard for Cat6 cable, which helps to decrease crosstalk and lower noise from electrical interference. Shielded twisted pair (STP) and unshielded twisted pair are the two varieties of twisted pair cable that are available (UTP). Cat6 cable, PVC cable, LSZH cables, outdoor cables, FTP cables, STP cables, SFTP cables, and other types of networking cables are available. We also have Belden and Paige brand audio, communication, speaker, and other cables. We offer network cables that are STC approved, UV listed, and TRA approved in both our premium and budget-friendly brands.</p>
                    <p>Twisted pair cable is the industry standard for Cat6 cable, which helps to decrease crosstalk and lower noise from electrical interference. Shielded twisted pair (STP) and unshielded twisted pair are the two varieties of twisted pair cable that are available (UTP). Cat6 cable, PVC cable, LSZH cables, outdoor cables, FTP cables, STP cables, SFTP cables, and other types of networking cables are available. We also have Belden and Paige brand audio, communication, speaker, and other cables. We offer network cables that are STC approved, UV listed, and TRA approved in both our premium and budget-friendly brands.</p>
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
