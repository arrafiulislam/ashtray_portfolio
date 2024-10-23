import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      text: " The Team at Ashtray was so supportive throughout our wedding. They really took their time to understand us as a couple and how we wanted to capture the moment",
      name: "",
      title: "Rakin & Raidah"
    },
    {
      text: "The Team at Ashtray was so supportive throughout our wedding. They really took their time to understand us as a couple and how we wanted to capture the moment",
      name: "",
      title: "Rakin & Raidah"
    },
    {
      text: "The Team at Ashtray was so supportive throughout our wedding. They really took their time to understand us as a couple and how we wanted to capture the moment",
      name: "",
      title: "Rakin & Raidah"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [fadeIn, setFadeIn] = useState(true);

  const handleNext = () => {
    setFadeIn(false); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); 
      setFadeIn(true); 
    }, 300); 
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length); 
      setFadeIn(true); 
    }, 300);
  };

  const { text, name, title } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay">
        <div className="testimonial-header">
          <h3 className="testimonial-heading">Testimonials</h3>
          <hr class="styled-hr" />

        </div>
        <div className={`testimonial-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <p className="testimonial-text">"{text}"</p>
          <p className="client-title">{title}</p>
        </div>
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
