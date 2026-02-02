import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate(); 

  // Ensure initial state is empty strings
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
 
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Login Successful! ✅");
        localStorage.setItem("username", data.user.username);

        setTimeout(() => {
          navigate("/chat");
        }, 1500);
      } else {
        toast.error(data.message + " ❌");
      }
    } catch (err) {
      console.error("Error:", err); // Fixed: 'err' use kiya jo catch mein define hai
      toast.error("Server connect nahi ho pa raha!");
    }
  };

  return (
    <div className="signup-container">
      {/* Added autoComplete="off" here */}
      <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Login</h2>
        
        <div className="input-group">
          <label htmlFor="username">UserName</label>
          <input 
            type="text" 
            id="username" 
            autoComplete="off" // Fixed
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            autoComplete="new-password" // Helps bypass browser autofill
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••" 
            required 
          />
        </div>
        <button type="submit" className="signup-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;