// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <li>
      {name} - ${price}
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </li>
  );
};

export default Product;
