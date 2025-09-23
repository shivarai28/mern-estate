import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



dotenv.config();


const app = express();


    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('MongoDB connected');
    }
    ).catch((err)=>{
        console.log('MongoDB connection error:', err);
    }   )





    

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running on port 3000');
})


