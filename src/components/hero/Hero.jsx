import React, { useEffect, useState } from 'react';
import './Hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/logo.png'

const typingStrings = ['a Photographer', 'an Artist', 'a Creative Mind'];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [typedString, setTypedString] = useState('');

    useEffect(() => {
        const typingEffect = setInterval(() => {
            setTypedString((prev) => {
                if (prev.length < typingStrings[index].length) {
                    return prev + typingStrings[index].charAt(prev.length);
                } else {
                    clearInterval(typingEffect);
                    setTimeout(() => {
                        setIndex((prevIndex) => (prevIndex + 1) % typingStrings.length);
                        setTypedString('');
                    }, 1000);
                }
                return prev;
            });
        }, 100);

        return () => clearInterval(typingEffect);
    }, [index]);

    return (
        <section className="hero-section">
            <div className="hero-content">
              <img className='hero-logo' src={logo} alt="" />
                <h2>{typedString}</h2>
                <p>we believe in the power of photography to
                    capture life's most precious moments.</p>
                <div className="hero-buttons">
                    <button className="portfolio-btn">View Portfolio <i className="fa fa-arrow-down"></i></button>
                    <button className="contact-btn">Contact Me <i className="fa fa-arrow-down"></i></button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
