import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <Link to={`/products/${product.id}`} style={styles.viewButton}>View</Link>
      <button onClick={() => onAddToCart(product)} style={styles.cartButton}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    width: '250px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  viewButton: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    marginRight: '10px'
  },
  cartButton: {
    padding: '8px 16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ProductCard;
