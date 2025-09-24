import express from 'express';
import { googleAuth, login, register } from '../controller/auth.controller.js';



const router = express.Router();

 router.post("/register", register)

 router.post("/login",login)

router.post("/google", googleAuth)
 export default router