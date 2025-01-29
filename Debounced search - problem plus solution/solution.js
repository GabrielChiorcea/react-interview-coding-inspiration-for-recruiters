// Task: Implement a debounced search input that queries the GitHub API.
// API: https://api.github.com/search/users?q=query
// Hints:
// - Use useState to store the input value and results.
// - Use useEffect to trigger the API call after a 1000ms delay.
// - Implement debounce using setTimeout and clearTimeout.
// - Fetch data from API only after debounce delay.
// - Display results as a list below the input.
// {
//     "total_count": 1,
//     "incomplete_results": false,
//     "items": [
//       {
//         "login": "GabrielChiorcea",
//         "id": 107279421,
//         "node_id": "U_kgDOBmT0PQ",
//         "avatar_url": "https://avatars.githubusercontent.com/u/107279421?v=4",
//         "gravatar_id": "",
//       }
//     ]
//   }

import { useState, useEffect } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState(""); // Store input value
  const [results, setResults] = useState([]); // Store API results
  const [error, setError] = useState(""); // Store error message

  const HTTP_TIMEOUT = 10000; 
  const URL = "https://api.github.com/search/users?q=";

  useEffect(() => {
    // Hint: Set a timeout to delay the API request
    // Hint: Cancel previous timeout using clearTimeout
    // Hint: Fetch data from API and update state
    if (!query) return; 

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), HTTP_TIMEOUT);

    const getUser = async () => {
      try {
        const response = await fetch(`${URL}${query}`, {
          signal: controller.signal,
        }).then((res) => res.json());

        
        if (controller.signal.aborted) return;

        setResults(response.items || []); 
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          setError("An error occurred");
        }
      } finally {
        clearTimeout(timeout); 
      }
    };

    getUser();

    // Cleanup: cancel request if component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [query]); 

  return (
    <div className="search-container">
      {error && <p className="error-message">{error}</p>}
      <h3>Search users by name, try "GabrielChiorcea"...</h3>
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update state on input change
        placeholder="Enter username"
      />
      {/* Hint: Map over results and display usernames and avatar */}
      <ul className="results-list">
        {results.length > 0 ? (
          results.map((user) => (
            <li className="result-item" key={user.id}>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="avatar"
              />
              <span>{user.login}</span>
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
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
