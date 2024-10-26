import React from 'react';
import './About.css'; // Updated CSS file

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h2>About Eden Farms</h2>
        <p>
          At Eden Farms, we are dedicated to providing the freshest farm produce. 
          Whether it's wholesale eggs, fresh catfish, animal feeds, or organic manure, 
          we ensure the highest quality for our customers. Our farm is built on sustainable practices, 
          offering products straight from nature to your table.
        </p>
      </div>
      <div className="about-image">
        <img src="/eggs.jpg" alt="Eden Farms" />
      </div>
    </section>
  );
};

export default AboutUs;
