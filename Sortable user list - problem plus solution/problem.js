// Problem:
// Creates a React component that displays a list of users. 
// The list of users will be obtained from an API, and the users will be displayed with their name and city. 
// Additionally, the component will have a button to sort users by city in alphabetical order.

// Requirements:
// 1. Create a UserList component that will get the list of users from an API.
// 2. Use useState and useEffect to manage state and make API requests.
// 3. Create a button that sorts users by city in alphabetical order.
// 4. Ensure that errors during API requests are handled correctly.
// 5. Each user will be displayed with their name and city.
// 6. Make sure you use an efficient sorting method (you don't have to sort the list on every render).

// API URL: https://jsonplaceholder.typicode.com/users
// Example of API response:
// [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   ...
// ]



import React from 'react';

    const UserList = () => {
      // 1. Create a state for users
      // 2. Create a state for tracking sort order
    
      // 3. Use useEffect to load users from an API
      useEffect(() => {
        // 4. Make the API request to get users and save them in the state
      }, []);
    
      // 5. Create a function to sort users by age
      const sortUsers = () => {
      };
    
      return (
        <div>
          <h2>User List</h2>
          {/* 8. Add a button to trigger sorting */}
          {/* 9. Display the users in a list */}


<style>

  {`
div {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
  text-align: center;
}

/* Title styling */
h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #4a4a4a;
}

/* Error message styling */
p {
  color: red;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Button styling */
button {
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3700b3;
}

/* User list styling */
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

li {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li span:first-child {
  font-weight: bold;
  color: #333;
}

li span:last-child {
  color: #777;
  font-style: italic;
}
`}
</style>

        </div>
      );
    };
    
    export default UserList;
    
