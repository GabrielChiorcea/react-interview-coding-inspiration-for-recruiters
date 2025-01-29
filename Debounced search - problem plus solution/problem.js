// Task: Implement a debounced search input that queries the GitHub API.
// API: https://api.github.com/search/users?q={query}
// Hints:
// - Use useState to store the input value and results.
// - Use useEffect to trigger the API call after a 1000ms delay.
// - Implement debounce using setTimeout and clearTimeout.
// - Fetch data from API only after debounce delay.
// - Display results as a list below the input.

import { useState, useEffect } from "react";

const SearchComponent = () => {
   // Store input value
   // Store API results
   // Store error message

  useEffect(() => {
    // Hint: Set a timeout to delay the API request
    // Hint: Cancel previous timeout using clearTimeout
    // Hint: Fetch data from API and update state
  }, [query]); 

  return (
    <div>
      <input
        placeholder="Search users..."
        onChange={(e) => setQuery(e.target.value)} // Hint: Update state on input change
      />
      <ul>
        {/* Hint: Map over results and display usernames */}
      </ul>

      <style>
{`

.search-container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

/* Input field styling */
.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.search-input:focus {
  border-color: #007bff;
  outline: none;
}

/* Styling for error message */
.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Results list styling */
.results-list {
  list-style: none;
  padding: 0;
}

.result-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
}

.result-item img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.result-item span {
  font-size: 16px;
  color: #333;
}

.result-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}


`}  
</style> 
    </div>
  );
};

export default SearchComponent;
