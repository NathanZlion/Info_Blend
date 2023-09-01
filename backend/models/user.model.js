import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        enum: [
            "Society/Politics", "Health/Nutrition", "Health/Fitness",
            "Home/Entertainment", "Science/Environment", "Society/Crime",
            "Society/Law", "Society/Politics"
        ],
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

const User = mongoose.model("User", userSchema);

export default User;