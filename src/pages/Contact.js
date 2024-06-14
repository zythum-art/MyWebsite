import React from 'react';
import './Contact.css';
import gmailIcon from './Gmail_icon.png';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can reach out to me via email:</p>
      <div className="contact-info">
        <img src={gmailIcon} alt="Gmail" />
        <a href="mailto:zyt1726660473@gmail.com">zyt1726660473@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;
