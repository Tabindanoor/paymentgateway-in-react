

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




// export default ProductList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(products,"product")
console.log(products.products,"product meri products")
  return (
    <div>
      
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map(product => (
      <div key={product.product.id} className="bg-white shadow-lg p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-700 mt-2">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>

      </div>
    ))}

    {products.id}
  </div>
    </div>
  );
};

export default ProductList;
