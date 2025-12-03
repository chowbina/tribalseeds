import React, { useState } from 'react';
import { Plus, CheckCircle, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card fade-in">
      <div className="product-image-container">
        <div 
          className="product-image"
          dangerouslySetInnerHTML={{ __html: product.image }}
        />
        <div className="product-category-badge">
          {product.category}
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-scientific">{product.scientificName}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">₹{product.price}</span>
          <button
            onClick={handleAddToCart}
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          >
            {isAdded ? (
              <>
                <CheckCircle size={18} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
