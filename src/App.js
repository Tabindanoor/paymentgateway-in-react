

import { CartProvider } from './components/CartContext.jsx';
import ProductList from './components/ProductList';
import './App.css';
import CartSummary from './components/CartSummary.jsx';

function App() {
  return (
    <div className='App'>
      <ProductList />
      <CartSummary />

  </div>
  );
}

export default App;
