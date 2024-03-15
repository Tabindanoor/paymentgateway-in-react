// // Checkout.js
// import React from 'react';

// const Checkout = ({ cartItems, total, checkout }) => {
//   return (
//     <div>
//       <h1>Checkout</h1>
//       <h2>Cart:</h2>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>Price: ${item.price}</p>
//         </div>
//       ))}
//       <h2>Total: ${total}</h2>
//       <button onClick={checkout}>Checkout</button>
//     </div>
//   );
// };

// export default Checkout;
import React from 'react';
import { useCart } from './CartContext';
import { redirectToCheckout } from '@stripe/stripe-js';
import { stripePromise } from '..';

const Checkout = ({ totalPrice }) => {
  const { state } = useCart();

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const lineItems = state.items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100, // Stripe requires amount in cents
      },
      quantity: item.quantity,
    }));

    const session = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems,
      }),
    }).then(response => response.json());

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle errors
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handlePayment}>Pay with Stripe</button>
    </div>
  );
};

export default Checkout;
