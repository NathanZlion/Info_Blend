
import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from "express";
import { Types } from 'mongoose';
import Users, { UserDocument } from '../models/user.model';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = getTokenFromRequest(req);
        if (!token)
            return res.status(401).json({ message: "Unauthorized" });

        const existingUser = await getUserFromToken(token);

        if (!existingUser)
            return res.status(401).json({ message: "Unauthorized" });

        res.locals.user = existingUser;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export function getTokenFromRequest(req: Request) : string | undefined{
    try {
        const token: string = req.headers.authorization!.split(" ")[1];
        return token;
    } catch (error) {
        return undefined;
    }
}

export async function getUserFromToken(token: string) : Promise<UserDocument|null>{
    const { _id }: jwt.JwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
    const userId = new Types.ObjectId(_id);
    const existingUser = await Users.findById(userId);

    return existingUser;
}

export default auth;