// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './PaymentForm';

// const stripePromise = loadStripe('your_publishable_key_here');

// const App = () => {
//   return (

//     <div className="App">
//       <p>my name is tabinda noor</p>
//        <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>
//     </div>
   
//   );
// };

// export default App;


// App.js
// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import Checkout from './Checkout';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, { ...product, id: uuidv4() }]);
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   const checkout = () => {
//     // Simulate online payment (e.g., using a setTimeout)
//     setTimeout(() => {
//       alert('Payment successful! Your order has been placed.');
//       setCartItems([]);
//     }, 2000);
//   };

//   return (
//   <div>
//     <ProductList addToCart={addToCart} />  
//     <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//     <Checkout cartItems={cartItems} total={calculateTotal()} checkout={checkout} />
//   </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response =>{ response.json()})
      .then(data => {
        setProducts(data)
      console.log(data)});
   
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemsCount(cartItemsCount + 1);
  };

  return (
    <div>
      <h1>Online Shopping</h1>
      <Elements stripe={stripePromise}>
        <Cart cart={cart} />
        <ProductList products={products} addToCart={addToCart} />
      </Elements>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  console.log(products,"productList");
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <p>Items: {cart.length}</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
