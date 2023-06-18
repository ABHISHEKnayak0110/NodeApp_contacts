const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/usersModals")
const registerUser =  asyncHandler(async(req, res) => {
  const {username , email , password} = req.body
 if(!username || !email || !password){
   res.status(400)
   throw new Error("All fields are mandatory !")
 }
 const availableUser = await User.findOne({email})
 if(availableUser){
  res.status(400)
  throw new Error("Already Register !")
 }
 //hasPassword 
 const hashPassword = await bcrypt.hash(password ,10);
 console.log("hash" , password ,hashPassword )
 const userCreate = await User.create({
   email, username, password : hashPassword
 })
 if(userCreate){
   res.status(201).json({
     id : userCreate.id,
     email : userCreate.email
   })
 }
 else{
   res.status(400)
   throw new Error("User data is not valid ")
 }
 console.log("user" , userCreate) 
  res.status(200).json({message : "register success"});
});
const logInUser = asyncHandler(async(req, res) => {
  const {email , password} = req.body
  
   
  if(!email || !password){
    res.status(400)
    throw new Error("All fileds are mandatory ")
  }
  const user = await User.findOne({email});
  console.log("hey ", user)
  //compare password with hash
if(user && (await bcrypt.compare(password , user.password))){
  const accessToken = jwt.sign({
    user : {
     username : user.name,
     email : user.email,
     id : user.id

    }
  } , process.env.ACCESS_TOKEN_SECRET , {
    expiresIn : "10m"
  })
  res.status(200).json({accessToken})
}
else{
  res.status(401)
  throw new Error("email password not valid ")
}

  res.status(200).json({message : "login user "})
}
)

const currentUser = asyncHandler(async(req, res) => {
  res.status(200).json(req.user)
}
)

module.exports ={
    registerUser,
    logInUser,
    currentUser
}
