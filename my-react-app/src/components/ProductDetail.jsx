// src/components/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
    </div>
  );
};

export default ProductDetail;
