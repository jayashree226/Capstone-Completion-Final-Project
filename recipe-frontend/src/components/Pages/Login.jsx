import React from "react";
import { useState } from "react";
// import "./App.css";

function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])

const handleSubmit =(event) =>{
  event.preventDefault();
  const errors = validate();
}

const validate = () =>{
  const erroe = {};
  if(!email) {
    errors.email = "Email is required";
  }else {
    errors.email = "Email not valid"
  }
  return errors
}
    return (
      <div>
        <h1>Login Page</h1>
        <div id="login-section">
      <h3>Sign In</h3>
      <form id="login" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" onChange={(e) =>setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" onChange={(e) =>setPassword(e.target.value)}  />

       <button>Login</button>
      </form>
      <a href="#">Sign Up</a>
    </div>
      </div>
          
    );
  }
  
  export default Login;