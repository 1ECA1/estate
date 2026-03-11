import User from "../models/User.model.js"
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword =  bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
   
    
    // Log it to your terminal to verify
    // console.log("Received data:", req.body);

    try {
         await newUser.save();
        // This sends a response back to Postman so the request finishes
        res.status(201).json({
            message: "User created successfully!",
            data: { username, email }
        });
    } catch (error) {
    //   next(500).json({ message: error.message });
        next(error);
    }
};

export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET,);
        const { password: pass, ...rest } = validUser._doc;

        res
        .cookie('access_token', token, { httpOnly: true,})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error);
    }

}