import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, ArrowRight, CreditCard, Smartphone, Building, Truck } from 'lucide-react';
import { useCart } from './CartContext';

const CartSidebar = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    isCartOpen,
    setIsCartOpen
  } = useCart();
  
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePayment = (method) => {
    alert(`Processing payment via ${method}.\nTotal Amount: ₹${getCartTotal()}\n\nThank you for preserving nature's heritage!`);
    clearCart();
    setIsCheckout(false);
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="cart-overlay"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="cart-sidebar slide-in-right">
        <div className="cart-header">
          <h2 className="cart-title">
            {isCheckout ? 'Checkout' : 'Shopping Cart'}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="cart-close-btn"
          >
            <X size={24} />
          </button>
        </div>

        {!isCheckout ? (
          <>
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingCart size={48} className="empty-cart-icon" />
                  <p className="empty-cart-text">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="continue-shopping-btn"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item fade-in">
                      <div className="cart-item-image" dangerouslySetInnerHTML={{ __html: item.image }} />
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <p className="cart-item-price">₹{item.price} per pack</p>
                        <div className="cart-item-controls">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">₹{getCartTotal()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="checkout-btn"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="checkout-section">
            <h3 className="payment-title">Select Payment Method</h3>
            <div className="payment-options">
              <button
                onClick={() => handlePayment('UPI')}
                className="payment-option"
              >
                <Smartphone className="payment-icon" style={{ color: 'var(--primary-cyan)' }} />
                <div className="payment-details">
                  <div className="payment-name">UPI Payment</div>
                  <div className="payment-desc">Google Pay, PhonePe, Paytm</div>
                </div>
              </button>
              
              <button
                onClick={() => handlePayment('Card')}
                className="payment-option"
              >
                <CreditCard className="payment-icon" style={{ color: 'var(--primary-pink)' }} />
                <div className="payment-details">
                  <div className="payment-name">Credit/Debit Card</div>
                  <div className="payment-desc">Visa, Mastercard, Rupay</div>
                </div>
              </button>
              
              <button
                onClick={() => handlePayment('NetBanking')}
                className="payment-option"
              >
                <Building className="payment-icon" style={{ color: 'var(--primary-yellow)' }} />
                <div className="payment-details">
                  <div className="payment-name">Net Banking</div>
                  <div className="payment-desc">All major banks supported</div>
                </div>
              </button>
              
              <button
                onClick={() => handlePayment('COD')}
                className="payment-option"
              >
                <Truck className="payment-icon" style={{ color: 'var(--primary-green)' }} />
                <div className="payment-details">
                  <div className="payment-name">Cash on Delivery</div>
                  <div className="payment-desc">Pay when you receive</div>
                </div>
              </button>
            </div>
            
            <button
              onClick={() => setIsCheckout(false)}
              className="back-to-cart-btn"
            >
              Back to Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
