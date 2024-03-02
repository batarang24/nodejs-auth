const User = require("../models/User");

module.exports.signup_get=(req,res)=>{
    res.send('signup get')
}

const errorsol=(err)=>{
  var errors={
    email:'',
    password:''
  };

  console.log(err.code);
  if (err.code === 11000) {
    errors.email = 'email is already registered';
    return errors;
  }
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;

}
module.exports.signup_post=async(req,res)=>{
    const { email, password } = req.body;

    try {
      const user = await User.create({ email, password });
      res.status(201).json(user);
    }
    catch(err) {
      const errors=errorsol(err);
      res.status(400).json(errors);
    }
}

module.exports.login_get=(req,res)=>{
    res.send('login get')
}

module.exports.login_post=(req,res)=>{
    res.send('login post')
}