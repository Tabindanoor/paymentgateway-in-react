


import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  // const handleRemoveItem = (itemId, price, quantity) => {
  //   dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
  // };

  const handleRemoveItem = (itemId, price, quantity) => {
    if (quantity > 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: quantity - 1 } });
    } else {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
    }
  };
  

  return (
    <div>
      <h2 className='text-4xl font-bold font-serif'>Shopping Cart</h2><br />
      <ul  className="cart-list-item bg-blue-200 rounded-xl">
        {state.items.map((item) => (
          <li key={item.id}  className="cart-list-item bg-blue-200 rounded-xl">
            <p className='font-bold text-black-500 '>{item.title} </p>
            <p className='font-bold text-black-500 '> ${item.price} </p>
            <p className='font-bold text-black-500 '>Quantity: {item.quantity}</p> 
            <button className='bg-red-600 text-white p-3 rounded-lg' onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>Remove</button>
         <br /><br />
          </li>
          
        ))}
      </ul>
      <p className='text-2xl font-bold'>Total Price: ${state.totalPrice}</p>
      <button>Pay through stripe </button>
    </div>
  );
};

export default Cart;

