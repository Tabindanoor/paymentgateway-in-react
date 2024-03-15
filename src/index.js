import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './components/CartContext';
// https://fakestoreapi.com/products
// https://dummyjson.com/products
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Checkout from './components/Checkout';

export const stripePromise = loadStripe('pk_test_51OuD2h2KJl9g1FEjYT0cPxOcdkIExNZ6sAVXjGZHsJqo69jR9P1BSdDCPe17JgU80BWRV38UOdBzO1JDDpt2Cd5L00JRonKjgJ');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}  />
        {/* <Route path='/checkout' element={<Checkout/>}  /> */}

      </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>



);

