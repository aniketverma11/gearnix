import React, { useState } from 'react';

function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        e.target.reset();
    };

    return (
        <>
            {/* Page Banner */}
            <section className="page-banner">
                <div className="banner-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')" }}></div>
                <div className="banner-overlay"></div>
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </section>

            {/* Contact Cards */}
            <div className="contact-cards">
                <div className="contact-card">
                    <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                    <h4>ADDRESS</h4>
                    <p>Dubai, UAE</p>
                </div>
                <div className="contact-card">
                    <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
                    <h4>PHONE</h4>
                    <a href="tel:+97145538728">+971 4553 8728</a>
                    <a href="tel:+971526547058">+971 52 654 7058</a>
                </div>
                <div className="contact-card">
                    <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                    <h4>EMAIL</h4>
                    <a href="mailto:info@gearnix.com">info@gearnix.com</a>
                </div>
            </div>

            {/* Contact Form */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="section-title">
                        <p className="subtitle">let's work together</p>
                        <h2>Contact Us</h2>
                        <p>It would be great to hear from you! If you got any questions, please do not hesitate to send us a message. We are looking forward to hearing from you! We reply within <a href="#">24 hours!</a></p>
                    </div>
                    {submitted && (
                        <div style={{ padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '20px', maxWidth: '900px', margin: '0 auto 20px' }}>
                            Thank you for your message! We will get back to you within 24 hours.
                        </div>
                    )}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" className="form-field" placeholder="Name*" required />
                            <input type="email" className="form-field" placeholder="Email*" required />
                            <input type="tel" className="form-field" placeholder="Phone*" required />
                        </div>
                        <textarea className="form-field" placeholder="Message*" required></textarea>
                        <div style={{ marginTop: '15px', textAlign: 'left' }}>
                            <button type="submit" className="btn-primary"><i className="fas fa-paper-plane"></i> SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ContactPage;
