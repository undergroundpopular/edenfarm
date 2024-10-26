import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Eden Farms. All Rights Reserved.</p>
        <div className='social-links'>
        <a href='https://www.facebook.com/profile.php?id=100082085190137' target='_blank' rel='noopener noreferrer'><img src='/facebook.png' alt='Facebook'/></a>
          <a href='https://www.instagram.com/eden_feeds_and_farms_?igsh=MW1oNWtpMGFoeHk1OQ==' target='_blank' rel='noopener noreferrer'><img src='/instagram.png' alt='Instagram'/></a>
          <a href='https://wa.me/2349150812397?text=Hello%20Eden%20Farms%2C%20I%20would%20like%20to%20make%20an%20inquiry' target='_blank' rel='noopener noreferrer'><img src='/whatsapp.png' alt='Twitter'/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
