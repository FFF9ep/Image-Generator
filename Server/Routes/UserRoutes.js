import { registerUser, loginUser } from "../Controllers/UserController.js";
import express from 'express';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
