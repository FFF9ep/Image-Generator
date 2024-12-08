import userModel from "../Models/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({success:false, message: "Please fill all the fields"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "1d"})

        res.json({success:true, token, user: {name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}
