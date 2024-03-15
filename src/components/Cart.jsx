


// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state, dispatch } = useCart();
//   const handleRemoveItem = (itemId, price, quantity) => {
//     if (quantity > 1) {
//       dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: quantity - 1 } });
//     } else {
//       dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
//     }
//   };
  

//   return (
//     <div>
//       <h2 className='text-4xl font-bold font-serif'>Shopping Cart</h2><br />
//       <ul  className="cart-list-item bg-blue-200 rounded-xl">
//         {state.items.map((item) => (
//           <li key={item.id}  className="cart-list-item bg-blue-200 rounded-xl">
//             <p className='font-bold text-black-500 '>{item.title} </p>
//             <p className='font-bold text-black-500 '> ${item.price} </p>
//             <p className='font-bold text-black-500 '>Quantity: {item.quantity}</p> 
//             <button className='bg-red-600 text-white p-3 rounded-lg' onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>Remove</button>
//          <br /><br />
//           </li>
          
//         ))}
//       </ul>
//       <p className='text-2xl font-bold'>Total Price: ${state.totalPrice}</p>
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from 'react';
import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [stripePromise, setStripePromise] = useState(null);

  // Load Stripe after component mounts
  useState(() => {
    setStripePromise(loadStripe('YOUR_STRIPE_PUBLIC_KEY'));
  }, []);

  const handleRemoveItem = (itemId, price, quantity) => {
    if (quantity > 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: quantity - 1 } });
    } else {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
    }
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;
    // Call your backend to create a checkout session
    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: state.items }),
    });
    const session = await response.json();

    // Redirect to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
      alert('Payment failed. Please try again.');
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
      <button className='bg-green-600 text-white p-3 rounded-lg' onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Cart;


