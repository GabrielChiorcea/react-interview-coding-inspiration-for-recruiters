import { useState, useEffect } from "react";

export default function Pagination() {
  // State for loaded data, the current page, and the number of posts per page
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Fetch data only once on component mount
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []); // Executes only once when the component mounts


  // Determine the posts for the current page
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const currentPosts = posts.slice(start, end);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Buttons for page navigation
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination-container">
      {/* List the current posts */}
      <ul className="pagination-list">
        {currentPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Navigation buttons */}
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <style>
        {`
          /* Main container */
          .pagination-container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          /* Posts list */
          .pagination-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .pagination-list li {
            padding: 15px;
            margin-bottom: 10px;
            background-color: #f8f8f8;
            border-radius: 5px;
            border: 1px solid #e0e0e0;
          }

          .pagination-list li h3 {
            margin: 0 0 10px;
            color: #333;
          }

          .pagination-list li p {
            margin: 0;
            color: #666;
            line-height: 1.5;
          }

          /* Container for pagination controls */
          .pagination-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          }

          /* Button styling */
          .pagination-controls button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .pagination-controls button:hover:not(:disabled) {
            background-color: #0056b3;
          }

          .pagination-controls button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
          }

          /* Style for pagination text */
          .pagination-controls span {
            font-weight: bold;
            color: #333;
          }
        `}
      </style>
    </div>
  );
}
