import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import Header from '../components/Header';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Coming Soon! Stay tuned for our checkout feature.');
  };

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p className="cart-total-items">Total Items: <strong>{totalQuantity}</strong></p>
              <p className="cart-total-cost">Total Cost: <strong>${totalCost}</strong></p>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.product.name} className="cart-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.product.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.product.price}</p>
                    <p className="cart-item-subtotal">
                      Subtotal: ${item.product.price * item.quantity}
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(decrementQuantity(item.product.name))}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(incrementQuantity(item.product.name))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeFromCart(item.product.name))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-buttons">
              <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartPage;
