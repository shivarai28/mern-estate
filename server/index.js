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



// user test route 

app.use('/api/users',userRoutes);


