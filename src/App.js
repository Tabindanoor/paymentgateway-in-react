

// import ProductList from './components/ProductList';
// import './App.css';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <div className='App'>
//       <ProductList />
//       <Cart/>

//   </div>
//   );
// }

// export default App;


import React from 'react';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className='App flex m-5'>
        <div className='w-[70%]'>
        <ProductList />  
              </div>

        <div className='w-[30%]'>
            <Cart /></div>

        
      </div>
    </CartProvider>
  );
}

export default App;
