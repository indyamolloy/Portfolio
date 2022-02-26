import React from "react";
import css from "./contact.module.css";

function Contact() {
  return (
    <div id="contact" className={css.container}>
      <h2 className={css.heading}>Contact</h2>
      {/* <div className={css.followContainer}>
        <button className={css.followButton} type="button">
          Connect on LinkedIn
        </button>

        <button className={css.followButton} type="button">
          Follow on Github
        </button>
      </div> */}
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

          <button className={css.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
