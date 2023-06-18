const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization ;
    if(authHeader &&  authHeader.startWith("Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token , process.env.ACCESS_TOKEN_SECRET, (err , decode) => {
            if(err){
                res.status(401)
                throw new Error("user is not authorised !")
            }
            req.user =decode.user
            console.log(decode)
            next()
        })
        if(!token){
            res.status(401);
            throw new Error("User is not authorised")
        }
    }
})
module.exports = validateToken