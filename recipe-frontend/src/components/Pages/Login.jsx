import React from "react";
import { useState } from "react";
// import "./App.css";
import axios from "axios";
function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])

const handleSubmit =async(event) =>{
  event.preventDefault();
  const errors = validate();
 const res =await axios.post("http://localhost:4000/users/login", {email, password})
 console.log(res.data);
}

const validate = () =>{
  const error = {};
  if(!email) {
    error.email = "Email is required";
    console.log(email);
  }else {
    error.email = "Email not valid"
  }
  return error
}
    return (
      <div>
        <h1>Login Page</h1>
        <div id="login-section">
      <h3>Sign In</h3>
      <form id="login" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" onChange={(e) =>setEmail(e.target.value) } value={email}/>

        <label for="password">Password</label>
        <input type="password" onChange={(e) =>setPassword(e.target.value)} value={password} />

       <button type="submit">Login</button>
      </form>
      <a href="#">Sign Up</a>
    </div>
      </div>
          
    );
  }
  
  export default Login;