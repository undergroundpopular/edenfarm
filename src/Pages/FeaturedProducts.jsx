// FeaturedProducts.jsx
import React from 'react';
import './css/FeaturedProducts.css'; // Import your CSS file

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Farm Eggs",
      description: "Grade A, organic eggs from our free-range chickens.",
      image: "/fresh-eggs.jpg" // Replace with your image path
    },
    {
      id: 2,
      name: "Animal Feeds",
      description: "High-quality feeds for various livestock.",
      image: "/chicken-feed.jpg" // Replace with your image path
    },
    {
      id: 3,
      name: "Organic Manure",
      description: "Natural manure to enrich your soil.",
      image: "/dirty-hands.jpg" // Replace with your image path
    },
    // Add more featured products as needed
  ];

  return (
    <div className='FeaturedProducts'>
      <h2>Featured Products</h2>
      <div className='fproduct-list'>
        {featuredProducts.map((product) => (
          <div className='fproduct-card' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
