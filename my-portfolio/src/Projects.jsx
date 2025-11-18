import React from "react";
import "./Style.css";

const Projects = () => {
  return (
    <div className="container">

      <section className="projects-section">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-container">

          {/* Smart Bazaar */}
          <div className="project-card">
            <h2>Smart Bazaar</h2>
            <p>
              A backend-driven e-commerce management system with modules for 
              products, categories, users, and orders.  
              Implemented complete CRUD operations and tested APIs using Postman.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> Java • Spring Boot • Hibernate • MySQL • REST API • Postman
            </div>

            <a
              href="https://github.com/SaniyaInamdar/SmartBazaar"
              target="_blank"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* Vehicle Rental System */}
          <div className="project-card">
            <h2>Vehicle Rental System</h2>
            <p>
              A rental management backend handling booking flow, customer registration, 
              and vehicle availability. Designed proper database schema and service layers.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> Java • Spring Boot • JPA • MySQL • REST API • Postman
            </div>

            <a
              href="https://github.com/SaniyaInamdar/VehicleRentalSystem"
              target="_blank"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* SAMSTRACK */}
          <div className="project-card">
            <h2>SAMSTRACK</h2>
            <p>
              Backend module for student academic data, attendance tracking, and performance records.  
              Designed reusable service logic, controllers, and schema optimization.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> Java • Spring Boot • Hibernate • MySQL • REST API • Postman
            </div>

            <a
              href="https://github.com/SaniyaInamdar/SAMSTRACK"
              target="_blank"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* Sakhee */}
          <div className="project-card">
            <h2>Sakhee – Helping Hand</h2>
            <p>
              A service booking platform with backend logic for authentication, 
              user registration, and booking management.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> Java • MySQL • HTML • CSS • JavaScript
            </div>

            <a
              href="https://github.com/SaniyaInamdar/Sakhi-helping-hand"
              target="_blank"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* Go Green Bicycle */}
          <div className="project-card">
            <h2>Go Green Bicycle</h2>
            <p>
              Java Swing + MySQL desktop app for bicycle renting and returning system 
              with complete database integration.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> Java Swing • MySQL • JDBC
            </div>

            <a
              href="https://github.com/SaniyaInamdar/GoGreenBicycle"
              target="_blank"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* Portfolio Website */}
          <div className="project-card">
            <h2>Portfolio Website</h2>
            <p>
              Fully responsive personal portfolio website showing projects, skills, 
              and achievements. Deployed on GitHub Pages.
            </p>

            <div className="techbox">
              <b>Tech Stack:</b> JavaScript • React Js • Java  • HTML • CSS 
            </div>

            <a
              href="https://saniyainamdar.github.io/Portfolio/"
              target="_blank"
              className="project-link"
            >
              View Live →
            </a>
          </div>

        </div>
      </section>

      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
