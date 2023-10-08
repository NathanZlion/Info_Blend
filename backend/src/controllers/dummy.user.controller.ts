import { constants } from "../utils/constants";
import { Request, Response } from "express";
import { DUMMYUSER, DUMMYTOKEN } from "../utils/fixtures/dummyUser";


export class dummyUserControllers {

    static async register(req: Request, res: Response) {
        try {
            const { userName, email, password } = req.body;

            if (!userName || !email || !password)
                return res.status(400).json({ message: "Please fill in all fields: username, email and password to create an account" });

            res.status(200).json({ token: DUMMYTOKEN, user: DUMMYUSER });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while registering." });
        }

    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password)
                return res.status(400).json({ message: "Please fill in all fields: email and password" });

            res.status(200).json({ token: DUMMYTOKEN, user: DUMMYUSER });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while logging in." });
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            res.status(200).json({ token: DUMMYTOKEN, user: DUMMYUSER });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while getting user." });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const { userName, interests, country } = req.body;
            res.status(200).json({
                token: DUMMYTOKEN,
                user: {
                    userName: userName || DUMMYUSER.userName,
                    interests: interests || DUMMYUSER.interests,
                    country: country || DUMMYUSER.country,
                    email: DUMMYUSER.email,
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while updating user." });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        res.status(200).json({ message: "User deleted successfully" });
    }

    static async getCategories(req: Request, res: Response) {
        res.status(200).json({ categories: constants.eventCategories });
    }
}