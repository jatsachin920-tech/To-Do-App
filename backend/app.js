require('dotenv').config();
const port=process.env.PORT||8080;
const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("you are on root directory");
});

app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`);
})