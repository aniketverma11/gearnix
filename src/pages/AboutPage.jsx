import React from 'react';

function AboutPage() {
    return (
        <>
            {/* Page Banner */}
            <section className="page-banner">
                <div className="banner-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}></div>
                <div className="banner-overlay"></div>
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </section>

            {/* About Content */}
            <section className="about-content">
                <div className="container">
                    <div className="about-main">
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="About Gearnix Trading" />
                        </div>
                        <div className="about-text">
                            <h2>About Gearnix Trading LLC</h2>
                            <p>Gearnix Trading LLC is a UAE Based Wholesale Supplier which offers quality and reliable solutions in the areas of Computer Hardware, CCTV Systems, Networking Devices, Security Devices, IP Telephony, etc. We are the Trusted partner of all major brands like Cisco, Fortinet, SonicWALL, Ubiquiti, Aruba, Linksys, Dlink, TP Link, Belden, ExTell USA, Schneider, 3M/Corning, Panduit, Optema, Norden, Dconnect, Molex, Kuwes, Techlogiks Canada, Toten, APC, Eaton etc. We offer the widest range of premium wires and cables for various residential, commercial, industrial and infrastructure purposes.</p>
                            <div className="about-features">
                                <div className="about-feature-item"><i className="fas fa-cog"></i><span>Complete solution</span></div>
                                <div className="about-feature-item"><i className="fas fa-cog"></i><span>Fair Pricing</span></div>
                                <div className="about-feature-item"><i className="fas fa-cog"></i><span>Ensure 100% client support</span></div>
                                <div className="about-feature-item"><i className="fas fa-cog"></i><span>Premium Quality Products</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-extended">
                        <p>Gearnix Trading LLC understands the challenges faced by professionals and seek to provide new technologies with the utmost reliability. We are committed to continuously enhance, improve and exceed expectations. Regardless of your type of business, we have a solution tailored just for you which help in expanding your businesses. Our experienced team of experts strives to service every inquiry, quote, and order quickly and efficiently, meeting and often exceeding customers' expectations. Please don't hesitate to contact us for your quotation request and technical support questions. We can assure you the best shopping experience.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutPage;
