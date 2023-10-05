
import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from "express";
import { Types } from 'mongoose';
import Users from '../models/user.model.js';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existingUser = await getUserFromToken(req, res);

        if (!existingUser)
            return res.status(401).json({ message: "Unauthorized" });

        res.locals.user = existingUser;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export async function getUserFromToken(req: Request, res: Response) {
    const token: string = req.headers.authorization!.split(" ")[1];

    if (!token)
        return res.status(400).json({ message: "Unauthorized, no token found." });

    const { _id }: jwt.JwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
    const userId = new Types.ObjectId(_id);
    const existingUser = await Users.findById(userId);

    return existingUser;
}

export default auth;