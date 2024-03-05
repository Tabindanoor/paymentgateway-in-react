// Checkout.js
import React from 'react';

const Checkout = ({ cartItems, total, checkout }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <h2>Cart:</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Checkout;
