import React from 'react';
import Hero from '../components/hero/Hero.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Services from '../components/services/Services.jsx';
import Testimonial from '../components/testimonial/Testimonial.jsx';
import Contact from '../components/contact/Contact.jsx';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Portfolio></Portfolio>
            <Services></Services>
            <Testimonial></Testimonial>
          <Contact></Contact>
        </div>
    );
};

export default Home;