const express = require("express")
const {registerUser ,logInUser , currentUser} = require("../controllers/userController");
const validateToken = require("../middleware/validateToken");
const route = express.Router()
 
route.route(`/register`).post(registerUser);
route.route(`/login`).post(logInUser);
// route.route(`/current` , validateToken).post(currentUser);
route.get(`/current` , validateToken , currentUser)

module.exports = route