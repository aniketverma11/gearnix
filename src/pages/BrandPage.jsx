import React from 'react';
import { Link } from 'react-router-dom';

function BrandPage() {
    return (
        <>
            {/* Brand Banner */}
            <section className="brand-banner">
                <div className="banner-bg" style={{ background: 'linear-gradient(135deg, rgba(0,174,239,0.1) 0%, rgba(200,230,250,0.3) 50%, rgba(0,174,239,0.1) 100%)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=60') center/cover", opacity: 0.15 }}></div>
                </div>
                <div className="banner-content">
                    <svg style={{ height: '60px', marginBottom: '15px' }} viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg">
                        <text x="35" y="22" fontFamily="Arial" fontSize="12" fill="#049fd9" letterSpacing="3">ılılı.</text>
                        <text x="22" y="52" fontFamily="Arial" fontWeight="bold" fontSize="34" fill="#049fd9">CISCO</text>
                    </svg>
                </div>
            </section>

            {/* Brand Content */}
            <section className="brand-content-section">
                <div className="container">
                    {/* Intro */}
                    <div className="brand-content-block">
                        <h2>Cisco Dealer in Dubai, UAE</h2>
                        <p>As a trusted Cisco distributor in Dubai, IT World Trading connects businesses across the UAE with genuine Cisco networking solutions that power today's digital infrastructure. Whether you're building a new data center, upgrading your network security, or expanding your communication systems, we provide a comprehensive range of Cisco products including switches, routers, firewalls, wireless access points, and collaboration tools delivered directly to your doorstep. Our experienced team understands the connectivity challenges faced by organizations of all sizes, from startups to large enterprises, and works closely with each client to ensure they receive the right Cisco solutions for their needs. With years of experience in the UAE market, we've established strong supplier relationships that enable us to offer competitive pricing and consistent availability of Cisco's latest technologies. Based in Dubai, IT World Trading proudly serves customers throughout the Emirates, helping them build networks that are secure, scalable, and ready for the future.</p>
                    </div>

                    {/* Switches */}
                    <div className="brand-content-row">
                        <div className="brand-img">
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80" alt="Cisco Switches" />
                        </div>
                        <div className="brand-text">
                            <h3>Cisco Switches Distributor in Dubai, UAE</h3>
                            <p>When your business network demands reliability and performance, choosing the right switching infrastructure becomes critical to your operations. IT World Trading brings Cisco's complete portfolio of networking switches to organizations across Dubai and the UAE, from compact models for small offices to enterprise-grade data center solutions. We understand that every business has unique connectivity requirements whether you're scaling a growing company, upgrading legacy systems, or building a new network from the ground up. Our team works closely with clients to identify the exact Cisco switch models that match their bandwidth needs, security requirements, and budget considerations. Located in Dubai, we serve businesses throughout the Emirates who rely on Cisco's proven technology to keep their networks running smoothly.</p>
                        </div>
                    </div>

                    {/* Access Points */}
                    <div className="brand-content-row reverse">
                        <div className="brand-img">
                            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80" alt="Cisco Access Points" />
                        </div>
                        <div className="brand-text">
                            <h3>Cisco Dealer in Dubai, UAE</h3>
                            <p>When your business needs dependable wireless connectivity across offices, warehouses, or retail spaces, choosing the right access points makes all the difference. At IT World Trading, we help organizations throughout Dubai and the UAE get their hands on genuine Cisco access points that match their specific networking requirements. Whether you're expanding an existing network or building one from scratch, we understand that downtime isn't an option and that getting the right equipment quickly matters to your operations. Our team knows the Cisco product range inside out, from compact models suitable for small offices to high-performance units designed for demanding environments with hundreds of concurrent users. We work directly with businesses across Dubai to ensure they receive authentic Cisco hardware along with practical guidance on selecting access points that fit their coverage needs, user capacity, and budget.</p>
                        </div>
                    </div>

                    {/* Firewalls */}
                    <div className="brand-content-block">
                        <h2>Cisco Firewalls Supplier in Dubai, UAE</h2>
                        <p>When it comes to protecting your business network in Dubai, Cisco Firewalls stand as one of the most reliable solutions available. At IT World Trading, we understand that every organization faces unique security challenges, whether you're managing a small office network or overseeing multiple locations across the UAE. Our team works directly with businesses throughout Dubai to provide the right Cisco Firewall models that match your specific requirements and budget. From the compact ASA series for growing companies to the advanced Firepower threat defense systems for enterprises dealing with complex security demands, we help you find equipment that actually fits your needs. We've seen firsthand how the right firewall can mean the difference between smooth operations and costly downtime, which is why we take the time to understand what you're dealing with before recommending any solution. Whether you're upgrading aging equipment, expanding your infrastructure, or building security from the ground up, our knowledge of Cisco's firewall range means you get practical guidance based on real world deployments across Dubai's business landscape.</p>
                    </div>

                    {/* Routers */}
                    <div className="brand-content-row">
                        <div className="brand-img">
                            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80" alt="Cisco Routers" />
                        </div>
                        <div className="brand-text">
                            <h3>Cisco Routers in Dubai, UAE</h3>
                            <p>When your business needs reliable networking infrastructure, choosing the right partner makes all the difference. IT World Trading serves as a trusted Cisco Supplier in Dubai, UAE, connecting enterprises across the region with routing solutions that keep their operations running smoothly. Whether you're scaling your network to accommodate growth, upgrading legacy systems, or building connectivity from the ground up, we understand the challenges businesses face in today's digital landscape. Our team works directly with companies throughout Dubai and the wider UAE to source the specific Cisco router models that match their requirements from small branch offices needing secure connectivity to large enterprises managing complex multi-site networks. We've built our reputation on straightforward communication, transparent pricing, and actually understanding what our clients need rather than pushing unnecessary equipment.</p>
                        </div>
                    </div>

                    {/* IP Phones */}
                    <div className="brand-content-row reverse">
                        <div className="brand-img">
                            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&q=80" alt="Cisco IP Phones" />
                        </div>
                        <div className="brand-text">
                            <h3>Cisco IP Phones Distributor in Dubai, UAE</h3>
                            <p>When businesses across Dubai and the UAE need reliable communication systems, they turn to IT World Trading for Cisco IP phones that keep their teams connected. We understand that every missed call or dropped connection can mean lost opportunities, which is why we focus on helping companies find the right Cisco phones for their specific needs. Whether you're setting up a small office in Business Bay or expanding your enterprise across multiple Emirates, our team takes time to understand your communication requirements and budget constraints. From the compact Cisco 6800 Series perfect for desk workers to the advanced 8800 Series designed for executives and managers, we guide you through selecting phones that match how your people actually work.</p>
                        </div>
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

export default BrandPage;
