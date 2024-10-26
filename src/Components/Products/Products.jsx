// Products.jsx
import React from 'react';
import './Products.css'; // Import the CSS file for styling

const Products = () => {
  return (
    <div className='Products'>
      <h2>Our Products</h2>
      <div className='product-list'>
        <div className='product-card'>
          <img src='/eggs.jpg' alt='Fresh Farm Eggs' />
          <h3>Fresh Farm Eggs</h3>
          <p>Farm-fresh eggs from our happy hens.</p>
        </div>
        <div className='product-card'>
          <img src='/chicken-feed.jpg' alt='Animal Feeds' />
          <h3>Animal Feeds</h3>
          <p>High-quality feeds for your livestock.</p>
        </div>
        <div className='product-card'>
          <img src='/wheelbarrow.jpg' alt='Organic Manure' />
          <h3>Organic Manure</h3>
          <p>Natural fertilizer for your farms and garden.</p>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
};

export default Products;
