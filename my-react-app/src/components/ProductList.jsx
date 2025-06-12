import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Product List</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};

export default ProductList;
