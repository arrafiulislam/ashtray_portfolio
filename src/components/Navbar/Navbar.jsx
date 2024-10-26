import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen); // Toggle the state
    };

    const handleLinkClick = (path) => {
        setMenuOpen(false); // Close the menu when a link is clicked
        navigate(path);  
    };

    const menu = [
        { name: 'About Us', link: '/about' },
        { name: 'Our Products', link: '/products' },
        { name: 'Services', link: '/services' },
        { name: 'FAQ', link: '/faq' },
        { name: 'Contact Us', link: '/contact' }
    ];

    const menuItems = menu.map((item, index) => (
        <MenuItem key={index} delay={`${index * 0.1}s`} onClick={() => handleLinkClick(item.link)}>
            {item.name}
        </MenuItem>
    ));

    return (
        <div>
            <div className="menu-container">
                <div className="logo">
                    <img className='nav-logo' src={logo} alt="Logo" /> 
                    <div className='logo-name'>Ashtray <br />Photography</div>
                </div> 
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
            <Menu open={menuOpen} closeMenu={handleMenuClick}>{menuItems}</Menu> {/* Added closeMenu prop */}
            <div className={`body ${menuOpen ? 'blur' : ''}`}></div>
        </div>
    );
};

const MenuItem = ({ delay, children, onClick }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="menu-item-container" style={{ animationDelay: delay }}>
            <div
                className={`menu-item ${hover ? 'hover' : ''}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onClick}  
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
            
            {open && <button className="close-menu-btn" onClick={closeMenu}><i class="fa-solid fa-xmark fa-lg"></i></button>}
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
