/*
  Problem Statement:
  1. Create a React component that displays a list of products.
  2. The list of products will be obtained from an API, and each product will have a name and a category.
  3. The component should have a search input that allows users to filter products by name.
  4. The component should also have a button to sort products by their category in alphabetical order.
  5. The API URL is: https://fakestoreapi.com/products
  6. Each product should be displayed with its name, category, and price.
  7. Use useState and useEffect to manage state and make API requests.
  8. Handle errors during API requests gracefully.
  9. Use an efficient sorting method for category sorting (you don't need to sort on every render).
*/


// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
// }



import React, { useState, useEffect } from 'react';

const ProductList = () => {
  // Hint: Define useState for products, searchTerm, and error.
  
  // Hint: Use useEffect to fetch data from the API and save it in the state.
  
  // Hint: Create a function to filter products based on searchTerm (product title).
  
  // Hint: Create a function to sort products alphabetically by category.

  return (
    <div>
      <h2>Product List</h2>
      {/* Hint: Add a search input for filtering products */}
      {/* Hint: Add a button to sort products by category */}
      {/* Hint: Display error message if there's an issue with the API */}
      {/* Hint: Display products in a list with their name, category, and price */}
    </div>
  );
};

export default ProductList;
