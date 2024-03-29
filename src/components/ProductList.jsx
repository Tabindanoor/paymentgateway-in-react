

import React, { useState } from 'react';
import products from './Data';
import { useCart } from './CartContext';

const ProductList = () => {
  const { state, dispatch } = useCart();
  const [stock, setStock] = useState(products.map(product => ({ id: product.id, stock: product.stock })));

  const handleAddToCart = (product) => {
    const existingItem = state.items.find(item => item.id === product.id);
    if (!existingItem && product.stock > 0) {
      dispatch({ type: 'ADD_ITEM', payload: product });
      const updatedStock = stock.map(item => item.id === product.id ? { ...item, stock: item.stock - 1 } : item);
      setStock(updatedStock);
    } else if (existingItem && existingItem.quantity < product.stock) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity: existingItem.quantity + 1 } });
      const updatedStock = stock.map(item => item.id === product.id ? { ...item, stock: item.stock - 1 } : item);
      setStock(updatedStock);
    }
  };

  return (
    <div className=" mx-auto justify-center text-center ">
      <p className='font-bold font-serif text-4xl'>Product List</p><br />
      <div className="grid  lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <div className="h-[685px] relative  px-2 py-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <h5 className="text-lg font-bold tracking-tight text-slate-900">Brand: {product.brand}</h5>
              <h5 className="text-lg tracking-tight text-slate-900"><span className='font-bold'>Category:</span> {product.category}</h5>
              <h5 className="text-lg tracking-tight text-slate-900"><span className='font-bold'>Title:</span> {product.title}</h5>
              <p className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img className="object-cover w-full" src={product.images[2]} alt="productimage" />
                <span className="absolute top-0 leProduct.component';-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.discountPercentage}% OFF</span>
              </p>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-lg tracking-tight text-slate-900"> <span className='font-bold'>Description: <br /> </span>{product.description}</h5>
                <p className="text-lg tracking-tight text-slate-900"><span className='font-bold'>Rating:</span> {product.rating}</p>
                {/* <p className="text-lg tracking-tight text-slate-900"><span className='font-bold'>Stock:</span> {product.stock}</p> */}
                <div className=" mb-5 flex items-center justify-between">
                  <p className="text-xl justify-center mx-auto text-center  font-bold text-slate-900"> <span className='font-bold'>Price: $</span> {product.price}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className=" bottom-4 left-0 absolute  flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
