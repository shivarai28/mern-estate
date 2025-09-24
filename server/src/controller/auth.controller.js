import User from "../model/User.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/err.js";
import jwt from "jsonwebtoken";


export const register =async (req,res , next)=>{
   
    const {userName,email,password} = req.body;  
   const hashedPassword = await bcrypt.hash(password, 10);


    
    
    try {
        const newUser =await User.create({userName, email ,password: hashedPassword} )
    res.status(201).json({
        success:"true",
        message:'User registered successfully',
        user:newUser,
    }) 

    } catch (error) {
            next(error);
    }

   
}






export const login =async (req,res,next)=>{
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return next(errorHandler(400,'Invalid credentials'));
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return next(errorHandler(400,'Invalid credentials'));
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
        const {password:pwd, ...others} = user._doc;
        res.cookie('access-token',token,{
            httpOnly:true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)  })// 1 day
            .status(200)
            .json(others); 
          
        }
  

    catch (error) {
       next(error);}  

        }





        export const googleAuth = async (req, res, next) => {
            try {
                const user = await User.findOne({email:req.body.email });
                if(user){
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                     const { password:pass, ...others } = user._doc;
                    res.cookie('access-token', token, {
                        httpOnly: true,
                        expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day
                    })
                    .status(200)
                    .json(others);
                }
                else{

                    const generatePassword = Math.random().toString(36).slice(-8);
                    const hashedPassword = await bcrypt.hash(generatePassword, 10);
                    const newUser = new User({userName:req.body.name.split(" ").join()
                                                 .toLowerCase()+ Math.random().toString(36)
                                               .slice(-8)
                        ,email:req.body.email ,
                         password:hashedPassword 
                         ,avtaar:req.body.photo});
                    const savedUser = await newUser.save();
                    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
                    const { password:pass, ...others } = savedUser._doc;
                    res.cookie('access-token', token, {
                        httpOnly: true,
                        expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day
                    })
                    .status(200)
                    .json(others);
                }

            }
            catch (error) {
                next(error);
            }
        }