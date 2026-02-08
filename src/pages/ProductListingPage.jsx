import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import plantsData from '../data/plantsData';
import Header from '../components/Header';
import './ProductListingPage.css';

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.product.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing-page">
      <Header />
      <div className="product-content">
        <h1 className="page-title">Our Plants</h1>
        {plantsData.map((category) => (
          <div key={category.category} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.price}</p>
                    <button
                      className={`add-to-cart-btn ${isInCart(plant.name) ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
