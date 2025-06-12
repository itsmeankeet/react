import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={styles.container}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <div style={styles.info}>
      <button onClick={() => navigate('/')} style={styles.backButton}>
  <span style={{ marginRight: '8px' }}>🔙</span> Back to Products
</button>
        <h2>{product.title}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong>{product.rating} ⭐ </p>
        <p style={styles.fullDescription}>{product.description}</p>
        <button onClick={() => onAddToCart(product)} style={styles.cartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '30px',
    gap: '30px',
    maxWidth: '900px',
    margin: 'auto',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  image: {
    width: '350px',
    borderRadius: '12px'
  },
  info: {
    flex: 1
  },
  fullDescription: {
    marginTop: '15px',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#444'
  },
  cartButton: {
    marginTop: '20px',
    padding: '10px 18px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem'
  },
  backButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'background 0.3s, transform 0.2s'
  }  
};

export default ProductDetail;
