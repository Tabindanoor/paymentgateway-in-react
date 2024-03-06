// // Cart.js
// import React, { useState } from 'react';

// const Cart = ({ cartItems, removeFromCart }) => {
//   const [paymentComplete, setPaymentComplete] = useState(false);

//   const handlePayment = () => {
//     // Simulate payment process
//     setTimeout(() => {
//       setPaymentComplete(true);
//       removeFromCart(); // Clear cart after payment
//     }, 2000);
//   };

//   if (paymentComplete) {
//     return <div>Payment successful! Your order has been placed.</div>;
//   }

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           <p>Price: ${item.price}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}
//       <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</h3>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default Cart;


// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <hr />
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
