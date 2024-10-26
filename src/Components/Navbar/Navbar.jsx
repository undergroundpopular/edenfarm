import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menu, setMenu] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClick = () => {
    setMobileMenu(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <Link to='/' className='logo'>
        <p className='logo-text'>EDEN FARMS</p>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <img 
        src="/menu-alt-01-svgrepo-com.svg" 
        className="menu-icon hamburger" 
        onClick={toggleMenu} 
        alt="menu icon" 
      />

      {/* Mobile & Desktop Menu */}
      <ul className={`nav-menu ${mobileMenu ? 'show-mobile-menu' : ''}`}>
        <li onClick={() => { setMenu("Home"); handleMenuClick(); }}>
          <Link to='/'>Home</Link>
          {menu === "Home" && <hr />}
        </li>
        <li onClick={() => { setMenu("Products"); handleMenuClick(); }}>
          <Link to='/product'>Products</Link>
          {menu === "Products" && <hr />}
        </li>
        <li onClick={() => { setMenu("About Us"); handleMenuClick(); }}>
          <Link to='/about-us'>About Us</Link>
          {menu === "About Us" && <hr />}
        </li>
        {/* Contact Us button centered in mobile menu */}
        {mobileMenu && (
          <li className="center-contact-button">
            <button onClick={handleMenuClick}>
              <Link to='/contact-us'>Contact Us</Link>
            </button>
          </li>
        )}
      </ul>

      {/* Contact Us Button for Desktop (hidden on mobile) */}
      {!mobileMenu && (
        <div className='nav-contact-us'>
          <button>
            <Link to='/contact-us'>
              <p>Contact Us</p>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
