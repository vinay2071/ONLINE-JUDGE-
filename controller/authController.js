const user = require('../models/user_detail');
const jwt = require('jsonwebtoken');

//handle errors
const handleErrors = (err) =>{
  console.log(err.message,err.code)
  let errors = {email:'',password:''};

    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }

    // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if(err.message.includes('user validation failed')){
    console.log(err)
    Object.values(err.errors).forEach(({properties}) =>{
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}


const maxAge = 3*24*60*60*60;
const createToken = (id)=>{
  return jwt.sign({id}, 'OJ', {
    expiresIn:maxAge
  });
} 


module.exports.signup_get = (req,res) =>{
    res.render('signup')
}

module.exports.login_get = (req,res) =>{
    res.render('login')
}


module.exports.signup_post = async(req,res) =>{
    const {email,password} = req.body;


     try{
           const user_data = await user.create({email,password})
           console.log(user_data._id);
           const token = createToken(user_data._id)
           res.cookie('jwt', token, {httpOnly:true, maxAge: maxAge*1000});
           res.status(201).json(user_data);
     }
     catch(err){
       const errors =  handleErrors(err);
       res.status(400).json({errors})
     }
}


module.exports.longin_post =async (req,res) =>{
    const {email,password} = req.body
    try {
      const loggedUsers_data = await user.login(email, password);
      const token = createToken(loggedUsers_data._id)
      res.cookie('jwt', token, {httpOnly:true, maxAge: maxAge*1000});
      res.status(200).json({ loggedUsers_data: loggedUsers_data._id });
    } catch (err) {
      const errors =  handleErrors(err);
      res.status(400).json({errors})
    }
} 

module.exports.logout_get = (req,res) =>{
  res.cookie('jwt', '',{maxAge:1});
  res.redirect('/home');
}
