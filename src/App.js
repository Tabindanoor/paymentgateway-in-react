


import React from 'react';
import './App.css';
import ProductList from './components/ProductList'
import Cart from './components/Cart'
function App() {
  return (
      <div className='App flex m-5'>
        <div className='w-[70%]'>
        <ProductList />  
        
        </div>
        <div className='w-[30%]'>
            <Cart />
        </div>       
      </div>
  );
}

export default App;
