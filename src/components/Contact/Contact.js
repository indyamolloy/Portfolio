import React from "react";
import emailjs from "emailjs-com";
import css from "./contact.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className={css.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={css.wave}
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
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

          <button className={css.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={css.followContainer}>
        <button className={css.followButton} type="button">
          Connect on LinkedIn
        </button>

        <button className={css.followButton} type="button">
          Follow on Github
        </button>
      </div>
      <butto className={css.hideButton}>hide</butto>
    </div>
  );
}

export default Contact;
