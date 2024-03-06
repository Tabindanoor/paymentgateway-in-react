

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
// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  console.log('Products are mine :', products.products);

  if (!Array.isArray(products)) {
    console.error('Products is not an array:', products);
    return null; // or render a loading indicator or error message
  }

  return (
    <ul>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default ProductList;
