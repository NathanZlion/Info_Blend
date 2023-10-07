"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_model_js_1 = __importDefault(require("../models/user.model.js"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validator_1 = __importDefault(require("validator"));
const custom_validators_js_1 = require("../utils/validations/custom_validators.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_js_1 = require("../middleware/auth.js");
const constants_js_1 = require("../utils/constants.js");
/**
 *
 * A class to handle all user related controllers
 */
class userControllers {
    /**
     * register controller to handle user registration
     * @param {*} req
     * @param {*} res
     * @returns  user details if user is registered successfully. If not error message.
     */
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, email, password, interests, country } = req.body;
            try {
                if (!userName || !email || !password)
                    return res.status(400).json({ message: "Please fill in all fields" });
                if (!validator_1.default.isEmail(email))
                    return res.status(400).json({ message: "Please enter a valid email" });
                const existingUser = yield user_model_js_1.default.findOne({ email });
                if (existingUser)
                    return res.status(400).json({ message: "User by that email already exists" });
                if (!(0, custom_validators_js_1.isStrongPassword)(password))
                    return res.status(400).json({ message: "Password is not strong enough" });
                // Saves the hashed password in the database
                const salt = yield bcryptjs_1.default.genSalt(10);
                const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
                const newUser = new user_model_js_1.default({
                    userName, email,
                    password: hashedPassword,
                    interests: interests,
                    country: country,
                });
                yield newUser.save();
                // sign a token and send it to the user
                const token = jsonwebtoken_1.default.sign({ _id: newUser._id }, process.env.JWT_SECRET);
                res.status(200).json({
                    token, user: {
                        userName: newUser.userName,
                        email: newUser.email,
                        interests: newUser.interests,
                        country: newUser.country,
                    }
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Something went wrong while registering." });
            }
        });
    }
    /**
     * login controller to handle user login
     * @param {*} req
     * @param {*} res
     * @returns  user details if user exists and has valid credentials. If not error message.
     */
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // get the email and password from the request body
            const { email, password } = req.body;
            try {
                if (!email || !password)
                    return res.status(400).json({ message: "Please fill in all fields" });
                if (!validator_1.default.isEmail(email))
                    return res.status(400).json({ message: "Please enter a valid email" });
                const existingUser = yield user_model_js_1.default.findOne({ email });
                if (!existingUser)
                    return res.status(400).json({ message: "User does not exist" });
                const isPasswordCorrect = yield bcryptjs_1.default.compare(password, existingUser.password);
                if (!isPasswordCorrect)
                    return res.status(400).json({ message: "Invalid credentials" });
                // sign a token and send it to the user
                const token = jsonwebtoken_1.default.sign({ _id: existingUser._id }, process.env.JWT_SECRET);
                res.status(200).json({
                    token, user: {
                        userName: existingUser.userName,
                        email: existingUser.email,
                        interests: existingUser.interests,
                        country: existingUser.country,
                    }
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Something went wrong while logging in." });
            }
        });
    }
    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns user details if user exists. If not error message.
     */
    static getUser(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                if (!token)
                    return res.status(401).json({ message: "Unauthorized" });
                const existingUser = yield (0, auth_js_1.getUserFromToken)(req, res);
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
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Something went wrong while getting user." });
            }
        });
    }
    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns user details if updated user is updated successfully. If not error message.
     *
     */
    static updateUser(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: WE SHOULD USE A MIDDLE WARE THAT FETCHES THE USER INSTEAD OF DOING IT IN MULTIPLE PLACES
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            if (!token)
                return res.status(401).json({ message: "Unauthorized" });
            // updates the user's username
            const { userName, interests, country } = req.body;
            try {
                const existingUser = yield (0, auth_js_1.getUserFromToken)(req, res);
                if (!existingUser)
                    return res.status(401).json({ message: "Unauthorized" });
                // can update username, interests and country
                if (userName)
                    existingUser.userName = userName;
                if (interests)
                    existingUser.interests = interests;
                if (country)
                    existingUser.country = country;
                yield existingUser.save();
                res.status(200).json({
                    token, user: {
                        userName: existingUser.userName,
                        email: existingUser.email,
                        interests: existingUser.interests,
                        country: existingUser.country,
                    }
                });
            }
            catch (error) {
                console.info(error);
                res.status(500).json({ message: "Something went wrong while updating user." });
            }
        });
    }
    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns success response if user deletion is successfull. If not an error response.
     */
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield (0, auth_js_1.getUserFromToken)(req, res);
                if (!existingUser)
                    return res.status(400).json({ message: "Unauthorized" });
                yield user_model_js_1.default.findByIdAndDelete(existingUser._id);
                res.status(200).json({ message: "User deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ message: "Something went wrong while deleting user." });
            }
        });
    }
    static getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ categories: constants_js_1.constants.eventCategories });
            }
            catch (error) {
                res.status(500).json({ message: "Something went wrong while getting list of categories of interest" });
            }
        });
    }
}
exports.userControllers = userControllers;
