


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



import React from 'react';
import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OuD2h2KJl9g1FEjYT0cPxOcdkIExNZ6sAVXjGZHsJqo69jR9P1BSdDCPe17JgU80BWRV38UOdBzO1JDDpt2Cd5L00JRonKjgJ');

const Cart = () => {
  const { state, dispatch } = useCart();
  const handleRemoveItem = (itemId, price, quantity) => {
        if (quantity > 1) {
          dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: quantity - 1 } });
        } else {
          dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId, price, quantity } });
        }
      };
  const handleCheckout = async () => {
    console.log("pined")
    
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: state.items }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log("cliekd")

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2 className='text-4xl font-bold font-serif'>Shopping Cart</h2><br />
      <ul className="cart-list-item bg-blue-200 rounded-xl">
        {state.items.map((item) => (
          <li key={item.id} className="cart-list-item bg-blue-200 rounded-xl">
            <p className='font-bold text-black-500 '>{item.title} </p>
            <p className='font-bold text-black-500 '> ${item.price} </p>
            <p className='font-bold text-black-500 '>Quantity: {item.quantity}</p> 
            <button className='bg-red-600 text-white p-3 rounded-lg' onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>Remove</button>
         <br /><br />
          </li>
        ))}
      </ul>
      <p className='text-2xl font-bold'>Total Price: ${state.totalPrice}</p>
      {/* <button onClick={handleCheckout} className='bg-green-600 text-white p-3 rounded-lg'>Checkout</button> */}
      {state.totalPrice > 0 && <button onClick={handleCheckout} className='bg-green-600 shadow-lg animate-bounce border-2 border-red-600  text-white p-3 rounded-lg'>Payment </button>}

    </div>
  );
};

export default Cart;
