import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section contact-overlay">
      <div className=""></div>
      <div className="contact-details">
        <iframe
          title="Uttara Model Town Post Office, Dhaka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.891273592788!2d90.38650227400036!3d23.798583893011257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40f8fdb9815%3A0x19f3fbbc87f7cdb2!2sUttara%20Model%20Town%20Post%20Office!5e0!3m2!1sen!2sbd!4v1698064531217!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <div className="quick-contact">
        <h3 className="contact-heading">Quick Contact</h3>
        <form className="contact-form">
          <label className="form-label" htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" style={{ height: '50px', Width: '80px' }} required />

          <label className="form-label" htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" style={{ height: '50px' }} required />

          <label className="form-label" htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message" rows="10" required></textarea>

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
