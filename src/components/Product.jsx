


import React from 'react';

const Product = ({ products, onAddToCart }) => {
  const { id, title, price, stock } = products;
  console.log(id,title,price,stock);

  const handleAddToCart = () => {
    if (stock > 0) {
      onAddToCart(id);
    }
  };

  return (
    <div className="border p-4 mb-4">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>In Stock: {stock}</p>
      <button onClick={handleAddToCart} disabled={stock === 0}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
