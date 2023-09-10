
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import Users from '../models/user.model.js';

const auth = async (req, res, next) => {
    try {
        const existingUser = await getUserFromToken(req, res, next);

        if (!existingUser)
            return res.status(401).json({ message: "Unauthorized" });

        // res.locals.user = existingUser;
        req.user = existingUser;

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
}

export async function getUserFromToken(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    // checks if token is present inside the header
    if (!token) {
        return res.status(400).json({ message: "Unauthorized, no token found." });
    }

    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const userId = new Types.ObjectId(_id);
    const existingUser = await Users.findById(userId);

    return existingUser;
}

export default auth;