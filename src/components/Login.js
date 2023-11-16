import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      await auth.signInWithEmailAndPassword(email,password);
      navigate("/home");
    }catch(error){
      console.log("error code",error);
      if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }    
  };
  return (
    <div className="login">
      <img
        src="assets/shopify.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
