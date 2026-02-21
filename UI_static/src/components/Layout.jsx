import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Layout() {
    return (
        <>
            <ScrollToTop />
            <TopBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

export default Layout;
