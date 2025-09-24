import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avtar:{
        type:String,
        default:"https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw4fHxwcm9maWxlJTIwcGljfGVufDB8fHx8MTc1ODcxMzAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
}
,{timestamps:true}
);


const User = mongoose.model('User' , userSchema)


export default User;