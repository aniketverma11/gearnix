import React from 'react';

function TopBar() {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-left">
                    <a href="tel:+97145538728"><i className="fas fa-phone-alt"></i> +971 4553 8728</a>
                    <a href="https://wa.me/971526547058"><i className="fab fa-whatsapp"></i> +971 52 654 7058</a>
                    <a href="mailto:info@itworlduae.com"><i className="fas fa-envelope"></i> info@itworlduae.com</a>
                </div>
                <div className="top-bar-right">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
