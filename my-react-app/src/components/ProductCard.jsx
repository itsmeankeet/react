import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.shortDescription}>
        {product.description.length > 60
          ? product.description.slice(0, 60) + '...'
          : product.description}
      </p>

      <div style={styles.buttons}>
        <Link to={`/products/${product.id}`} style={styles.viewButton}>View</Link>
        <button onClick={() => onAddToCart(product)} style={styles.cartButton}>Add to Cart</button>
      </div>

    </div>
  );
};

const styles = {
  card: {
    width: '260px',
    padding: '16px',
    margin: '12px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  price: {
    color: '#28a745',
    fontWeight: 'bold'
  },
  shortDescription: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '10px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '10px'
  },
  viewButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  cartButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px'
  }
};

export default ProductCard;
