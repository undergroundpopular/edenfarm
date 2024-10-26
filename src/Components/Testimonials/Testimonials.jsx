// Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Chinedu Okafor",
      feedback: "The eggs from Eden Farms are always fresh and of the best quality. I highly recommend them!",
    },
    {
      name: "Aisha Bello",
      feedback: "Their organic manure has really improved my garden's yield. Excellent customer service as well!",
    },
    {
      name: "Ngozi Eze",
      feedback: "The catfish I bought was fresh and tasted amazing. Will definitely buy again!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4 className="customer-name">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
