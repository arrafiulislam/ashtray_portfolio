import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
 <h3 className="contact-heading">Quick Contact</h3>
      <div className="quick-contact">
       
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

    </div>
  );
};

export default Contact;
