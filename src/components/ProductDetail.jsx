import React, { useState } from 'react';
import { X, ShoppingBag, Leaf, Package } from 'lucide-react';
import { useCart } from './CartContext';

const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="product-detail-overlay" onClick={handleOverlayClick}>
      <div className="product-detail-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="product-detail-content">
          <div className="product-detail-left">
            <div className="product-detail-main-image">
              <div
                dangerouslySetInnerHTML={{ __html: product.gallery[currentImageIndex] }}
              />
            </div>

            <div className="product-detail-gallery">
              {product.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div dangerouslySetInnerHTML={{ __html: image }} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-detail-right">
            <div className="product-detail-header">
              <div className="product-category-badge-detail">
                {product.category}
              </div>
              <h2 className="product-detail-name">{product.name}</h2>
              <p className="product-detail-scientific">{product.scientificName}</p>
            </div>

            <div className="product-detail-info">
              <div className="info-badge">
                <Package size={18} />
                <span>{product.seedCount}</span>
              </div>
              <div className="product-detail-price">₹{product.price}</div>
            </div>

            <div className="product-detail-section">
              <h3>
                <Leaf size={18} />
                About This Variety
              </h3>
              <p>{product.detailedDescription}</p>
            </div>

            <div className="product-detail-section">
              <h3>
                <Leaf size={18} />
                Growing Tips
              </h3>
              <p>{product.growingTips}</p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`product-detail-add-btn ${isAdded ? 'added' : ''}`}
            >
              {isAdded ? (
                <>
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
