

// // ProductList.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Product 1', price: 10, description: 'Description of product 1' },
//   { id: 2, name: 'Product 2', price: 20, description: 'Description of product 2' },
//   { id: 3, name: 'Product 3', price: 30, description: 'Description of product 3' },
// ];

// const ProductList = ({ addToCart }) => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//           <hr />
//         </div>
//       ))}
//       <Link to="/cart">Go to Cart</Link>
//     </div>
//   );
// };


import Product from './Data';

const ProductList = () => {
  return (
    <div className='p-4'>
    <h1>Products</h1>


    <div className="grid grid-cols-4 ">
  {/* <div>01</div>
  <div>09</div> */}
  {Product.map(product => (
        <div key={product.id} className="bg-red-900 shadow-lg p-4  ">
          <p>{product.id}</p>
          <p className='font-bold'>Brand :{product.brand}</p>
          <p className='font-bold'>Title :{product.title}</p>
          <p className='font-bold'>Category :{product.category}</p>
          {/* <p className='font-bold'>Description :{product.description}</p> */}
          <p>Discount Percentage:{product.discountPercentage}</p>
  
          <img style={{height:"200px", width:"250px"}} src={product.images[2]} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold">Price {product.price}</h2>
          <p className="text-gray-500">Rating: {product.rating}</p>
          <p className="text-gray-500">Stock: {product.stock}</p>
          {/* <img src={product.thumbnail} style={{height:"200px", width:"250px"}} alt='img' className="text-gray-700 mt-2"/><p>Thumbnail </p> */}
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
          <br /><br />
        </div>
      ))}
    </div>

    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Product.map(product => (
        <div key={product.id} className="bg-red-900 shadow-lg p-4  ">
          <p>{product.id}</p>
          <p className='font-bold'>Brand :{product.brand}</p>
          <p className='font-bold'>Title :{product.title}</p>
          <p className='font-bold'>Category :{product.category}</p>
          <p className='font-bold'>Description :{product.description}</p>
          <p>Discount Percentage:{product.discountPercentage}</p>
  
          <img style={{height:"200px", width:"250px"}} src={product.images[2]} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold">Price {product.price}</h2>
          <p className="text-gray-500">Rating: {product.rating}</p>
          <p className="text-gray-500">Stock: {product.stock}</p>
          <img src={product.thumbnail} style={{height:"200px", width:"250px"}} alt='img' className="text-gray-700 mt-2"/><p>Thumbnail </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
        </div>
      ))}
    </div> */}
  </div>
  
  );
};

export default ProductList;
