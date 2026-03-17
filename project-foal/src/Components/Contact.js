import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>

        <div className="form-wrapper">
          <form className="glass-form">
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message..." rows="5" required></textarea>
            </div>
            <button type="submit" className="glow-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;