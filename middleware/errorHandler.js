const {constants} = require("../constants") 
const errorHandler = (err , req , res , next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
 
    switch (statusCode) {
        case constants.VALISDATION_ERROR:
            res.json({
                title : "Validation failed",
                error : err.message,
                stackTrace : err.stack
            })
            break;
            case constants.NOT_FOUND : 
            res.json({
                title : "Not Found",
                error : err.message,
                stackTrace : err.stack
            })
    
        default:
            break;
    }

   
}
module.exports = errorHandler