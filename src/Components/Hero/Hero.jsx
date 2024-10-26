import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
      <h1>Welcome to Eden Feeds and Farm</h1>
      <p>Your one-stop shop for fresh farm produce in Nigeria</p>
      <Link to="/about-us" className="hero-btn">
          <button>Learn More<img src='/rightyy.png' className='arrow'/></button>
      </Link>
    </div>
    
  )
}

export default Hero