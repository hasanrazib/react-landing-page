import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="service" className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We provide modern digital solutions to help businesses grow faster,
          look better, and perform smarter.
        </p>
      </div>

      <div className="services-container">
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
            alt="Web Development"
          />
          <h3>Web Development</h3>
          <p>
            We build responsive and modern websites using the latest
            technologies to ensure performance and user satisfaction.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
            alt="UI UX Design"
          />
          <h3>UI/UX Design</h3>
          <p>
            Our design approach focuses on clean layouts, engaging visuals, and
            intuitive user experiences for every device.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/13/22/42/seo-1327870_1280.png"
            alt="Digital Marketing"
          />
          <h3>Digital Strategy</h3>
          <p>
            We help brands improve visibility, connect with customers, and grow
            through effective digital strategy and smart solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;