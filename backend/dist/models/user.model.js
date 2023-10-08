"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_js_1 = require("../utils/constants.js");
const userSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: false,
        default: "InfoBlend User",
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    interests: {
        type: [String],
        enum: constants_js_1.constants.eventCategories,
    },
    country: {
        type: String,
        required: false,
        default: "Earth",
    },
    lastChecked: {
        type: Date,
        required: false,
        default: Date.now,
    }
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
