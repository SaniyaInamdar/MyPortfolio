import React, { useState } from "react";
import "./Style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit (Formspree)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xqanekgn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        e.target.reset();
      } else {
        setStatus("Failed to send. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <section className="contact-section">
        <div className="contact-form">

          <h1>Contact Me</h1>

          <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit</button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>
      </section>

      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
