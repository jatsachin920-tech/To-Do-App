const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
      type:String,
      required:true,
      trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique:true,
    },
    password:{
        type:String,
        min:8,
        required:true,
    }
});

module.exports=mongoose.model("User",userSchema)