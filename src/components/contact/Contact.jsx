import { React, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    
    emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_KEY,
      form.current,
      import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        () => {
          alert("Successfully sent message!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <div className="contact-section">
      <h3 className="contact-heading">Quick Contact</h3>
      <div className="quick-contact">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="form-label" htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" placeholder="Name" style={{ height: '50px', Width: '80px' }} required />

          <label className="form-label" htmlFor="email">E-mail</label>
          <input type="email" id="email" name="user_email" placeholder="E-mail" style={{ height: '50px' }} required />

          <label className="form-label" htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message" name="message" rows="10" required></textarea>

          <input type="submit" className="submit-btn" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
