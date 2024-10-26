import React from 'react';
import '../footer/Footer.css';


const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <p className="small mb-0 text-light text-center footer-text">
                        &copy; {currentYear} || Copyright : Ashley Photography || 
                       
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
