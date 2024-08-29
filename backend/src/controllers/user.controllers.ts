import { NextFunction, Request, Response } from 'express';
import { User as UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from '../utils/generateToken';

export const signInController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'All fields are required!' });
        }
        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const passwordCheck = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!passwordCheck) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        if (existingUser) {
            generateTokenAndSetCookie(existingUser._id, res);
        }

        res.status(201).json(existingUser);
    } catch (error) {
        console.error('ERROR: ', error);
        res.status(500).json({ message: 'Error in signInController' });
    }
};

export const signUpController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password, role } = req.body;
    try {
        if (!email || !password || !role) {
            return res
                .status(400)
                .json({ message: 'All fields are required!' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: 'User with this email already exists!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
            role
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
        }

        res.status(201).json(newUser);
    } catch (error) {
        console.error('ERROR: ', error);
        res.status(500).json({ message: 'Error in signUpController' });
    }
};

export const signOutController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.cookie('jwt_token', '', { maxAge: 0 });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log('Error in http://localhost:8000/api/user/sign-in', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
