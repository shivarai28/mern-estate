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
        default:"https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fwww.k12digest.com%2Fwp-content%2Fuploads%2F2024%2F03%2F1-3-550x330.jpg&imgrefurl=https%3A%2F%2Fwww.k12digest.com%2Fimg-academy-forging-futures-at-the-pinnacle-of-sports-education%2F&docid=DhmNIDzoUrrsaM&tbnid=MbAKX_tI4Hch0M&vet=12ahUKEwjJ1L3NlPGPAxW7XmwGHcXkO7UQM3oECCAQAA..i&w=550&h=330&hcb=2&ved=2ahUKEwjJ1L3NlPGPAxW7XmwGHcXkO7UQM3oECCAQAA"
    }
}
,{timestamps:true}
);


const User = mongoose.model('User' , userSchema)


export default User;