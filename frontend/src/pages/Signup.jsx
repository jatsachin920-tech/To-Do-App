import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Signup.css';

const Signup= () => {
 const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
     try{
      const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), 
    });
    const data = await response.json();
    console.log("Backend se ye aaya:", data);

    if (response.ok) {
    toast.success("Signup Successful! ✅");

     setTimeout(() => {
      navigate("/chat");
     }, 1500);

    } else {
     toast.error(data.message+"❌" || data.Error+"❌" || "Kuch galat hua!+ ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Server connect nahi ho pa raha! ❌");
  }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username}
            onChange={handleChange}
            placeholder="create username" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="student@example.com" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password}
            onChange={handleChange}
            placeholder="create password" 
            required 
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup