import mongoose, {Document} from "mongoose";
import { constants } from "../utils/constants.js";

export interface UserDocument extends Document{
    userName: string | undefined,
    password: string ,
    email: string,
    interests:[string] | undefined,
    country:string|undefined,
    lastChecked:Date|undefined, 
}

const userSchema = new mongoose.Schema({
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
        enum: constants.eventCategories,
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

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;