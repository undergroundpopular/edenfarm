// ContactUs.jsx
import React, { useState } from 'react';
import { useForm } from '@formspree/react'; // Import the useForm hook from Formspree
import './ContactUs.css';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("yourFormID"); // Replace "yourFormID" with your actual Formspree form ID

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }
    handleSubmit(e); // Calls Formspree’s handleSubmit
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div className='ContactUs'>
      <div className='ContactInfo'>
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Army Range Eneka, Port Harcourt</p>
        <p><strong>Phone:</strong> 09150812397</p>
        <p><strong>Email:</strong> edenfarms676@gmail.com</p>
        <h3>Follow Us:</h3>
        <div className='SocialLinks'>
          <a href='https://www.facebook.com/profile.php?id=100082085190137' target='_blank' rel='noopener noreferrer'><img src='/facebook.png' alt='Facebook'/></a>
          <a href='https://www.instagram.com/eden_feeds_and_farms_?igsh=MW1oNWtpMGFoeHk1OQ==' target='_blank' rel='noopener noreferrer'><img src='/instagram.png' alt='Instagram'/></a>
          <a href='https://wa.me/2349150812397?text=Hello%20Eden%20Farms%2C%20I%20would%20like%20to%20make%20an%20inquiry' target='_blank' rel='noopener noreferrer'><img src='/whatsapp.png' alt='Twitter'/></a>
        </div>
      </div>

      <div className='ContactForm'>
        {state.succeeded ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleInputSubmit}>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
            />
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-required="true"
            />
            <button type='submit' disabled={state.submitting}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
