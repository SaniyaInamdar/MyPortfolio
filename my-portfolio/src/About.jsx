import React from "react";
import "./Style.css";

const About = () => {
  return (
    <div className="container">

      <section className="about-section">
        <h1>About Me</h1>

        <div className="cards">

          {/* ABOUT ME — CLEAN & PREMIUM */}
          <div className="card pro-card">
            <div className="pro-card-header">
              <h2>About Me</h2>
            </div>

            <div className="pro-card-body clean-about">

              <img src="/myimage.jpg" alt="Saniya Inamdar" className="about-profile" />

              <h3>Saniya Inamdar</h3>
              <p className="role">Full Stack Java Developer</p>

              <p className="short-bio">
                Skilled Full Stack Java Developer with hands-on experience in
                <b> Java, Spring Boot, Hibernate, SQL, JavaScript & ReactJS</b>.  
                Passionate about building clean, scalable and user-friendly applications.
              </p>

            

            </div>
          </div>

          {/* SKILLS */}
          <div className="card">
            <div className="card-header">
              <h2>Skills</h2>
            </div>
            <div className="card-body">
              <ul>
                <li><b>Backend:</b> Core Java, Advanced Java, Spring Boot, Hibernate</li>
                <li><b>Frontend:</b> HTML, CSS, JavaScript, React JS</li>
                <li><b>Database:</b> MySQL</li>
                <li><b>Tools:</b> Git, GitHub, Maven, Postman, VS Code, Eclipse</li>
                <li><b>Other:</b> JSON, API Testing</li>
              </ul>
            </div>
          </div>

          {/* TECHNICAL EXPERTISE */}
          <div className="card">
            <div className="card-header">
              <h2>Technical Expertise</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <span>Java</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "85%" }}></div></div>
                </li>
                <li>
                  <span>Advanced Java</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "75%" }}></div></div>
                </li>
                <li>
                  <span>Spring Boot</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "70%" }}></div></div>
                </li>
                <li>
                  <span>JavaScript</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "85%" }}></div></div>
                </li>
                <li>
                  <span>MySQL</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "80%" }}></div></div>
                </li>
                <li>
                  <span>Git/GitHub</span>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: "90%" }}></div></div>
                </li>
              </ul>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="card">
            <div className="card-header">
              <h2>Education</h2>
            </div>
            <div className="card-body">
              <ul>
                <li><b>BBA-CA</b>, Modern College, Pune — 78.65%</li>
                <li><b>HSC</b>, Vidya Vardhani College — 78.50%</li>
                <li><b>SSC</b>, Bharat English School — 83%</li>
              </ul>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="card">
            <div className="card-header">
              <h2>Certifications</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>Full Stack Java Developer — Kiran Academy</li>
                <li>C2CF Employability Program — TNSIF</li>
                <li>Digital Business Skills — HP Foundation</li>
                <li>JavaScript Bootcamp — Code Easy Academy</li>
              </ul>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="card">
            <div className="card-header">
              <h2>Languages</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>English — ⭐⭐⭐⭐</li>
                <li>Hindi — ⭐⭐⭐⭐⭐</li>
                <li>Marathi — ⭐⭐⭐⭐⭐</li>
              </ul>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="card">
            <div className="card-header">
              <h2>Achievements</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>Winner — Chess Competition (2024, 2025)</li>
                <li>2nd Prize — Inter-College Chess (2025)</li>
                <li>1st Prize — Volleyball Tournament (2025)</li>
              </ul>
            </div>
          </div>

          {/* BEYOND CODING */}
          <div className="card">
            <div className="card-header">
              <h2>Beyond Coding</h2>
            </div>
            <div className="card-body">
              <p><b>Volunteering:</b> MAGN-IT 2025 Tech Fest</p>
              <p><b>Hobbies:</b> Driving, Cooking, Chess</p>
            </div>
          </div>

        </div>
      </section>

      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
