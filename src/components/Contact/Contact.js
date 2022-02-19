import React from "react";
import emailjs from "emailjs-com";
import css from "./contact.module.css";

function Contact() {
  return (
    <div id="about" className={css.container}>
      <h2 className={css.heading}>Contact</h2>
      <div className={css.formContainer}>
        <form method="POST" name="contactform" className="contactForm">
          <input type="hidden" name="form-name" value="contactForm" />

          <input type="text" name="name" placeholder="Enter your name" />

          <input type="email" name="email" placeholder="Enter your email" />

          <textarea name="message" placeholder="Messaage"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
