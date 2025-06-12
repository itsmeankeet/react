import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async (product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description
    };

    try {
      const res = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)
      });

      if (res.ok) {
        console.log('Added to db.json');
        setCartItems(prev => [...prev, cartItem]); // add to sidebar view
      } else {
        console.error('Failed to add to cart');
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
            <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          </Routes>
        </div>

        <div style={styles.sidebar}>
          <h3>🛒 Cart</h3>
          {cartItems.length === 0 ? (
            <p>No items</p>
          ) : (
            <ul>
              {cartItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '10px' }}>
                  <strong>{item.title}</strong>
                  <br />
                  ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Router>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    padding: '15px',
    background: '#f2f2f2',
    borderLeft: '1px solid #ccc',
    height: '100vh',
    overflowY: 'auto',
    position: 'sticky',
    top: 0
  }
};

export default App;
