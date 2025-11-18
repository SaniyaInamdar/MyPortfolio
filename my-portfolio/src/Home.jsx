import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* HERO SECTION */}
        <section id="hero">
          <div className="hero-container">

            {/* LEFT Side */}
            <div className="hero-text">
              <h1>Hello, I am Saniya Inamdar</h1>

              <p className="intro-text">
                Motivated Java Full Stack Developer with hands-on experience in Core Java, Spring Boot, Hibernate, SQL, and ReactJS.
Seeking an opportunity to contribute to real-world projects, enhance technical expertise, and grow within a professional
software development environment.

              </p>

              <div className="motto">
                <p>"To build innovative solutions and improve lives through technology."</p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-links">

                <a href="https://www.facebook.com/share/157htkqjS3/"
                  target="_blank"
                  className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="https://x.com/SaniyaInamdar11?t=Bh7sAFAUM_X-62ENHAuk4g&s=09"
                  target="_blank"
                  className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="http://www.linkedin.com/in/saniyainamdar"
                  target="_blank"
                  className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a href="https://github.com/SaniyaInamdar"
                  target="_blank"
                  className="social-icon">
                  <i className="fab fa-github"></i>
                </a>

                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=j72mp8k"
                  target="_blank"
                  className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saniyainamdar408@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Saniya,"
                  target="_blank"
                  className="social-icon">
                  <i className="fa fa-envelope"></i>
                </a>

              </div>

              <div className="hero-actions">
                <a href="SANIYA_RESUME.pdf" className="download-btn">
                  Download Resume
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hero-image">
              <img src="myimage.jpg" alt="Developer" />
            </div>

          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
