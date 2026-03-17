import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Foal! We are passionate about building modern web
            applications with clean design and great user experience.
          </p>
          <p>
            Our goal is to create fast, responsive, and user-friendly
            interfaces using React.
          </p>
        </div>

        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="About Foal"
          />
        </div>

      </div>
    </section>
  );
};

export default About;