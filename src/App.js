import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (productId) => {
    // Implement add to cart functionality here
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div>
      <h1>Online Shopping</h1>
      {/* <ProductList/> */}
      {/* <ProductList products={products} addToCart={addToCart} /> */}
    </div>
  );
};

export default App;
