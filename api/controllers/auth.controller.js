import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    try{
        const { username, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser =new User({ username, email, password });
        await newUser.save()
        res.status(201).json('User created succesfully!');
    }catch(error){
    // console.log("Error in signup controller:",error.message);
        next(error);
    }

};