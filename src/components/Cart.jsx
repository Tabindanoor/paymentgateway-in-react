


import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (itemId, price, quantity) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${state.totalPrice}</p>
    </div>
  );
};

export default Cart;

