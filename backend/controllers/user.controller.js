import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import Validator from "validator";
import { isStrongPassword } from "../utils/validations/custom_validators.js";
import jwt from "jsonwebtoken";
import { getUserFromToken } from "../middleware/auth.js";
import { constants } from "../utils/constants.js";


/**
 * 
 * A class to handle all user related controllers 
 */
export class userControllers {

    /**
     * register controller to handle user registration
     * @param {*} req
     * @param {*} res
     * @returns  user details if user is registered successfully. If not error message.
     */
    static async register(req, res) {
        const { userName, email, password, interests, country } = req.body;

        try {
            if (!userName || !email || !password)
                return res.status(400).json({ message: "Please fill in all fields" });

            if (!Validator.isEmail(email))
                return res.status(400).json({ message: "Please enter a valid email" });

            const existingUser = await User.findOne({ email });

            if (existingUser)
                return res.status(400).json({ message: "User by that email already exists" });

            if (!isStrongPassword(password))
                return res.status(400).json({ message: "Password is not strong enough" });

            // Saves the hashed password in the database
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                userName, email,
                password: hashedPassword,
                interests: interests,
                country: country,
            });

            await newUser.save();
            // sign a token and send it to the user
            const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

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
            res.status(500).json({ message: "Something went wrong while registering." });
        }
    }


    /**
     * login controller to handle user login
     * @param {*} req 
     * @param {*} res 
     * @returns  user details if user exists and has valid credentials. If not error message.
     */
    static async login(req, res) {
        // get the email and password from the request body
        const { email, password } = req.body;

        try {
            if (!email || !password)
                return res.status(400).json({ message: "Please fill in all fields" });

            if (!Validator.isEmail(email))
                return res.status(400).json({ message: "Please enter a valid email" });

            const existingUser = await User.findOne({ email });

            if (!existingUser)
                return res.status(400).json({ message: "User does not exist" });

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordCorrect)
                return res.status(400).json({ message: "Invalid credentials" });

            // sign a token and send it to the user
            const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET);

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

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns user details if user exists. If not error message.
     */
    static async getUser(req, res) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const existingUser = await getUserFromToken(req, res);
            if (!existingUser)
                return res.status(401).json({ message: "Unauthorized" });

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

    /**
     * 
     * @param {*} req
     * @param {*} res
     * @returns user details if updated user is updated successfully. If not error message.
     * 
     */
    static async updateUser(req, res) {
        // updates the user's username
        const { userName, interests, country } = req.body;
        const token = req.headers.authorization.split(" ")[1];

        try {
            const existingUser = await getUserFromToken(req, res);
            if (!existingUser)
                return res.status(401).json({ message: "Unauthorized" });

            // can update username, interests and country
            if (userName)
                existingUser.userName = userName;

            if (interests)
                existingUser.interests = interests;

            if (country)
                existingUser.country = country;

            await existingUser.save();
            // res.status(200).json({ user: { userName: existingUser.userName, email: existingUser.email } });

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

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns success response if user deletion is successfull. If not an error response.
     */
    static async deleteUser(req, res) {
        try {
            const existingUser = await getUserFromToken(req, res);
            if (!existingUser)
                return res.status(401).json({ message: "Unauthorized" });

            await User.findByIdAndDelete(existingUser._id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong while deleting user." });
        }
    }

    static async getCategories(req, res) {
        res.status(200).json({ categories: constants.eventCategories });
    }
}