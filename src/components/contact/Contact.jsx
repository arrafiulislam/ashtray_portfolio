import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-overlay"></div> {/* Overlay for dark background */}
      <div className="contact-details">
        <p>16122 CSW, Victoria 8007 Australia</p>
        <p>+1 650-333-0000 / +1 561-334-0580</p>
        <p><a href="mailto:info@yourcompany.com" className="email-link">info@yourcompany.com</a></p>
        <p>© 2021 Christina. All rights reserved.</p>
        
      </div>

      <div className="quick-contact">
        <h3 className="contact-heading">Quick Contact</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" style={{ height: '50px', Width: '80px', }} required />
          <input type="email" placeholder="E-mail/Phone Number" style={{ height: '50px' }} required />
          <textarea placeholder="Message" rows="10" required></textarea>
          <button type="submit">
            SEND MESSAGE <span>✈</span>
          </button>
        </form>
      </div>

      <div className="social-links">
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://behance.net"><i className="fab fa-behance"></i></a>
        <a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a>
      </div>
    </div>
  );
};

export default Contact;
