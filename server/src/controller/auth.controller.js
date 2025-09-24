import User from "../model/User.model.js";
import bcrypt from "bcryptjs";




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






export const login =async (req,res)=>{
    res.json({message:'login controller'});
}