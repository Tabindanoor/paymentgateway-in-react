import React from 'react';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { cart } = useCart();

  return <div>Items in cart: {cart.length}</div>;
};

export default CartSummary;
