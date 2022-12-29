const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const secretKey = "Contact-Manager"
exports.userRegister = async (req,res)=>{
    
    try {
        const schema = joi.object({
            fullname:joi.string().required().min(3).alphanum(),
            email:joi.string().email().required(),
            password:joi.string().min(8).max(16).required(),
            repassword:joi.ref('password')
        })
        
        const userField = await schema.validateAsync(req.body);
        try {
            let user = await User.findOne({email:userField.email})
            if(!user) {
                user = new User(userField)
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password,salt);
                user.repassword = await bcrypt.hash(user.repassword,salt);
                await user.save();
                res.status(200).json({
                    message:"User registered successfully",
                    user : user
                })
            } else {
                res.status(400).json({
                    message:"User already exists"
                })
            } 
        } catch (err) {
            res.status(500).json({
                message:"Something went wrong ",
                error: err.message
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong ",
            error: err.message
        })
        
    }
}

exports.userLogin = async (req,res) => {
    
    const loginSchema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })
    try {

        const loginField = await loginSchema.validateAsync(req.body)
        
        let user = await User.findOne({email:loginField.email})
        if(!user ) {
            res.status(400).json({
                message : "Username/Password does not match"
            })
        } else {
            const is_equal = await bcrypt.compare(loginField.password,user.password)
            if(is_equal) {
                const payload = {
                    userData:{
                        id:user._id
                    }
                }

                const token = jwt.sign(payload,secretKey,{expiresIn:7200});
                res.status(200).json({
                    message:"Login successful",
                    user:{id:user._id,name:user.fullname},
                    token
                })
            } else {
                res.status(400).json({
                    message : "Username/Password does not match"
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
        
    }
}