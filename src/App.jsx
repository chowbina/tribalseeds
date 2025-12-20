import React, { useState } from 'react';
import { Search, CheckCircle, Heart, Package, Leaf, Star, TrendingUp } from 'lucide-react';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartSidebar from './components/CartSidebar';
import { products } from './products';
import './App.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">
            Preserve India's <span className="gradient-text">Agricultural Heritage</span>
          </h2>
          <p className="hero-subtitle">
            Discover authentic desi heirloom seeds passed down through generations. 
            Support sustainable farming and enjoy the true taste of traditional Indian vegetables and herbs.
          </p>
          <div className="hero-features">
            <div className="feature-badge">
              <CheckCircle className="feature-icon" />
              <span>100% Organic</span>
            </div>
            <div className="feature-badge">
              <Heart className="feature-icon" />
              <span>Non-GMO</span>
            </div>
            <div className="feature-badge">
              <Package className="feature-icon" />
              <span>Free Shipping ₹500+</span>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };

  const getFilteredProducts = () => {
    let allProducts = [];
    
    if (currentCategory === 'all') {
      allProducts = [
        ...products.vegetables,
        ...products.medicinal,
        ...products.greens
      ];
    } else {
      allProducts = products[currentCategory] || [];
    }

    if (searchTerm) {
      return allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allProducts;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <CartProvider>
      <div className="app">
        <Header onCategoryChange={setCurrentCategory} currentCategory={currentCategory} />
        <HeroSection />
        
        <main className="main-content">
          <div className="search-container">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search for seeds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <Leaf size={48} className="no-products-icon" />
              <p>No products found matching your search.</p>
            </div>
          )}

          <section className="info-section">
            <div className="info-container">
              <div className="info-card">
                <Star className="info-icon" style={{ color: 'var(--primary-yellow)' }} />
                <h3>Premium Quality</h3>
                <p>All our seeds are carefully selected from tribal communities across India</p>
              </div>
              <div className="info-card">
                <TrendingUp className="info-icon" style={{ color: 'var(--primary-green)' }} />
                <h3>High Germination</h3>
                <p>Traditional varieties with proven high germination rates</p>
              </div>
              <div className="info-card">
                <Heart className="info-icon" style={{ color: 'var(--primary-pink)' }} />
                <h3>Supporting Communities</h3>
                <p>Every purchase supports tribal farmers and preserves biodiversity</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>About TribalSeeds</h3>
              <p>
                We work with tribal communities across India to preserve and promote traditional 
                heirloom seed varieties that have been cultivated for centuries.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>
                Email: info@tribalseeds.in<br />
                Phone: +91 98765 43210<br />
                WhatsApp: +91 98765 43210
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 TribalSeeds. Preserving Nature's Heritage.
          </div>
        </footer>

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}

        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default App;
