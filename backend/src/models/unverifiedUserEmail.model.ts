import mongoose, { Document } from "mongoose";

export interface UnverifiedEmailDocument extends Document {
    email: string;
    verificationCode: string;
    createdAt: Date;
    updatedAt: Date;
}

const unverifiedEmailSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true,
    },
    verificationCode: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const UnverifiedEmail = mongoose.model<UnverifiedEmailDocument>("unverifiedEmail", unverifiedEmailSchema);
export default UnverifiedEmail;