import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">Where Green Meets Serenity</p>
        <p className="landing-description">
          Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants.
          We offer a wide variety of plants that bring life, color, and fresh air into your home.
          Whether you&apos;re a seasoned plant parent or just starting your green journey,
          we have the perfect plant waiting for you. Explore our curated collection of air-purifying,
          aromatic, and low-maintenance plants to transform your living space into a lush paradise.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
