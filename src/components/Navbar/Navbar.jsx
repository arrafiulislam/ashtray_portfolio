import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom for gallery link
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const menu = [
        { name: 'Portfolio', link: 'portfolio' },
        { name: 'Services', link: 'services' },
        { name: 'Testimonials', link: 'testimonials' },
        { name: 'Contact Us', link: 'contact' },
        { name: 'Gallery', link: '/gallerylayout', external: true }
    ];

    return (
        <div>
            <div className="menu-container">
                <a href="/"> <div className="logo">
                    <img className="nav-logo" src={logo} alt="Logo" />
                    <div className="logo-name">Focult Media</div>
                </div></a>


                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram social-icon"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook social-icon"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter social-icon"></i>
                    </a>
                    <MenuButton open={menuOpen} onClick={handleMenuClick} />
                </div>
            </div>
            <Menu open={menuOpen} closeMenu={closeMenu}>
                {menu.map((item, index) => (
                    item.external ? (
                        <RouterLink
                            key={index}
                            to={item.link}
                            onClick={closeMenu}
                            className="menu-item-link"
                        >
                            <MenuItem delay={`${index * 0.1}s`}>
                                {item.name}
                            </MenuItem>
                        </RouterLink>
                    ) : (
                        <ScrollLink
                            key={index}
                            to={item.link}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={closeMenu}
                            className="menu-item-link"
                        >
                            <MenuItem delay={`${index * 0.1}s`}>
                                {item.name}
                            </MenuItem>
                        </ScrollLink>
                    )
                ))}
            </Menu>
            <div className={`body ${menuOpen ? 'blur' : ''}`}></div>
        </div>
    );
};

const MenuItem = ({ delay, children }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="menu-item-container" style={{ animationDelay: delay }}>
            <div
                className={`menu-item ${hover ? 'hover' : ''}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
            </div>
        </div>
    );
};

const Menu = ({ open, closeMenu, children }) => (
    <div className={`menu ${open ? 'open' : ''}`}>
        <div className="menu-list">
            {children}
            {open && (
                <button className="close-menu-btn" onClick={closeMenu}>
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </button>
            )}
        </div>
    </div>
);

const MenuButton = ({ open, onClick }) => (
    <div className="menu-button" onClick={onClick}>
        <div className={`line line-top ${open ? 'rotate' : ''}`} />
        <div className={`line line-middle ${open ? 'hide' : ''}`} />
        <div className={`line line-bottom ${open ? 'rotate-reverse' : ''}`} />
    </div>
);

export default Navbar;
