// AboutUsPage.jsx
import React from 'react';
import './css/AboutUsPage.css'; // Update the CSS filename

const AboutUsPage = () => {
  return (
    <section className="about-us-page">
      <div className="about-content-page">
        <h2>About Eden Farms</h2>
        <p>
          At Eden Farms, we take pride in offering the freshest farm produce, sourced directly from our fields. 
          Our commitment to quality ensures that whether you're looking for wholesale eggs, fresh catfish, 
          premium animal feeds, or organic manure, you receive nothing but the best.
        </p>
        <p>
          We believe in sustainable farming practices that not only support our local community but also 
          protect the environment. Our farm is a place where tradition meets innovation, allowing us to 
          provide you with natural products that nourish both body and soul.
        </p>
        <p>
          Our dedicated team works tirelessly to maintain the highest standards in farming. We invite you to 
          visit us and experience the Eden Farms difference for yourself!
        </p>
      </div>
      <div className="about-image-page">
        <img src="/poultry.jpg" alt="Eden Farms" />
      </div>
    </section>
  );
};

export default AboutUsPage;
