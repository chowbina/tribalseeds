import React, { useState } from 'react';
import { ShoppingCart, Menu, Leaf, Search } from 'lucide-react';
import { useCart } from './CartContext';

const Header = ({ onCategoryChange, currentCategory }) => {
  const { getCartItemsCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header glass-effect">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-wrapper">
            <Leaf className="logo-icon" />
            <div className="logo-text">
              <h1 className="logo-title gradient-text">TribalSeeds</h1>
              <p className="logo-subtitle">Preserving Nature's Heritage</p>
            </div>
          </div>
        </div>
        
        <nav className="desktop-nav">
          <button
            onClick={() => onCategoryChange('all')}
            className={`nav-link ${currentCategory === 'all' ? 'active' : ''}`}
          >
            All Seeds
          </button>
          <button
            onClick={() => onCategoryChange('vegetables')}
            className={`nav-link ${currentCategory === 'vegetables' ? 'active' : ''}`}
          >
            Vegetables
          </button>
          <button
            onClick={() => onCategoryChange('medicinal')}
            className={`nav-link ${currentCategory === 'medicinal' ? 'active' : ''}`}
          >
            Medicinal
          </button>
          <button
            onClick={() => onCategoryChange('greens')}
            className={`nav-link ${currentCategory === 'greens' ? 'active' : ''}`}
          >
            Greens/Soppu
          </button>
        </nav>

        <div className="header-actions">
          <button
            onClick={() => setIsCartOpen(true)}
            className="cart-button"
          >
            <ShoppingCart className="cart-icon" />
            {getCartItemsCount() > 0 && (
              <span className="cart-badge pulse">{getCartItemsCount()}</span>
            )}
          </button>
          
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="menu-icon" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <nav className="mobile-nav fade-in">
          <button
            onClick={() => { onCategoryChange('all'); setIsMenuOpen(false); }}
            className={`mobile-nav-link ${currentCategory === 'all' ? 'active' : ''}`}
          >
            All Seeds
          </button>
          <button
            onClick={() => { onCategoryChange('vegetables'); setIsMenuOpen(false); }}
            className={`mobile-nav-link ${currentCategory === 'vegetables' ? 'active' : ''}`}
          >
            Vegetables
          </button>
          <button
            onClick={() => { onCategoryChange('medicinal'); setIsMenuOpen(false); }}
            className={`mobile-nav-link ${currentCategory === 'medicinal' ? 'active' : ''}`}
          >
            Medicinal
          </button>
          <button
            onClick={() => { onCategoryChange('greens'); setIsMenuOpen(false); }}
            className={`mobile-nav-link ${currentCategory === 'greens' ? 'active' : ''}`}
          >
            Greens/Soppu
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
