const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
    {
        username : {
            type:String,
            required: [true , "Please Provide User Name"]
        },
        email : {
            type:String,
            required: [true , "Please Provide Email"],
            unique :[true , "Email already exist"]
        },
        password : {
            type:String,
            required: [true , "Please Provide Password"]
        }
    },
     {
        timestamps : true
    }
)
module.exports = mongoose.model("Users" , usersSchema)