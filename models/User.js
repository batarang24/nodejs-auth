const mongoose=require('mongoose');
const {isEmail}=require('validator')

const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: [true,"Enter the email"],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Enter a valid email"]
    },
    password:{
        type: String,
        required: [true,"Enter a password"],
        minlength: [6,"Minimum length should be 6"],
    }
});

const User=mongoose.model('user',userSchema);

module.exports=User;