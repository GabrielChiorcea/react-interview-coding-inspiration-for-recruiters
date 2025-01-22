// Problem:
  // Creates a React component that displays a list of users. The list of 
    // users will be obtained from an API and the users will be displayed with their 
    // name and age. Additionally, the component will have a button to sort users by age in ascending order.

// Requirements:
  // Creates a UserList component that will get the list of users from an API.
  // It uses useState and useEffect to manage state and make API requests.
  // Create a button that sorts users by age in ascending order.
  // Ensure that errors during API requests are handled correctly.
  // Each user will be displayed with their name and age.
  // Make sure you use an efficient sorting method (you don't have to sort the 
    // list on every render).


//API URL: https://jsonplaceholder.typicode.com/users

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },




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
        </div>
      );
    };
    
    export default UserList;
    
