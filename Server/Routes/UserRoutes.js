import { registerUser, loginUser, userCredits } from "../Controllers/UserController.js";
import express from 'express';
import userAuth from "../Middlewares/Auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/credits', userAuth , userCredits);

export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
