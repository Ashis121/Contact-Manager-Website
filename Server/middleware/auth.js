const jwt = require('jsonwebtoken');
const secretKey = "Contact-Manager";

exports.check =async(req,res,next)=>{

    token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({
            message:"Unauthorized Request!! Token is missing"
        })
    } else {
        try{
            await jwt.verify(token,secretKey);
            next();
        }catch(err){
            return res.status(401).json({
                message:"Unauthorized Request!! Bad Token",
                error:err.message
            })
        }
    }
}