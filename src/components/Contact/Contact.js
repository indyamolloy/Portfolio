import React from "react";
import emailjs from "emailjs-com";
import css from "./contact.module.css";

function Contact() {
  return (
    <div id="contact" className={css.container}>
      <h2 className={css.heading}>Contact</h2>
      <div className={css.formContainer}>
        <form method="POST" name="contactform" className="contactForm">
          <input type="hidden" name="form-name" value="contactForm" />
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <label className={css.label}>Email</label>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <label className={css.label}>Message</label>
          <textarea
            className={css.textarea}
            name="message"
            placeholder="Message"
            rows="6"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
