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
exports.getUserFromToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = require("mongoose");
const user_model_js_1 = __importDefault(require("../models/user.model.js"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield getUserFromToken(req, res);
        if (!existingUser)
            return res.status(401).json({ message: "Unauthorized" });
        res.locals.user = existingUser;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
});
function getUserFromToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers.authorization.split(" ")[1];
        const { _id } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = new mongoose_1.Types.ObjectId(_id);
        const existingUser = yield user_model_js_1.default.findById(userId);
        return existingUser;
    });
}
exports.getUserFromToken = getUserFromToken;
exports.default = auth;
