import React from 'react';
import Hero from '../components/hero/Hero.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Services from '../components/services/Services.jsx';
import Testimonial from '../components/testimonial/Testimonial.jsx';
import Contact from '../components/contact/Contact.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="testimonials">
                <Testimonial />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
