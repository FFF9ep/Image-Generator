import { registerUser, loginUser, userCredits, paymentRazorpay } from "../Controllers/UserController.js";
import express from 'express';
import userAuth from "../Middlewares/Auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', userAuth , userCredits);
userRouter.post('/pay-razor', userAuth , paymentRazorpay);

export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
