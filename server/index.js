import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



dotenv.config();


    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('MongoDB connected');
    }
    ).catch((err)=>{
        console.log('MongoDB connection error:', err);
    }   )


const app = express();
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



app.use(express.json());


// test api 
// app.get('/test',(req,res)=>{


//    try {
//     res.send('API is running....');
//    } catch (error) {
//     console.log(error);
//    res.status(500).send('Server error');
//    }
// });



import userRoutes from './src/routes/user.routes.js';
import authRoutes from './src/routes/auth.route.js';


// routes

app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);



// middle ware

app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json({
       success :false,
        statusCode,
        message,
    })
}   );