import User from "../models/User.model.js"
import bcryptjs from "bcryptjs";
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
        next(errorHandler(550, 'error from the function'));
    }
};