//
// Task: Implement a React form with live validation.
// The form should have two fields: email and password.
// - The email should be a valid email format, accepting only gmail and yahoo domains after the @.
// - The password should be at least 8 characters long and contain at least one special character.
// - Escape HTML and SQL injection attempts.
// - The form should have a submit button.
// - Show validation messages in real-time. Like:

/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="24"
    fill="green"
    >
    <path d="M9 16.2l-4.2-4.2L3 13.8 9 19.8 21 7.8l-1.8-1.8z"/>
</svg> */

//
// Instructions:
// - Complete the missing validation logic.
// - Display validation messages under each field.
// - Style the input fields based on validity (e.g., red border for errors).





import React, { useEffect, useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const defaultEmail = "test@gmail.com";
  const defaultPassword = "Qa1Ws3Qa1Ws3";



  useEffect(() => {

  }, [email]);

  useEffect(() => {

  }, [password]);

  const handleChange = (e) => {
    const { name, value } = e.target;

  };

  const submit = (e) => {
    e.preventDefault();

    }
  };

  return (
    <div className="container">
      <h2>Live Form Validation</h2>
      <form onSubmit={submit}>
        <div className="form-container">
          <div>
            {/* Validation message should be here */}
            <input
              placeholder=
              type=
              name=
              value=
              onChange=
            />
            {/* Validation message should be here */}
            </div>
          <div>
            <input
              placeholder=
              type=
              name=
              value=
              onChange=
            />
            {/* Validation message should be here */}
            </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;



// <style>{`
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f5f5f5;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
//       margin: 0;
//     }

//     .container {
//       background: #ffffff;
//       padding: 20px;
//       border-radius: 10px;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//       width: 400px;
//     }

//     .form-container {
//       display: flex;
//       flex-direction: column;
//     }

//     h2 {
//       text-align: center;
//       color: #333;
//     }

//     input {
//       padding: 10px;
//       border: 1px solid #ccc;
//       border-radius: 5px;
//       font-size: 16px;
//       transition: 0.3s;
//     }

//     input:focus {
//       border-color: #6200ea;
//       outline: none;
//       box-shadow: 0 0 5px rgba(98, 0, 234, 0.5);
//     }

//     input.error {
//       border-color: red;
//       background: #ffe6e6;
//     }

//     p {
//       color: red;
//       font-size: 14px;
//       margin-top: 5px;
//     }

//     button {
//       background-color: #6200ea;
//       color: white;
//       padding: 10px;
//       border: none;
//       border-radius: 5px;
//       cursor: pointer;
//       font-size: 16px;
//       margin-top: 10px;
//     }

//     button:hover {
//       background-color: #3700b3;
//     }
//   `}</style>
