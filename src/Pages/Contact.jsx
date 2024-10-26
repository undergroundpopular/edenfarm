// ContactUs.jsx
import React, { useState } from 'react';
import { useForm } from '@formspree/react'; // Import Formspree's useForm hook
import './css/Contact.css';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("yourFormID"); // Replace "yourFormID" with your actual Formspree form ID

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    handleSubmit(e); // Calls Formspree’s handleSubmit function

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className='contact-us-container'>
      <div className='contact-info-section'>
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Army Range, Eneka, Port Harcourt, Nigeria</p>
        <p><strong>Phone:</strong> 09150812397</p>
        <p><strong>Email:</strong> edenfarms676@gmail.com</p>
        <p><strong>Working Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>
        <h3>Follow Us:</h3>
        <div className='social-media-links'>
          <a href='https://www.facebook.com/profile.php?id=100082085190137' target='_blank' rel='noopener noreferrer'>
            <img src='/facebook.png' alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/eden_feeds_and_farms_?igsh=MW1oNWtpMGFoeHk1OQ==' target='_blank' rel='noopener noreferrer'>
            <img src='/instagram.png' alt='Instagram' />
          </a>
          <a href='https://wa.me/2349150812397?text=Hello%20Eden%20Farms%2C%20I%20would%20like%20to%20make%20an%20inquiry' target='_blank' rel='noopener noreferrer'>
            <img src='/whatsapp.png' alt='Twitter' />
          </a>
        </div>
      </div>
      <div className='contact-form-section'>
        {state.succeeded ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Optional'
            />
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type='submit' disabled={state.submitting}>Send Message</button>
          </form>
        )}
      </div>
      <div className='map-section'>
        <h3>Find Us Here:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.303322868809!2d7.033716114811868!3d4.857294696127867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85a0640a2f03%3A0x9e1d4b28abf6fdd9!2sArmy%20Range%20Eneka%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map to Eden Farms"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
