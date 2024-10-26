import React from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import AboutUs from '../AboutUs/About'
import ContactUs from '../ContactUs/ContactUs'
import Testimonials from '../Testimonials/Testimonials'


const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <AboutUs />
        <ContactUs />
        <Testimonials />
    </div>
  )
}

export default Home