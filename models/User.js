const mongoose=require('mongoose');
const {isEmail}=require('validator')
const bcrypt=require('bcrypt');

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

userSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt();
   // console.log(salt)
   console.log(User) 
   
   this.password=await bcrypt.hash(this.password,salt);
    
    console.log(this.password)
    next();
})

userSchema.statics.login= async function(email,password){
    const user=await this.findOne({email});
    if(user)
    {
        const compare=bcrypt.compare(password,user.password);
        if(compare)
        {
            return user;
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}

const User=mongoose.model('user',userSchema);

module.exports=User;