import User from "../model/User.model.js";
import bcrypt from "bcryptjs";




export const register =async (req,res , next)=>{
   
    const {userName,email,password} = req.body;  
    const hashedPassword =  bcrypt.hashSync(password,10);


    const newUser = new User({userName, email ,password: hashedPassword} )

    try {
      await newUser.save() 
   
    res.status(201).json({
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