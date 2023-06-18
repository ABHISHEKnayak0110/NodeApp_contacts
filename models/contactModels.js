const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
    {
        userId : {
            type: mongoose.Schema.Types.ObjectId,
            required: true , 
            ref :"User"
            
        },
        name : {
            type:String,
            required: [true , "Please Provide Name"]
        },
        email : {
            type:String,
            required: [true , "Please Provide Email"]
        },
        number : {
            type:String,
            required: [true , "Please Provide Number"]
        }
    },
     {
        timestamps : true
    }
)
module.exports = mongoose.model("Contacts" , contactSchema)