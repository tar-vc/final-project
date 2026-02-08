import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isCartPage = location.pathname === '/cart';
  const isProductPage = location.pathname === '/products';

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo" onClick={() => navigate('/')}>
          🌿 Paradise Nursery
        </h1>
        <nav className="header-nav">
          {!isProductPage && (
            <button className="nav-btn" onClick={() => navigate('/products')}>
              Plants
            </button>
          )}
          {!isCartPage && (
            <button className="nav-btn cart-nav-btn" onClick={() => navigate('/cart')}>
              🛒 Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </button>
          )}
          {isCartPage && (
            <button className="nav-btn" onClick={() => navigate('/')}>
              Home
            </button>
          )}
          {isProductPage && (
            <button className="nav-btn" onClick={() => navigate('/')}>
              Home
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
