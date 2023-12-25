import User from "../models/user.model";
import UnverifiedEmail from "../models/unverifiedUserEmail.model";
import bcrypt from "bcryptjs";
import Validator from "validator";
import { PasswordNotStrongEnoughError, checkPasswordStrength } from "../utils/validations/custom_validators";
import jwt from "jsonwebtoken";
import { getTokenFromRequest, getUserFromToken } from "../middleware/auth";
import { constants } from "../utils/constants";
import { Request, Response } from "express";
import { sendEmail } from "../utils/email/mail-helper";
import { confirmEmailTemplate } from "../utils/email/confirmEmailTemplates";
import generateRandomConfirmationCode from "../utils/random-number-generator";

/**
 * 
 * A class to handle all user related controllers 
 */
export class userControllers {


    static async sendCode(req: Request, res: Response) {
        try {
            const { email } = req.body;

            if (!Validator.isEmail(email)) {
                res.status(400).json({ message: "Please enter a valid email" });
                return;
            }


            const existingUser = await User.findOne({ email });
            const verificationCode = generateRandomConfirmationCode();

            if (existingUser) {
                res.status(400).json({ message: "User by that email already exists" });
                return;
            }
 
            const existingUnverifiedUser = await UnverifiedEmail.findOne({ email });

            if (existingUnverifiedUser) {
                // update the verification code for the existing unverified user email
                existingUnverifiedUser.verificationCode = verificationCode;
                await existingUnverifiedUser.save();
            } else {
                // create a new unverified user email
                const newUnverifiedUser = new UnverifiedEmail({ email, verificationCode });
                await newUnverifiedUser.save();
            }

            await sendEmail(email, "Verification Code", confirmEmailTemplate(verificationCode));
            res.status(200).json({ message: "Verification code sent successfully. Please check your email." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while sending verification code." });
        }

    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns a signed registration token from the email if the verification code is correct.
     */
    static async verifyEmail(req: Request, res: Response) {
        try {
            const { email, verificationCode } = req.body;

            if (!email || !verificationCode) {
                res.status(400).json({ message: "Please fill in all fields" });
                return;
            }

            const existingUnverifiedUser = await UnverifiedEmail.findOne({ email });
            if (!existingUnverifiedUser) {
                res.status(400).json({ message: "User by that email does not exist" });
                return;
            }

            // check if the code has expired or not
            const timeElapsed = Date.now() - existingUnverifiedUser.updatedAt.getTime();
            const timeElapsedInMinutes = Math.floor(timeElapsed / 1000 / 60);
            if (timeElapsedInMinutes > 10) {
                // delete the unverified user email
                await existingUnverifiedUser.deleteOne();
                res.status(400).json({ message: "Verification code has expired." });
                return;
            }

            if (existingUnverifiedUser.verificationCode !== verificationCode) {
                res.status(400).json({ message: "Invalid verification code" });
                return;
            }

            const token = jwt.sign(
                { email: existingUnverifiedUser.email },
                process.env.EMAIL_JWT_SECRET!,
                { 'expiresIn': "3 days" }
            );

            await existingUnverifiedUser.deleteOne();

            res.status(200).json({ token, message: "Email verified successfully" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while verifying email." });
        }
    }

    static async register(req: Request, res: Response) {

        try {
            const { userName, email, password, interests, country } = req.body;
            const registrationToken = getTokenFromRequest(req);

            if (!registrationToken) {
                res.status(400).json({ message: "No token found!" });
                return;
            }

            if (!userName || !email || !password) {
                res.status(400).json({ message: "Please fill in all fields" });
                return;
            }

            if (!Validator.isEmail(email)) {
                res.status(400).json({ message: "Please enter a valid email" });
                return;
            }


            const { email: tokenEmail }: jwt.JwtPayload = jwt.verify(registrationToken, process.env.EMAIL_JWT_SECRET!) as jwt.JwtPayload;

            if (email !== tokenEmail) {
                res.status(400).json({ message: "Invalid token" });
                return;
            }
            checkPasswordStrength(password);

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                userName, email,
                password: hashedPassword,
                interests: interests,
                country: country,
            });

            await newUser.save();
            const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET!);

            res.status(200).json({
                token, user: {
                    userName: newUser.userName,
                    email: newUser.email,
                    interests: newUser.interests,
                    country: newUser.country,
                }
            });
        } catch (error) {
            console.log(error);
            if (error instanceof PasswordNotStrongEnoughError) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Something went wrong while registering." });
            }
        }
    }


    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({ message: "Please fill in all fields" });
                return;
            }

            if (!Validator.isEmail(email)) {
                res.status(400).json({ message: "Please enter a valid email" });
                return;
            }

            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                res.status(400).json({ message: "User does not exist" });
                return;
            }

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordCorrect) {
                res.status(400).json({ message: "Invalid credentials" });
                return;
            }
            const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET!);

            res.status(200).json({
                token, user: {
                    userName: existingUser.userName,
                    email: existingUser.email,
                    interests: existingUser.interests,
                    country: existingUser.country,
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while logging in." });
        }
    }


    static async getUser(req: Request, res: Response) {
        try {
            const token = getTokenFromRequest(req);

            if (!token) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            const existingUser = await getUserFromToken(token);

            if (!existingUser) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            res.status(200).json({
                token, user: {
                    userName: existingUser.userName,
                    email: existingUser.email,
                    interests: existingUser.interests,
                    country: existingUser.country,
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong while getting user." });
        }
    }


    static async updateUser(req: Request, res: Response) {
        try {
            const { userName, interests, country } = req.body;
            const token = getTokenFromRequest(req);

            if (!token) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            const existingUser = await getUserFromToken(token);

            if (!existingUser) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            // can update username, interests and country
            existingUser.userName = userName ?? existingUser.userName;
            existingUser.interests = interests ?? existingUser.interests;
            existingUser.country = country ?? existingUser.country;

            await existingUser.save();

            res.status(200).json({
                token, user: {
                    userName: existingUser.userName,
                    email: existingUser.email,
                    interests: existingUser.interests,
                    country: existingUser.country,
                }
            });
        } catch (error) {
            console.info(error);
            res.status(500).json({ message: "Something went wrong while updating user." });
        }
    }


    static async deleteUser(req: Request, res: Response) {
        try {
            const token = getTokenFromRequest(req);
            if (!token) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            const existingUser = await getUserFromToken(token);

            if (!existingUser) {
                res.status(400).json({ message: "Unauthorized" });
                return;
            }

            await User.findByIdAndDelete(existingUser._id);

            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while deleting user." });
        }
    }

    static async getCategories(_: Request, res: Response) {
        try {
            res.status(200).json({ categories: constants.eventCategories });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while getting list of categories of interest" });
        }
    }
}