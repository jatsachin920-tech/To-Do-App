require('dotenv').config();
const port=process.env.PORT||8080;
const express=require("express");
const mongoose = require('mongoose');
const User = require('./models/user.js');
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const DB_URL = process.env.ATLASDB_URL;
mongoose.connect(DB_URL)
  .then(() => console.log("MongoDB Connected Successfully! ✅"))
  .catch((err) => console.log("Connection Error: ❌", err));

app.get("/",(req,res)=>{
    res.send("you are on root directory");
});

app.post("/signup",async(req,res)=>{
    try{
    const{username,email,password}=req.body;
    const newUser=new User({username,email,password});
     await newUser.save();
     res.status(201).json({message:"User created successfully! ✅"});
    }catch(err){
        console.error(err);
        if (err.code === 11000) {
            return res.status(400).json({ message: "Email or Username already used!" });
        }
        res.status(500).json({message:"Server error: Signup nahi ho paya."});
    }
})

app.post("/login",async(req,res)=>{
    try{
  const{username,password}=req.body;
  const user=await User.findOne({username:username})

  if(!user){
    return res.status(404).json({message:"user not found signup first!"});
  }
  if(user.password!==password){
    return res.status(401).json({message:"wrong password"});
  }
  res.status(200).json({
    message:"Login Successful! ✅",
    user:{
        username:user.username
    },
  });
}catch(err){
     res.status(500).json({Error:err});
}
})

app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`);
})