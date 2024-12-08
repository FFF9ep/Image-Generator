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

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message: "User Not Found!"})
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)
            res.json({success:true, token, user: {name: user.name}})

        } else {
            return res.json({success:false, message: "Invalid Email or Password!"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}